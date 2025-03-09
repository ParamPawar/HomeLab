import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'; // For internal linking

const Networking = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Networking in Your Homelab: Build a Robust Home Lab Network",
    "description": "Master networking in your homelab with essential components, configurations, and tools like pfSense. Learn best practices for a secure, scalable home lab network.",
    "keywords": "networking homelab, homelab, home lab networking, pfsense homelab, openwrt homelab, vlan homelab",
    "author": { "@type": "Person", "name": "Your Name" },
    "datePublished": "2025-03-08"
  };

  return (
    <>
      {/* SEO Optimization */}
      <Helmet>
        <title>Networking in Homelabs: Optimize Your Home Lab Network</title>
        <meta 
          name="description" 
          content="Enhance your homelab with robust networking using routers, VLANs, and tools like pfSense. Explore components, configurations, and tips for a secure home lab."
        />
        <meta 
          name="keywords" 
          content="networking homelab, homelab, home lab networking, pfsense homelab, openwrt homelab, vlan homelab, network security homelab"
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Main Content */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 transition-all duration-300">
        {/* Hero Section */}
        <div className="relative mb-8 md:mb-12">
          <img
            src="https://images.unsplash.com/photo-1504707748692-419802cf939d?auto=format&fit=crop&q=80"
            alt="Networking homelab setup with routers and switches"
            className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-2xl shadow-xl"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end p-4 sm:p-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
              Networking in Homelabs
            </h1>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Expanded Introduction */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Why Networking is Your Homelab’s Backbone
            </h2>
            <p className="text-base sm:text-lg leading-relaxed">
              <strong>Networking</strong> is the heartbeat of your <strong>homelab</strong>, tying every device together into a seamless, humming <strong>networking homelab</strong>. Whether it’s a $35 Raspberry Pi hosting Pi-hole or a $200 rig running a NAS, a solid network keeps your <strong>home lab</strong> talking—fast, secure, and ready to grow. Without it, your VMs, containers, and servers are just isolated islands; with it, they’re a connected empire.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mt-4">
              Why obsess over cables and configs? Performance and control. A $50 switch with Gigabit Ethernet cuts file transfers from 10 minutes to 1 on a 1TB drive, while a $100 pfSense box locks down your 10-device lab with VLANs and a VPN. It’s not just about speed—proper networking means your Plex streams don’t stutter, your IoT toys don’t snoop, and your homelab scales from one Pi to a rack without breaking a sweat. It’s the glue that makes your DIY tech work like a pro setup.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mt-4">
              Setting up a network is a homelab rite—part puzzle, part power-up. You’ll wrestle with subnet masks, flash router firmware, and maybe curse a flaky NIC or two, all while building a system that’s yours to command. The community on X and r/homelab swaps tales of $20 routers turned firewalls or VLANs saving a hacked Pi. This guide dives into the must-haves, configs, and tricks to make your <strong>homelab</strong> a networking ninja, no matter your budget or gear.
            </p>
          </div>

          {/* Expanded Essential Components */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Essential Networking Components for Your Homelab
            </h2>
            <p className="text-base sm:text-lg mb-4">
              These pieces build your homelab’s network—here’s what they do and why they matter:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Router:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  A $50 TP-Link router handles 10 devices, routing internet and LAN traffic—sets up in 20 minutes. Flash it with OpenWrt (free) for VLANs or QoS; it’s your homelab’s traffic cop. Without it, your lab’s cut off or chaotic.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Switch:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  A $30 Gigabit switch connects 8 devices—links a $35 Pi and $150 NAS at 1000Mbps, no lag. Managed versions ($50) add VLANs for a 5-VM lab. It’s your homelab’s wiring hub, keeping data flowing fast.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Network Interface Cards (NICs):</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  A $15 1Gbps NIC in a $100 rig doubles bandwidth for a NAS—installs in 10 minutes. Dual-NIC setups ($30) split VM and host traffic. Your homelab’s devices need these to talk, or they’re mute.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Ethernet Cables:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  $10 for 5 Cat6 cables wires a $200 lab—delivers 1Gbps to a Pi, NAS, and switch, no Wi-Fi drops. DIY crimping ($5 tool) cuts costs for custom runs. Your homelab’s backbone stays rock-solid, not wobbly.
                </p>
              </li>
            </ul>
          </div>

          {/* Expanded Network Configuration */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Network Configuration Basics for Your Homelab
            </h2>
            <p className="text-base sm:text-lg mb-4">
              These configs shape your homelab’s network—here’s how to set them up right:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">IP Addressing:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Set static IPs (e.g., 192.168.1.10) on a $35 Pi for Pi-hole—takes 5 minutes in `/etc/dhcpcd.conf`. DHCP on a $50 router auto-assigns 20 devices. Your homelab stays organized, not a guessing game.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Subnetting:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Split a 192.168.1.0/24 into /26 subnets on a $100 pfSense box—10 minutes for 4 zones (64 IPs each). Limits a hacked Pi’s reach; your homelab’s tighter and tougher. Efficiency meets security here.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">VLAN Setup:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Tag VLAN 10 for VMs on a $50 managed switch—20 minutes setup isolates a $150 rig’s traffic. A $35 Pi on VLAN 20 stays separate. Your homelab’s segmented, not a free-for-all.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">DNS Configuration:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Run Pi-hole on a $35 Pi as DNS—15 minutes to block ads for 10 devices. Point a $50 router to 1.1.1.1 as backup; your homelab resolves fast and clean. No DNS, no internet—simple as that.
                </p>
              </li>
            </ul>
            <p className="text-base sm:text-lg mt-4">
              Need OS tips? See our <Link to="/operating-systems" className="text-indigo-600 dark:text-indigo-400 hover:underline">OS guide</Link>.
            </p>
          </div>

          {/* Expanded Best Practices */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Best Practices for Homelab Networking
            </h2>
            <p className="text-base sm:text-lg mb-4">
              Keep your homelab network top-notch with these pro moves—practical and proven:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Plan for Scalability:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Buy a $50 switch with 16 ports—grows a 5-device lab to 15 without swaps. Use a /23 subnet (510 IPs) on a $100 router for future VMs. Your homelab’s ready for more, not maxed out.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Use VLANs:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Split a $150 rig’s 10 VMs into VLANs 10-20 on a $50 switch—30 minutes setup locks IoT off your NAS. A $35 Pi on VLAN 30 stays sandboxed. Your homelab’s secure, not a mess.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Add Firewalls & VPNs:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Run pfSense on a $100 PC—20 minutes for a firewall and OpenVPN, shielding a 4TB NAS. A $50 router with WireGuard ($5 tweak) secures remote access. Your homelab’s a fortress, not a target.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Update Firmware:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Flash a $50 router with OpenWrt monthly—10 minutes patches holes for 10 devices. A $30 switch firmware update fixes VLAN bugs. Your homelab stays stable, not stale.
                </p>
              </li>
            </ul>
            <p className="text-base sm:text-lg mt-4">
              Need setup help? See our <Link to="/homelab-setup" className="text-indigo-600 dark:text-indigo-400 hover:underline">setup guide</Link>.
            </p>
          </div>

          {/* Expanded Networking Tools */}
          <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Recommended Networking Tools for Your Homelab
            </h2>
            <p className="text-base sm:text-lg mb-4">
              These tools supercharge your homelab network—here’s how they fit and why they rock:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">pfSense:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Free and open-source, pfSense runs on a $100 PC with 4GB RAM—sets up in 30 minutes as a firewall for 20 devices. Its VPN and traffic shaping lock down a $150 NAS. Your homelab’s gatekeeper, pro-style.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">OpenWrt:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Free and Linux-based, OpenWrt flashes a $50 router in 20 minutes—adds VLANs and QoS for a 10-device lab. A $35 Pi can host it too; lightweight power. Your homelab router becomes a custom beast.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Mesh Networking:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  A $100 mesh kit (e.g., TP-Link Deco) covers 3 rooms—30 minutes setup boosts Wi-Fi for a $50 Pi and IoT. Adds redundancy; no dead zones. Your homelab’s wireless stays strong, not spotty.
                </p>
              </li>
              <li className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                <strong className="text-gray-900 dark:text-gray-100">Wireshark:</strong>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  Free and powerful, Wireshark runs on a $100 rig—10 minutes to sniff a 5-VM lab’s packets. Spots a laggy $35 Pi or rogue traffic. Your homelab’s troubleshooter, keeping networks honest.
                </p>
              </li>
            </ul>
          </div>

          {/* Expanded Video Tutorial & CTA */}
          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-xl shadow-md text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-indigo-800 dark:text-indigo-200">
              Build Your Homelab Network Now
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
              Ready to wire up your <strong>homelab</strong> like a pro? This tutorial by Jimmy Tries World breaks down <strong>networking homelab</strong> basics—from hooking up a $50 switch to configuring pfSense on a $100 rig. It’s a step-by-step guide to making your <strong>home lab</strong> fast, secure, and future-proof, whether you’re running a Pi or a full rack. Watch it, grab your cables, and connect your lab with confidence.
            </p>
            <a
              href="https://www.youtube.com/watch?v=DT2ARc1NOpM&ab_channel=JimmyTriesWorld"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-indigo-600 dark:bg-indigo-700 text-white rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-800 transition-colors duration-200 mb-4"
            >
              Watch Tutorial
            </a>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              Want more ideas? Check our <Link to="/homelab-projects" className="text-indigo-600 dark:text-indigo-400 hover:underline">projects guide</Link> or hardware tips in our <Link to="/homelab-requirements" className="text-indigo-600 dark:text-indigo-400 hover:underline">requirements guide</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Networking;