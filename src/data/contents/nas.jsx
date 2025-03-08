import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; // For internal linking

const NAS = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "NAS Homelab: Network Attached Storage for Your Home Lab",
    "description": "Learn how NAS enhances your homelab with centralized storage, redundancy, and scalability. Explore top solutions and setup tips.",
    "keywords": "nas homelab, homelab, network attached storage homelab, home lab storage, nas home server",
    "author": { "@type": "Person", "name": "Your Name" },
    "datePublished": "2025-03-08"
  };

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>NAS Homelab: Network Attached Storage for Your Home Lab</title>
        <meta 
          name="description" 
          content="Boost your homelab with NAS: centralized storage, data redundancy, and scalability. Discover top NAS solutions and setup best practices."
        />
        <meta 
          name="keywords" 
          content="nas homelab, homelab, network attached storage homelab, home lab storage, nas home server, diy storage lab"
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Main Content */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-300">
        {/* Hero Section */}
        <div className="relative mb-8 md:mb-12">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
            alt="NAS homelab setup with network attached storage"
            className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-2xl shadow-xl"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
              NAS Homelab Storage
            </h1>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Introduction */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Why NAS is Essential for Your Homelab
            </h2>
            <p className="text-base sm:text-lg leading-relaxed">
              A <strong>Network Attached Storage (NAS)</strong> system is a cornerstone of any <strong>homelab</strong>. It provides centralized storage for your data, backups, and virtual machines, making your <strong>homelab setup</strong> more efficient and reliable. Whether you’re storing media, hosting services, or experimenting with tech, a NAS ensures your data is secure, accessible, and scalable—all from your <strong>home lab</strong>.
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Benefits of NAS in a Homelab
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Centralized Storage:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Store files, backups, and media in one place for easy homelab access.</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Data Redundancy:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">RAID setups protect your homelab data from drive failures.</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Scalability:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Add drives or upgrade your NAS as your homelab grows.</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Energy Efficiency:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Low power use (10-50W) keeps your homelab running 24/7.</p>
              </li>
            </ul>
          </div>

          {/* NAS Options */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Popular NAS Solutions for Homelabs
            </h2>
            <p className="text-base sm:text-lg mb-4">
              Choose from these top NAS options for your homelab:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Synology:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">User-friendly DSM OS with apps for homelab media and backups.</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">QNAP:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">High-performance NAS with virtualization support for home labs.</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">TrueNAS (FreeNAS):</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Open-source flexibility for advanced homelab storage needs.</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">DIY NAS:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Repurpose an old PC with FreeNAS for a custom homelab NAS.</p>
              </li>
            </ul>
          </div>

          {/* Best Practices */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Best Practices for NAS Homelab Setup
            </h2>
            <p className="text-base sm:text-lg mb-4">
              Optimize your NAS homelab with these tips:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Plan for Growth:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Select a NAS with extra bays for future homelab expansion.</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Use RAID:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">RAID 1 or 5 ensures data redundancy in your home lab.</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Stay Updated:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Keep NAS firmware current for homelab security.</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Backup Strategy:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Add offsite backups to protect your homelab data.</p>
              </li>
            </ul>
            <p className="text-base sm:text-lg mt-4">
              Learn more in our <Link to="/homelab-setup" className="text-indigo-600 dark:text-indigo-400 hover:underline">homelab setup guide</Link>.
            </p>
          </div>

          {/* Video Tutorial & CTA */}
          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-xl shadow-md text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-indigo-800 dark:text-indigo-200">
              Set Up Your NAS Homelab Now
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
              Watch this tutorial by DevOpsJourney to configure your NAS homelab:
            </p>
            <a
              href="https://www.youtube.com/watch?v=FF56MTZHApE&ab_channel=DevOpsJourney"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-indigo-600 dark:bg-indigo-700 text-white rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-800 transition-colors duration-200 mb-4"
            >
              Watch Tutorial
            </a>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              Need hardware details? Visit our <Link to="/homelab-requirements" className="text-indigo-600 dark:text-indigo-400 hover:underline">requirements guide</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default NAS;