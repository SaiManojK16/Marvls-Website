import React from 'react';

export default function Support() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Support</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
          <p className="text-gray-600 mb-4">Need help? Our support team is here to assist you.</p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Contact Us
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">FAQ</h2>
          <p className="text-gray-600">Frequently asked questions and answers coming soon.</p>
        </div>
      </div>
    </div>
  );
} 