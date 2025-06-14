// Use relative URLs for Next.js API routes
const API_URL = '/api';

// Auth API calls
export const authAPI = {
  async register(data: { name: string; email: string; password: string; userType: string; role?: string }) {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      return await response.json();
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  async login(data: { email: string; password: string }) {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Login failed');
      }

      return responseData;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  async getCurrentUser() {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      const response = await fetch(`${API_URL}/auth/me`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to get user data');
      }

      return responseData.data;
    } catch (error) {
      console.error('Get current user error:', error);
      throw error;
    }
  },
};

// Contact API calls
export const contactAPI = {
  submitContact: async (contactData: { name: string; email: string; subject: string; message: string }) => {
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });
      
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Contact submission failed');
      }
      
      return data;
    } catch (error) {
      console.error('Contact submission error:', error);
      throw error;
    }
  },
}; 