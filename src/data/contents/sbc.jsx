import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; // For internal linking

const SBC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "SBC Homelab: Low-Cost Single Board Computers for Your Home Lab",
    "description": "Discover affordable SBCs for your homelab. Learn their benefits, popular options, and applications for a cost-effective home lab setup.",
    "keywords": "sbc homelab, homelab, single board computer homelab, low-cost home lab, home server sbc",
    "author": { "@type": "Person", "name": "Your Name" },
    "datePublished": "2025-03-08"
  };

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>SBC Homelab: Low-Cost Single Board Computers for Home Labs</title>
        <meta 
          name="description" 
          content="Explore low-cost SBCs for your homelab. Affordable, compact, and versatile—perfect for home servers, IoT, and learning."
        />
        <meta 
          name="keywords" 
          content="sbc homelab, homelab, single board computer homelab, low-cost home lab, home server sbc, diy tech lab"
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Main Content */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-300">
        {/* Hero Section */}
        <div className="relative mb-8 md:mb-12">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
            alt="SBC homelab setup with single board computers"
            className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-2xl shadow-xl"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
              SBC Homelab Solutions
            </h1>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Introduction */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Why SBCs Are Perfect for Your Homelab
            </h2>
            <p className="text-base sm:text-lg leading-relaxed">
              Low-cost <strong>Single Board Computers (SBCs)</strong> are fantastic alternatives to the Raspberry Pi for building a <strong>homelab</strong>. These compact, affordable devices offer diverse performance levels and features, making them ideal for <strong>homelab setups</strong>. Whether you’re experimenting with lightweight home servers, learning tech skills, or running IoT projects, SBCs provide a budget-friendly platform to power your <strong>home lab</strong>.
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Benefits of Using SBCs in a Homelab
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Affordability:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Most SBCs cost $20-$50, keeping your homelab budget-friendly.</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Compact Size:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Smaller than a credit card, SBCs fit multiple units into any homelab space.</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Energy Efficiency:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Low power draw (5-10W) makes SBCs ideal for 24/7 homelab operation.</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Versatility:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">GPIO pins, USB, and Wi-Fi enable diverse homelab projects.</p>
              </li>
            </ul>
          </div>

          {/* Popular SBC Options */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Top SBCs for Your Homelab
            </h2>
            <p className="text-base sm:text-lg mb-4">
              Beyond the Raspberry Pi, these SBCs offer unique strengths for your homelab:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Orange Pi:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Low-cost with strong performance for homelab DIY projects (e.g., $20-$40).</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Banana Pi:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Enhanced CPU and OS support for versatile homelab applications.</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Rock Pi:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">High-performance option for demanding homelab tasks like media servers.</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Odroid:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Powerful SBC with eMMC storage for faster homelab performance.</p>
              </li>
            </ul>
          </div>

          {/* Applications */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              SBC Homelab Applications
            </h2>
            <p className="text-base sm:text-lg mb-4">
              Integrate SBCs into your homelab for these practical uses:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Lightweight Servers:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Host web servers (Apache) or media servers (Plex) in your homelab.</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">IoT Automation:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Run Home Assistant for smart home control in your home lab.</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Learning Platform:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Practice coding, Linux, and networking on a low-cost SBC homelab.</p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Network Tools:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">Use Pi-hole or OpenWRT for homelab network management.</p>
              </li>
            </ul>
            <p className="text-base sm:text-lg mt-4">
              Explore more in our <Link to="/homelab-projects" className="text-indigo-600 dark:text-indigo-400 hover:underline">homelab projects guide</Link>.
            </p>
          </div>

          {/* Video Tutorial & CTA */}
          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-xl shadow-md text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-indigo-800 dark:text-indigo-200">
              Build Your SBC Homelab Today
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
              Watch this tutorial by HardwareHaven to set up an SBC homelab:
            </p>
            <a
              href="https://www.youtube.com/watch?v=aKmKo_Ua7rQ&t=138s&ab_channel=HardwareHaven"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-indigo-600 dark:bg-indigo-700 text-white rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-800 transition-colors duration-200 mb-4"
            >
              Watch Tutorial
            </a>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              Need setup tips? See our <Link to="/homelab-setup" className="text-indigo-600 dark:text-indigo-400 hover:underline">homelab setup guide</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SBC;