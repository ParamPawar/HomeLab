import React from 'react';

const sbc = {
  title: 'Low-Cost Single Board Computers (SBCs)',
  content: (
    <div className="space-y-6">
      <p className="text-lg">
        Low-cost Single Board Computers (SBCs) serve as excellent alternatives to the Raspberry Pi, offering a variety of performance levels and features at an affordable price. These compact devices are ideal for a home lab setup, providing a cost-effective platform for learning, experimentation, and even running lightweight production environments.
      </p>
      <h2 className="text-xl font-semibold mt-6">Benefits of SBCs</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Affordability:</strong> SBCs are typically inexpensive, making them accessible for hobbyists and beginners.
        </li>
        <li>
          <strong>Compact Size:</strong> Their small form factor allows you to deploy multiple units in a limited space, enabling versatile and scalable setups.
        </li>
        <li>
          <strong>Energy Efficiency:</strong> Designed to run on minimal power, SBCs help reduce energy consumption for always-on home lab environments.
        </li>
        <li>
          <strong>Versatility:</strong> With a range of interfaces and connectivity options, SBCs can be used for everything from media streaming and IoT projects to learning programming and electronics.
        </li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Popular SBC Options</h2>
      <p className="text-lg">
        In addition to the Raspberry Pi, several other SBC options are available that cater to different needs and budgets:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Orange Pi:</strong> Known for its cost-effectiveness and robust performance, suitable for a range of DIY projects.
        </li>
        <li>
          <strong>Banana Pi:</strong> Offers enhanced processing capabilities and supports multiple operating systems for diverse applications.
        </li>
        <li>
          <strong>Rock Pi:</strong> Designed for high-performance computing in a compact form factor, ideal for more demanding tasks in your home lab.
        </li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">Applications in a Home Lab</h2>
      <p className="text-lg">
        SBCs can be integrated into your home lab in various ways:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Running lightweight servers, such as web or media servers.</li>
        <li>Managing IoT projects and automating home tasks.</li>
        <li>Providing a low-cost platform for learning programming, electronics, and system administration.</li>
      </ul>
      <h2 className="text-xl font-semibold mt-6">YouTube Video Tutorial</h2>
      <p className="text-lg">
        For a step-by-step guide on setting up and optimizing SBCs in your home lab, check out our video tutorial:
      </p>
      <p className="text-lg">
        <a href="https://www.youtube.com/watch?v=aKmKo_Ua7rQ&t=138s&ab_channel=HardwareHaven" target="_blank" rel="noopener noreferrer">
          YouTube by HardwareHaven: SBC Home Lab Setup
        </a>
      </p>
    </div>
  ),
};

export default sbc;
