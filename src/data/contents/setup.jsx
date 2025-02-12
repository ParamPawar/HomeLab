import React from 'react';

const Setup = () => (
  <article className="prose dark:prose-invert max-w-none p-8">
    <h1>Initial Setup Guide</h1>
    <p>
      Setting up your home lab is a critical step towards hands-on learning and innovation. This guide will walk you through the necessary hardware installations, software configurations, and network setups to build a robust, high-performance home lab environment.
    </p>
    
    <h2>Hardware Installation</h2>
    <p>
      The first step is to choose and install the right hardware for your home lab. Depending on your budget and requirements, you might consider:
    </p>
    <ul>
      <li>
        <strong>Raspberry Pi:</strong> An affordable and energy-efficient option ideal for lightweight tasks and experimentation.
      </li>
      <li>
        <strong>Low-Cost SBCs (Single Board Computers):</strong> These offer similar benefits to the Raspberry Pi, often with unique features tailored to specific needs.
      </li>
      <li>
        <strong>NAS (Network Attached Storage):</strong> Provides high-performance storage solutions, perfect for data-intensive projects, though they can be more expensive.
      </li>
      <li>
        <strong>Old Desktop PCs/Servers:</strong> Repurposing older hardware can be an economical way to create a powerful lab for virtualization or multiple service hosting.
      </li>
    </ul>
    
    <h2>Software Installation</h2>
    <p>
      After installing your hardware, the next step is to set up the software environment. Begin by installing a robust operating system that fits your lab's purpose. Popular choices include various Linux distributions such as Ubuntu Server, Debian, or CentOS, though Windows Server and FreeBSD are also viable options.
    </p>
    <p>
      Once the OS is in place, install the necessary tools and applications:
    </p>
    <ul>
      <li>
        <strong>Virtualization Tools:</strong> Software such as VirtualBox, VMware, or Proxmox VE allows you to create virtual environments for testing and development.
      </li>
      <li>
        <strong>Containerization Software:</strong> Docker helps manage containerized applications, offering efficient resource utilization.
      </li>
      <li>
        <strong>Monitoring and Automation:</strong> Tools like Prometheus, Grafana, and Ansible assist in performance monitoring and automating routine tasks.
      </li>
    </ul>
    
    <h2>Network Configuration</h2>
    <p>
      A reliable network setup is essential. Configure your router, firewall, and VPN (if needed) to secure and manage your home lab's connectivity. Assign static IP addresses for critical devices and enable port forwarding to ensure that your services are accessible and secure.
    </p>
    
    <h2>Final Steps and Testing</h2>
    <p>
      With hardware and software in place, it’s time to run thorough tests. Verify that all components are communicating properly and that your configurations work as expected. Regularly back up your settings and document any customizations or issues encountered during the setup process. This ongoing testing ensures your lab remains stable and secure.
    </p>
    
    <h2>Additional Resources</h2>
    <p>
      For further guidance and advanced configurations, explore our other sections on hardware, requirements, and advanced topics. 
    </p>
    <p>
      <a href="#" target="_blank" rel="noopener noreferrer">YouTube Video: [Link Placeholder]</a>
    </p>
  </article>
);

export default Setup;
