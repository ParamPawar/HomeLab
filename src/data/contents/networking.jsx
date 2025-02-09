import React from 'react';

export const networking = {
  title: 'Networking Basics',
  content: (
    <div className="space-y-6">
      <img
        src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80"
        alt="Network infrastructure"
        className="w-full h-64 object-cover rounded-lg"
      />
      <p className="text-lg">
        Understanding networking is crucial for setting up a home lab. Here are the key concepts you need to know:
      </p>
      <h2 className="text-xl font-semibold mt-6">Basic Network Components</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Router - Your gateway to the internet</li>
        <li>Switch - Connects your devices locally</li>
        <li>Network Interface Cards (NICs)</li>
        <li>Ethernet Cables</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Network Configurations</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>IP Addressing</li>
        <li>Subnetting</li>
        <li>VLAN Setup</li>
        <li>DNS Configuration</li>
      </ul>
    </div>
  ),
};