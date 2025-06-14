import React from 'react';

export default function Research() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Research</h1>
      <div className="grid grid-cols-1 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Our Research</h2>
          <p className="text-gray-600 mb-4">
            We are committed to advancing education through innovative research and development.
            Our research initiatives focus on improving learning outcomes and developing new
            educational technologies.
          </p>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Current Research Areas</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Educational Technology</li>
              <li>Learning Analytics</li>
              <li>Student Engagement</li>
              <li>Assessment Methods</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 