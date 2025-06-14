import mongoose from 'mongoose';

// Define the type for our mongoose cache
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Extend the global type to include our mongoose cache
declare global {
  var mongoose: MongooseCache | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Initialize the cache
const cached: MongooseCache = global.mongoose || { conn: null, promise: null };

// Set the global cache if it doesn't exist
if (!global.mongoose) {
  global.mongoose = cached;
}

export async function connectToDatabase() {
  try {
    if (cached.conn) {
      console.log('Using cached database connection');
      return cached.conn;
    }

    if (!cached.promise) {
      const opts = {
        bufferCommands: false,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        family: 4, // Use IPv4, skip trying IPv6
        maxPoolSize: 10, // Maintain up to 10 socket connections
        minPoolSize: 5, // Maintain at least 5 socket connections
        connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
        retryWrites: true,
        retryReads: true,
      };

      console.log('Connecting to MongoDB...');
      console.log('MongoDB URI:', (MONGODB_URI as string).replace(/\/\/[^:]+:[^@]+@/, '//****:****@')); // Log URI without credentials

      cached.promise = mongoose.connect(MONGODB_URI as string, opts)
        .then((mongoose) => {
          console.log('MongoDB connected successfully');
          return mongoose;
        })
        .catch((error) => {
          console.error('MongoDB connection error:', error);
          throw error;
        });
    }

    try {
      cached.conn = await cached.promise;
    } catch (e: any) {
      cached.promise = null;
      console.error('MongoDB connection error:', e);
      throw new Error(`Failed to connect to MongoDB: ${e.message}`);
    }

    // Add connection event listeners
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    });

    mongoose.connection.on('reconnected', () => {
      console.log('MongoDB reconnected');
    });

    return cached.conn;
  } catch (error: any) {
    console.error('Database connection error:', error);
    throw new Error(`Database connection failed: ${error.message}`);
  }
} 