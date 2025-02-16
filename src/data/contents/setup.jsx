import React from 'react';

const setup = {
  title: 'Home Lab Setup: Your Comprehensive Guide',
  content: (
    <div className="space-y-6">
      <img
        src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80"
        alt="Step-by-step home lab setup"
        className="w-full h-64 object-cover rounded-lg"
      />
      <p className="text-lg">
        Building a home lab is a crucial step for tech enthusiasts, IT professionals, and hobbyists alike. In this guide, you'll learn how to establish a robust home lab environment that is scalable, secure, and perfectly tailored to your needs.
      </p>
      <h2 className="text-xl font-semibold mt-6">Step-by-Step Home Lab Setup Process</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <strong>Plan Your Environment:</strong> Define your goals, assess the hardware and software requirements, and outline your lab’s scope.
        </li>
        <li>
          <strong>Gather Essential Hardware:</strong> Invest in reliable servers, workstations, and networking equipment to ensure a stable setup.
        </li>
        <li>
          <strong>Install and Configure:</strong> Set up your operating systems, virtualization platforms, and necessary software tools.
        </li>
        <li>
          <strong>Implement Security Measures:</strong> Configure firewalls, antivirus software, and other security protocols to protect your network.
        </li>
        <li>
          <strong>Test and Optimize:</strong> Validate the performance of your home lab, optimize settings, and adjust configurations as needed.
        </li>
      </ol>
      <p className="text-lg mt-4">
        Whether you are setting up a lab for learning, testing, or production, this guide offers clear, actionable steps to help you get started. A well-organized home lab can boost your technical skills and provide a safe environment for experimenting with new technologies.
      </p>
      <p className="text-lg">
        Explore more topics on Home Lab setup and maintenance to ensure your lab remains efficient, secure, and future-proof.
      </p>
    </div>
  ),
};

export default setup;
