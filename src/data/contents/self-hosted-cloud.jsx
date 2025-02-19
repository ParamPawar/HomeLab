import React from 'react';

const selfHostedCloud = {
  title: 'Self-Hosted Cloud Solutions for Your Home Lab',
  content: (
    <div className="space-y-6">
      <p className="text-lg">
        A self-hosted cloud is a powerful way to maintain control over your data and services in your home lab. It allows you to run cloud applications locally, ensuring privacy, security, and complete customizability for your projects.
      </p>
      <h2 className="text-xl font-semibold mt-6">Key Advantages</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Privacy & Control:</strong> Keep your data on-premises without relying on third-party cloud services.
        </li>
        <li>
          <strong>Cost Efficiency:</strong> Leverage your existing hardware to save on recurring cloud fees.
        </li>
        <li>
          <strong>Scalability:</strong> Easily expand your cloud services as your home lab grows.
        </li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Popular Platforms</h2>
      <p className="text-lg">
        Platforms like Nextcloud and ownCloud offer robust solutions for file sharing, collaboration, and data management.
      </p>
      <h2 className="text-xl font-semibold mt-6">YouTube Video Tutorial</h2>
      <p className="text-lg">
        For a comprehensive guide on setting up a self-hosted cloud in your home lab, watch our tutorial:
      </p>
      <p className="text-lg">
        <a href="https://www.youtube.com/watch?v=l9yY_VWCWlM&ab_channel=TechnoTim" target="_blank" rel="noopener noreferrer">
          YouTube by TechnoTim: Self-Hosted Cloud Setup
        </a>
      </p>
    </div>
  ),
};

export default selfHostedCloud;
