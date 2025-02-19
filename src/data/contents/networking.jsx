import React from 'react';

const networking = {
  title: 'Networking in Your Home Lab',
  content: (
    <div className="space-y-6">
      <p className="text-lg">
        Networking is a critical component of any home lab, ensuring seamless communication between devices and optimizing performance, security, and scalability.
      </p>
      
      <h2 className="text-xl font-semibold mt-6">Essential Networking Components</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Router:</strong> Manages internet access and network traffic.</li>
        <li><strong>Switch:</strong> Connects multiple devices within the network.</li>
        <li><strong>Network Interface Cards (NICs):</strong> Enable devices to connect to the network.</li>
        <li><strong>Ethernet Cables:</strong> Provide fast and stable wired connections.</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Network Configuration Basics</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>IP Addressing:</strong> Assign static or dynamic IPs for better management.</li>
        <li><strong>Subnetting:</strong> Enhances security and network efficiency.</li>
        <li><strong>VLAN Setup:</strong> Segments network traffic for better performance and isolation.</li>
        <li><strong>DNS Configuration:</strong> Ensures smooth domain name resolution.</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Best Practices for Home Lab Networking</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Plan for scalability to accommodate future expansion.</li>
        <li>Use VLANs to segregate traffic and enhance security.</li>
        <li>Implement firewalls and VPNs to protect against threats.</li>
        <li>Regularly update firmware on network devices for security and stability.</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-6">Recommended Networking Tools</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>pfSense:</strong> A powerful open-source firewall and router solution.</li>
        <li><strong>OpenWrt:</strong> A customizable Linux-based firmware for routers.</li>
        <li><strong>Mesh Networking:</strong> Expands wireless coverage with better reliability.</li>
      </ul>
      
      <p className="text-lg">
        A well-planned network setup optimizes performance, ensures security, and prepares your home lab for future growth.
      </p>
      

    </div>
  ),
};

export default networking;