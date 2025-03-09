import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; // For internal linking

const Security = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Security in Your Homelab: Safeguard Your Home Lab",
    "description": "Secure your homelab with firewalls, VPNs, and best practices. Learn key measures and tools to protect your home lab from threats.",
    "keywords": "security homelab, homelab, home lab security, firewall homelab, vpn homelab, encryption homelab",
    "author": { "@type": "Person", "name": "Your Name" },
    "datePublished": "2025-03-08"
  };

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>Security in Homelabs: Protect Your Home Lab Environment</title>
        <meta 
          name="description" 
          content="Lock down your homelab with firewalls, VPNs, and encryption. Explore key security measures and best practices for a safe, resilient home lab."
        />
        <meta 
          name="keywords" 
          content="security homelab, homelab, home lab security, firewall homelab, vpn homelab, encryption homelab, secure homelab setup"
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Main Content */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-300">
        {/* Hero Section */}
        <div className="relative mb-8 md:mb-12">
          <img
            src="https://images.unsplash.com/photo-1555949963-aa79d0d24f9a?auto=format&fit=crop&q=80"
            alt="Security homelab setup with locked-down systems"
            className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-2xl shadow-xl"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
              Security in Homelabs
            </h1>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Expanded Introduction */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Why Security is Your Homelab’s Shield
            </h2>
            <p className="text-base sm:text-lg leading-relaxed">
              <strong>Security</strong> isn’t optional in your <strong>homelab</strong>—it’s the armor that keeps your <strong>security homelab</strong> safe from chaos. Whether you’re hosting a $35 Pi with Plex or a $200 NAS with 4TB of family photos, a breach turns your <strong>home lab</strong> from a tech haven into a liability. Lock it down, and you can tinker, test, and deploy with swagger, knowing your data’s untouchable.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mt-4">
              Why sweat the details? Threats don’t care about “just a homelab.” A $50 router running OpenWrt with a firewall blocks 100 sketchy pings a day, while a $5 WireGuard VPN keeps your remote access tighter than a vault. Skip updates on a $150 rig, and a patched flaw lets ransomware wipe your VMs—seen it on X too many times. Security isn’t just defense; it’s the freedom to push your homelab hard without risking it all.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mt-4">
              Securing your lab is a homelab rite—part grit, part geekery. You’ll wrestle with iptables, chase down log alerts, and maybe brick a Pi learning MFA (we’ve all been there). The r/homelab crowd swaps tales of pfSense saving a NAS or VLANs stopping a rogue IoT bot. This guide unpacks the must-dos, tools, and tricks to make your <strong>homelab</strong> a fortress, keeping your experiments bold and your data bulletproof.
            </p>
          </div>

          {/* Expanded Key Security Measures */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Key Security Measures for Your Homelab
            </h2>
            <p className="text-base sm:text-lg mb-4">
              These steps lock down your homelab—here’s how they work and why they’re clutch:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Firewall Configuration:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Set pfSense on a $100 PC—20 minutes blocks 500 daily probes on a 10-device lab. Drop a $35 Pi’s SSH port in iptables; only you get in. Your homelab’s front door stays shut to outsiders.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">VPN & Remote Access:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  WireGuard on a $50 router—15 minutes encrypts a $150 NAS’s remote link, 300Mbps strong. OpenVPN on a $35 Pi secures 5 devices; no coffee shop snoops. Your homelab’s safe, wherever you roam.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Regular Updates & Patches:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Run `apt update` monthly on a $35 Pi—5 minutes patches a Docker flaw. A $200 rig’s unpatched VM falls to a 2024 exploit in a week. Your homelab’s armor stays fresh, not rusty.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Access Controls:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Use a 20-char password on a $150 NAS—10 minutes with Bitwarden ($10/year) adds MFA. A $50 SBC with SSH keys blocks brute force in 5 minutes. Your homelab’s keys stay yours alone.
                </p>
              </li>
            </ul>
          </div>

          {/* Expanded Best Practices */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Best Practices for Homelab Security
            </h2>
            <p className="text-base sm:text-lg mb-4">
              Keep your homelab tight with these pro habits—battle-tested and practical:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Audit & Test:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Run Nmap (free) on a $100 rig—15 minutes finds open ports on 5 VMs. Try Kali ($35 Pi) for a pen test; spots a weak $50 router. Your homelab’s holes get plugged before they’re hit.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Segment with VLANs:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Set VLAN 10 for a $150 NAS on a $50 switch—20 minutes isolates it from a $35 Pi on VLAN 20. A hacked IoT can’t touch your data. Your homelab’s a maze, not a highway, for threats.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Encrypt Everything:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Use LUKS on a $200 rig’s 4TB drive—30 minutes locks data at rest. HTTPS with Let’s Encrypt (free) on a $50 SBC secures Nextcloud in 10 minutes. Your homelab’s secrets stay secret.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Monitor & Alert:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Set Zabbix (free) on a $35 Pi—20 minutes flags a $150 rig’s SSH spike. Email alerts ($5 cron) ping you on a 4TB NAS login. Your homelab’s eyes catch trouble fast.
                </p>
              </li>
            </ul>
            <p className="text-base sm:text-lg mt-4">
              Need networking tips? See our <Link to="/networking" className="text-indigo-600 dark:text-indigo-400 hover:underline">networking guide</Link>.
            </p>
          </div>

          {/* Expanded Tools Section */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Top Security Tools for Your Homelab
            </h2>
            <p className="text-base sm:text-lg mb-4">
              These tools fortify your homelab—here’s how they work and why they’re gold:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">pfSense:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Free and open-source, pfSense on a $100 PC—30 minutes setups a firewall for a 10-device lab. Blocks a $35 Pi’s rogue traffic; VPN included. Your homelab’s shield, pro-grade.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Fail2Ban:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Free and lightweight, Fail2Ban on a $50 SBC—15 minutes bans 100 SSH brute attempts on a NAS. Tweak it for Docker; your homelab’s bouncer. Simple, fierce protection.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">WireGuard:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Free and fast, WireGuard on a $35 Pi—10 minutes encrypts remote access to a $200 rig, 400Mbps. Leaner than OpenVPN; your homelab’s tunnel stays slick and secure.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">CrowdSec:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Free and crowd-sourced, CrowdSec on a $150 rig—20 minutes blocks a global IP hitlist on 5 VMs. Shares threat intel; your homelab’s part of a bigger fight.
                </p>
              </li>
            </ul>
          </div>

          {/* Expanded Video Tutorial & CTA */}
          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-xl shadow-md text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-indigo-800 dark:text-indigo-200">
              Secure Your Homelab Today
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
              Ready to armor up your <strong>homelab</strong>? This tutorial by Techno Tim dives into <strong>security homelab</strong> essentials—firewalls on a $100 PC, VPNs on a $35 Pi, and more. It’s a hands-on guide to locking down your <strong>home lab</strong>, keeping your data safe while you experiment like a boss. Watch it, grab your gear, and build a fortress that’s tough as nails.
            </p>
            <a
              href="https://www.youtube.com/watch?v=Cs8yOmTJNYQ&ab_channel=TechnoTim"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-indigo-600 dark:bg-indigo-700 text-white rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-800 transition-colors duration-200 mb-4"
            >
              Watch Tutorial
            </a>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              Want more? Check our <Link to="/networking" className="text-indigo-600 dark:text-indigo-400 hover:underline">networking guide</Link> or projects in our <Link to="/homelab-projects" className="text-indigo-600 dark:text-indigo-400 hover:underline">projects guide</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Security;