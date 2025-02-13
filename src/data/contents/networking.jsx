// import React from 'react';

// export const networking = {
//   title: 'Networking Basics',
//   content: (
//     <div className="space-y-6">
//       <img
//         src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80"
//         alt="Network infrastructure"
//         className="w-full h-64 object-cover rounded-lg"
//       />
//       <p className="text-lg">
//         Understanding networking is crucial for setting up a home lab. Here are the key concepts you need to know:
//       </p>
//       <h2 className="text-xl font-semibold mt-6">Basic Network Components</h2>
//       <ul className="list-disc pl-6 space-y-2">
//         <li>Router - Your gateway to the internet</li>
//         <li>Switch - Connects your devices locally</li>
//         <li>Network Interface Cards (NICs)</li>
//         <li>Ethernet Cables</li>
//       </ul>
//       <h2 className="text-xl font-semibold mt-6">Network Configurations</h2>
//       <ul className="list-disc pl-6 space-y-2">
//         <li>IP Addressing</li>
//         <li>Subnetting</li>
//         <li>VLAN Setup</li>
//         <li>DNS Configuration</li>
//       </ul>
//     </div>
//   ),
// };
import React from 'react';

export const networking = {
  title: 'Networking in Your Home Lab',
  content: (
    <div className="space-y-6">
      <p className="text-lg">
        Networking is a critical component of any home lab, as it connects all your devices and ensures seamless communication between systems. A well-designed network infrastructure enhances performance, security, and scalability in your home lab environment.
      </p>
      <h2 className="text-xl font-semibold mt-6">Key Components of Networking</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Routers & Switches:</strong> Essential for directing traffic and connecting multiple devices, ensuring a stable and integrated network.
        </li>
        <li>
          <strong>Cabling and Wireless Solutions:</strong> High-quality Ethernet cables and reliable wireless equipment are key to maintaining fast and stable connections.
        </li>
        <li>
          <strong>Network Segmentation:</strong> Dividing your network into segments (using VLANs) improves performance and bolsters security.
        </li>
        <li>
          <strong>Static IP Assignment:</strong> Assigning fixed IP addresses to critical devices simplifies management and troubleshooting.
        </li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Best Practices for Home Lab Networking</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Design your network with scalability in mind, allowing for future expansion.</li>
        <li>Implement VLANs to segregate traffic for enhanced security and performance.</li>
        <li>Use robust firewall solutions and VPNs to secure your network from external threats.</li>
        <li>Regularly update firmware on routers, switches, and other network devices to maintain compatibility and security.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Popular Networking Tools & Solutions</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>pfSense:</strong> A powerful open-source firewall and router solution to manage and monitor network traffic.
        </li>
        <li>
          <strong>OpenWrt:</strong> A customizable Linux-based firmware for routers that provides extensive features and flexibility.
        </li>
        <li>
          <strong>Mesh Networking Systems:</strong> Improve wireless coverage and connectivity using mesh networks.
        </li>
      </ul>
      <p className="text-lg">
        By implementing these networking strategies and tools, you can build a resilient and efficient network infrastructure for your home lab. A well-planned network setup not only optimizes performance but also ensures the security and scalability of your entire environment.
      </p>
      <h2 className="text-xl font-semibold mt-6">YouTube Video Tutorial</h2>
      <p className="text-lg">
        For a comprehensive video guide on setting up and optimizing your home lab networking, check out this tutorial:
      </p>
      <p className="text-lg">
        <a href="#" target="_blank" rel="noopener noreferrer">
          YouTube Video: [Link Placeholder]
        </a>
      </p>
    </div>
  ),
};
