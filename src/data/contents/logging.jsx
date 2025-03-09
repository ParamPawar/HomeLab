import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; // For internal linking

const Logging = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Centralized Logging for Homelabs: Monitor and Debug Your Home Lab",
    "description": "Set up centralized logging in your homelab with tools like ELK Stack and Graylog. Learn benefits, implementation, and tips for optimizing your home lab.",
    "keywords": "logging homelab, homelab, home lab logging, elk stack homelab, graylog homelab, centralized logging homelab",
    "author": { "@type": "Person", "name": "Your Name" },
    "datePublished": "2025-03-08"
  };

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>Centralized Logging for Homelabs: Track Your Home Lab</title>
        <meta 
          name="description" 
          content="Master centralized logging in your homelab with ELK Stack, Graylog, and more. Discover benefits, tools, and best practices for monitoring and debugging."
        />
        <meta 
          name="keywords" 
          content="logging homelab, homelab, home lab logging, elk stack homelab, graylog homelab, centralized logging homelab, splunk homelab"
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Main Content */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-300">
        {/* Hero Section */}
        <div className="relative mb-8 md:mb-12">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
            alt="Centralized logging dashboard in a homelab"
            className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-2xl shadow-xl"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
              Centralized Logging for Homelabs
            </h1>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Expanded Introduction */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Why Centralized Logging is Your Homelab’s X-Ray Vision
            </h2>
            <p className="text-base sm:text-lg leading-relaxed">
              <strong>Centralized logging</strong> is the nerve center of your <strong>homelab</strong>, giving your <strong>logging homelab</strong> a clear lens into every gear and glitch. From a $35 Pi running Docker to a $200 NAS hosting 4TB, it pulls logs from your <strong>home lab</strong> into one spot—catching a rogue process or a sneaky breach before chaos hits. It’s not just records; it’s your troubleshooting superpower.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mt-4">
              Why centralize? Clarity and control. A $50 rig with Graylog spots a $35 Pi’s disk spike in 10 minutes—fix it before your Plex buffers. Skip it, and you’re blind when a $150 VM crashes; with it, you’ve got a dashboard glowing with answers. It’s the difference between fumbling in the dark and wielding a spotlight—your homelab’s secrets spill fast.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mt-4">
              Setting up logging is a homelab flex—part tech, part detective work. You’ll wrestle with parsers, chase log floods, and maybe curse a misconfigured alert (it’s a rite). The r/homelab crew swaps wins like ELK Stack nailing a NAS bottleneck or Splunk outing a rogue IoT. This guide unpacks the perks, tools, and tricks to make your <strong>homelab</strong> a logged-up powerhouse, sharp and steady.
            </p>
          </div>

          {/* Expanded Key Benefits */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Key Benefits of Centralized Logging in Your Homelab
            </h2>
            <p className="text-base sm:text-lg mb-4">
              Centralized logging levels up your homelab—here’s why it’s gold:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Enhanced Visibility:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  ELK Stack on a $100 rig—20 minutes maps a $200 NAS and 5 VMs. See a $35 Pi’s load live; your homelab’s health is crystal clear.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Efficient Debugging:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Graylog on a $50 SBC—15 minutes finds a $150 VM’s crash log. Pinpoint a $35 Pi’s bug; your homelab’s fixes are fast, not frantic.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Improved Security:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Splunk on a $200 lab—25 minutes flags a $50 router’s odd pings. Catch a $35 Pi’s SSH flood; your homelab’s guard is up.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Scalability:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Loki on a $100 PC—10 minutes scales a 10-device lab’s logs. Add a $50 NAS; your homelab’s logging grows without breaking.
                </p>
              </li>
            </ul>
          </div>

          {/* Expanded Implementation */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Implementing Centralized Logging in Your Homelab
            </h2>
            <p className="text-base sm:text-lg mb-4">
              Build a logging backbone with these steps—your homelab stays sharp:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Choose a Tool:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  ELK Stack on a $100 rig—30 minutes collects a $200 lab’s logs. Graylog on a $50 SBC works lean; your homelab’s hub is set.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Centralize Logs:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  rsyslog on a $35 Pi—15 minutes feeds a $150 NAS to a $100 logger. One spot, all data; your homelab’s chatter is corralled.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Filter Events:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Logstash on a $100 PC—20 minutes tags a $50 router’s errors. Prioritize a $35 Pi’s alerts; your homelab’s noise gets quiet.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Set Alerts:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Kibana on a $150 rig—10 minutes pings a $5 cron on a $200 lab’s spike. Catch a $35 Pi’s oddity; your homelab’s on watch.
                </p>
              </li>
            </ul>
            <p className="text-base sm:text-lg mt-4">
              Need monitoring tips? See our <Link to="/monitoring" className="text-indigo-600 dark:text-indigo-400 hover:underline">monitoring guide</Link>.
            </p>
          </div>

          {/* Expanded Logging Tools */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Top Logging Tools for Your Homelab
            </h2>
            <p className="text-base sm:text-lg mb-4">
              These tools power your logging homelab—here’s how they fit and flex:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">ELK Stack:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Free and full-featured, ELK on a $150 rig—30 minutes logs a $200 lab’s 10 devices. Kibana shines; your homelab’s data is deep and dazzling.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Graylog:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Free tier, Graylog on a $100 PC—20 minutes tracks a $35 Pi and NAS. Lean and mean; your homelab’s logs are tidy and tough.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Loki:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Free and lightweight, Loki on a $50 SBC—15 minutes pairs a $150 lab with Grafana. Simple scaling; your homelab’s logs stay nimble.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Splunk:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Free tier (500MB/day), Splunk on a $200 rig—25 minutes digs a $50 router’s dirt. Pro-grade; your homelab’s logging flexes muscle.
                </p>
              </li>
            </ul>
            <p className="text-base sm:text-lg mt-4">
              Want security basics? See our <Link to="/security" className="text-indigo-600 dark:text-indigo-400 hover:underline">security guide</Link>.
            </p>
          </div>

          {/* Expanded Setup Tips */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Setup Tips for Homelab Logging
            </h2>
            <p className="text-base sm:text-lg mb-4">
              Get logging dialed in with these practical steps—your homelab stays on point:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Start Small:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Loki on a $35 Pi—10 minutes logs a $50 lab’s basics. Scale to ELK later; your homelab’s logging grows with you.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Tune Filters:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Graylog on a $100 rig—15 minutes cuts a $35 Pi’s noise. Focus on a $150 NAS’s errors; your homelab’s logs stay lean.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Test Alerts:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Splunk on a $200 lab—20 minutes pings a $5 cron on a $50 SBC’s fake spike. Nail thresholds; your homelab’s alarms hit right.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Backup Logs:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  ELK on a $150 rig—10 minutes dumps a $30 USB with a month’s logs. Crash-proof; your homelab’s history holds strong.
                </p>
              </li>
            </ul>
          </div>

          {/* Expanded Video Tutorial & CTA */}
          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-xl shadow-md text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-indigo-800 dark:text-indigo-200">
              Log Your Homelab Like a Pro
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
              Ready to see inside your <strong>homelab</strong>? This tutorial dives into <strong>logging homelab</strong> setups—ELK Stack on a $150 rig, Graylog on a $100 PC, and more. It’s a hands-on guide to centralizing your <strong>home lab</strong> logs, catching issues fast, and optimizing like a ninja. Watch it, grab your gear, and turn your lab into a debugged dream.
            </p>
            <a
              href="https://www.youtube.com/watch?v=your-video-link" // Replace with an actual link if available
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-indigo-600 dark:bg-indigo-700 text-white rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-800 transition-colors duration-200 mb-4"
            >
              Watch Tutorial
            </a>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              Want more? Check our <Link to="/monitoring" className="text-indigo-600 dark:text-indigo-400 hover:underline">monitoring guide</Link> or projects in our <Link to="/homelab-projects" className="text-indigo-600 dark:text-indigo-400 hover:underline">projects guide</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Logging;