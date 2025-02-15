import React from 'react';

const requirements = {
  title: 'Home Lab Requirements: Essential Hardware & Software',
  content: (
    <div className="space-y-6">
      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
        alt="Home Lab Setup Requirements"
        className="w-full h-64 object-cover rounded-lg"
      />
      <p className="text-lg">
        Setting up a home lab is an exciting journey into the world of technology. To ensure a successful and efficient home lab, it's essential to start with the right mix of hardware and software tailored to your needs.
      </p>
      <h2 className="text-xl font-semibold mt-6">Essential Hardware Requirements</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Servers & Workstations:</strong> Invest in reliable machines that can handle multiple tasks simultaneously, ensuring smooth performance.
        </li>
        <li>
          <strong>Networking Equipment:</strong> High-quality routers, switches, and cabling are crucial for maintaining a stable and secure connection.
        </li>
        <li>
          <strong>Storage Solutions:</strong> Consider NAS systems or external drives for scalable and secure data storage.
        </li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Must-Have Software Components</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Operating Systems:</strong> Choose between Linux, Windows, or macOS to match your learning and deployment needs.
        </li>
        <li>
          <strong>Virtualization Tools:</strong> Tools like VirtualBox, VMware, or Proxmox allow you to run multiple operating systems on a single machine.
        </li>
        <li>
          <strong>Security Solutions:</strong> Firewalls, antivirus software, and monitoring tools are essential to protect your home lab from potential threats.
        </li>
      </ul>
      <p className="text-lg mt-4">
        A well-planned home lab not only enhances your technical skills but also provides a robust environment for testing, learning, and running production-level services. By carefully selecting the right hardware and software, you can create a scalable and secure setup that grows with your needs.
      </p>
      <p className="text-lg">
        Explore our other guides to learn more about setting up, optimizing, and troubleshooting your home lab. Your journey to mastering IT starts with the right foundation.
      </p>
    </div>
  ),
};

export default requirements;
