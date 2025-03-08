import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; // For internal linking

const Legacy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Legacy Hardware Homelab: Repurposing Old Systems for Your Home Lab",
    "description": "Learn how to build a cost-effective homelab with legacy hardware. Discover benefits, optimization tips, and practical uses.",
    "keywords": "legacy hardware homelab, homelab, home lab legacy systems, repurposed home server, diy tech lab",
    "author": { "@type": "Person", "name": "Your Name" },
    "datePublished": "2025-03-08"
  };

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>Legacy Hardware Homelab: Repurpose Old Systems for Your Home Lab</title>
        <meta 
          name="description" 
          content="Build a homelab with legacy hardware like old PCs and servers. Affordable, educational, and sustainable—perfect for DIY tech enthusiasts."
        />
        <meta 
          name="keywords" 
          content="legacy hardware homelab, homelab, home lab legacy systems, repurposed home server, diy tech lab, legacy pc homelab"
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Main Content */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-300">
        {/* Hero Section */}
        <div className="relative mb-8 md:mb-12">
          <img
            src="https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?auto=format&fit=crop&q=80"
            alt="Legacy hardware homelab setup with old PCs and servers"
            className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-2xl shadow-xl"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
              Legacy Hardware Homelab
            </h1>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Introduction */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Repurposing Legacy Hardware for Your Homelab
            </h2>
            <p className="text-base sm:text-lg leading-relaxed">
              <strong>Legacy hardware</strong>, like old desktop PCs and servers, is a budget-friendly way to create a powerful <strong>homelab</strong>. While modern systems offer cutting-edge performance, repurposing <strong>legacy systems</strong> lets you experiment, learn, and build a <strong>home lab</strong> without breaking the bank. Upgrade these systems with RAM, SSDs, or better cooling to run virtual machines, host services, or test software in your own DIY tech lab.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mt-4">
              Using legacy hardware in your homelab not only saves money but also teaches you the nuts and bolts of system administration, hardware optimization, and sustainable tech practices—skills that shine in any IT career.
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Benefits of a Legacy Hardware Homelab
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Cost Efficiency:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Reuse old PCs or servers to cut homelab setup costs to nearly zero.</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Learning Opportunity:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Master troubleshooting and upgrades with real-world homelab challenges.</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Resource Optimization:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Turn legacy systems into capable homelab servers with smart upgrades.</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Sustainability:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Reduce e-waste by extending the life of your homelab hardware.</p>
              </li>
            </ul>
          </div>

          {/* Optimization Tips */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Tips for Optimizing Legacy Systems in Your Homelab
            </h2>
            <p className="text-base sm:text-lg mb-4">
              Make the most of your legacy hardware homelab with these strategies:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Upgrade Components:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Add RAM (8-16GB) and SSDs for faster homelab performance.</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Lightweight OS:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Install Ubuntu Server or Debian to keep your homelab lean.</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Virtualization:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Use Proxmox or VirtualBox for efficient homelab VMs.</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Cooling & Maintenance:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Improve airflow and clean regularly to extend homelab life.</p>
              </li>
            </ul>
            <p className="text-base sm:text-lg mt-4">
              Need more setup advice? Check our <Link to="/homelab-setup" className="text-indigo-600 dark:text-indigo-400 hover:underline">homelab setup guide</Link>.
            </p>
          </div>

          {/* Conclusion & CTA */}
          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-xl shadow-md text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-indigo-800 dark:text-indigo-200">
              Start Your Legacy Hardware Homelab
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
              Repurposing legacy hardware transforms old PCs into powerful <strong>homelab servers</strong>. It’s affordable, educational, and eco-friendly—perfect for DIY tech enthusiasts. Optimize your setup to host VMs, web services, or storage in your <strong>home lab</strong>.
            </p>
            <Link
              to="/homelab-requirements"
              className="inline-block px-6 py-2 bg-indigo-600 dark:bg-indigo-700 text-white rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-800 transition-colors duration-200"
            >
              Explore Hardware Needs
            </Link>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mt-4">
              Want project ideas? See our <Link to="/homelab-projects" className="text-indigo-600 dark:text-indigo-400 hover:underline">homelab projects guide</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Legacy;