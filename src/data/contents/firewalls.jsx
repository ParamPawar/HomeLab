import React from 'react';

const firewalls = {
  title: 'Advanced Firewalls for Home Labs: Protect Your Network',
  content: (
    <div className="space-y-6">
      <p className="text-lg">
        Firewalls are critical for securing your home lab by controlling network traffic and preventing unauthorized access. They help safeguard your data and infrastructure from external threats while allowing legitimate traffic to flow smoothly.
      </p>
      <h2 className="text-xl font-semibold mt-6">Key Benefits of Home Lab Firewalls</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Enhanced Security:</strong> Block malicious traffic and protect sensitive information with advanced filtering.
        </li>
        <li>
          <strong>Network Segmentation:</strong> Isolate different parts of your lab to contain potential breaches.
        </li>
        <li>
          <strong>Real-Time Monitoring:</strong> Detect and respond to suspicious activities as they occur.
        </li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Applications in Your Home Lab</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Protecting internal networks from external threats.</li>
        <li>Managing traffic between virtual environments.</li>
        <li>Providing an additional layer of security for remote access solutions.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">YouTube Video Tutorial</h2>
      <p className="text-lg">
        For a step-by-step guide on setting up and configuring advanced firewalls in your home lab, watch our video tutorial:
      </p>
      <p className="text-lg">
        <a href="#" target="_blank" rel="noopener noreferrer">
          YouTube Video: [Link Placeholder]
        </a>
      </p>
    </div>
  ),
};

export default firewalls;
