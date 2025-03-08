import React from 'react';
import { Helmet } from 'react-helmet';

const Setup = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Homelab Setup Guide: Step-by-Step Instructions for Your Home Lab",
    "description": "Master homelab setup with this comprehensive guide. Learn to plan, build, and optimize your home lab for learning, testing, or production.",
    "keywords": ["homelab", "home lab setup", "homelab guide", "home server setup", "diy tech lab"],
    "author": { "@type": "Person", "name": "Your Name" },
    "datePublished": "2025-03-08"
  };

  return (
    <>
      <Helmet>
        <title>Homelab Setup Guide: Step-by-Step Instructions for Your Home Lab</title>
        <meta name="description" content="Master homelab setup with this comprehensive guide. Learn to plan, build, and optimize your home lab for learning, testing, or production." />
        <meta name="keywords" content="homelab, home lab setup, homelab guide, home server setup, diy tech lab" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <section className="min-h-screen bg-gray-100 dark:bg-gray-900 py-6 md:py-10 px-4 sm:px-6 lg:px-8 text-gray-800 dark:text-gray-200 transition-all duration-300">
        <div className="relative mb-8 md:mb-12">
          <img
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80"
            alt="Step-by-step homelab setup"
            className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-2xl shadow-xl"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
              Homelab Setup Guide
            </h1>
          </div>
        </div>
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <p className="text-base sm:text-lg leading-relaxed">
              Building a homelab is a rewarding journey for tech enthusiasts, IT professionals, and hobbyists. This guide will walk you through the essential steps to set up a robust, scalable, and secure home lab tailored to your needs.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Step-by-Step Homelab Setup Process
            </h2>
            <ol className="list-decimal pl-6 space-y-4 text-sm sm:text-base">
              <li>
                <strong className="font-semibold text-gray-900 dark:text-gray-100">Plan Your Homelab:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Define your goals, assess the hardware and software requirements, and outline your lab’s scope.</p>
              </li>
              <li>
                <strong className="font-semibold text-gray-900 dark:text-gray-100">Gather Essential Hardware:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Invest in reliable servers, workstations, and networking equipment to ensure a stable setup.</p>
              </li>
              <li>
                <strong className="font-semibold text-gray-900 dark:text-gray-100">Install and Configure Software:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Set up your operating systems, virtualization platforms, and necessary software tools.</p>
              </li>
              <li>
                <strong className="font-semibold text-gray-900 dark:text-gray-100">Implement Security Measures:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Configure firewalls, antivirus software, and other security protocols to protect your network.</p>
              </li>
              <li>
                <strong className="font-semibold text-gray-900 dark:text-gray-100">Test and Optimize:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Validate the performance of your homelab, optimize settings, and adjust configurations as needed.</p>
              </li>
            </ol>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-xl shadow-md text-center">
            <p className="text-base sm:text-base leading-relaxed">
              Whether you're setting up a homelab for learning, testing, or production, this guide provides clear, actionable steps to get you started. A well-organized homelab can boost your technical skills and offer a safe environment for experimenting with new technologies.
            </p>
            <p className="text-base sm:text-base mt-4">
              Explore more topics on homelab setup and maintenance to keep your lab efficient, secure, and future-proof. Check out our <a href="/homelab-requirements" className="text-indigo-600 dark:text-indigo-400 hover:underline">homelab requirements</a> and <a href="/homelabprojects" className="text-indigo-600 dark:text-indigo-400 hover:underline">homelab projects</a> pages for more information.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Setup;