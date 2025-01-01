import React from 'react';

interface Content {
  title: string;
  content: React.ReactNode;
}

export const contents: Record<string, Content> = {
  introduction: {
    title: 'Introduction to Home Labs',
    content: (
      <div className="space-y-6">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
          alt="Modern home lab setup"
          className="w-full h-64 object-cover rounded-lg"
        />
        <p className="text-lg">
          A home lab is a personal testing environment that allows tech enthusiasts,
          IT professionals, and hobbyists to experiment with various technologies,
          learn new skills, and test configurations in a safe environment.
        </p>
        <h2 className="text-xl font-semibold mt-6">Why Build a Home Lab?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Hands-on learning experience</li>
          <li>Safe environment for testing</li>
          <li>Skill development</li>
          <li>Career advancement</li>
          <li>Personal projects hosting</li>
        </ul>
      </div>
    ),
  },
};