import React from 'react';

export default function Resources() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Learning Materials</h2>
          <p className="text-gray-600 mb-4">Access our comprehensive collection of learning resources.</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Study Guides</li>
            <li>Practice Tests</li>
            <li>Video Tutorials</li>
            <li>Interactive Exercises</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Teacher Resources</h2>
          <p className="text-gray-600 mb-4">Tools and materials for educators.</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Lesson Plans</li>
            <li>Teaching Guides</li>
            <li>Assessment Tools</li>
            <li>Professional Development</li>
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Parent Resources</h2>
          <p className="text-gray-600 mb-4">Support materials for parents and guardians.</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Learning Tips</li>
            <li>Progress Tracking</li>
            <li>Support Guides</li>
            <li>Community Resources</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 