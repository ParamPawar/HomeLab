import React from 'react';

const introduction = {
  title: 'Introduction to Home Labs',
  content: (
    <div className="space-y-6">
      <img
        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
        alt="Modern home lab setup"
        className="w-full h-64 object-cover rounded-lg"
      />
      <p className="text-lg">
        Home labs are unique to each creator and serve different purposes. Here's a collection of perspectives from various creators about what a home lab means to them:
      </p>
      <h2 className="text-xl font-semibold mt-6">Perspectives on Home Labs:</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Hardware Haven: </strong> Hosting things wherever, on whatever, and however you want.
        </li>
        <li>
          <strong>Techno Tim: </strong> A safe environment for testing, learning, and experimenting without breaking production systems.
        </li>
        <li>
          <strong>2GuysTek: </strong>
          <ul className="list-disc pl-6">
            <li>A playground to build IT-related skills, such as system or network administration.</li>
            <li>A practical space to host useful applications and services.</li>
          </ul>
        </li>
        <li>
          <strong>Jim's Garage:</strong> A way to tackle challenging technical work from home, enhancing job prospects, security, and privacy.
        </li>
        <li>
          <strong>Lawrence Systems:</strong> Hands-on experimentation with technology, learning from mistakes without risking large-scale outages.
        </li>
      </ul>
      <p className="text-lg mt-4">
        For me, it's more than just a hobby; it's a deeply satisfying way to explore and master technology, seeing systems work together from a developer's perspective.
      </p>
    </div>
  ),
};

export default introduction; // ✅ Correctly exporting the object
