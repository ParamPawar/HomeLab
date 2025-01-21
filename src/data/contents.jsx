import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export const contents = {
  introduction: {
    title: 'Introduction to Home Labs',
    content: (
      <div className="space-y-6">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80"
          alt="Modern home lab setup"
          className="w-full h-64 object-cover rounded-lg"
        />
        <p className="text-lg">
          Home labs are unique to each creator and serve different purposes. Here's a collection of perspectives from various creators about what a home lab means to them:
        </p>
        <h2 className="text-xl font-semibold mt-6">Perspectives on Home Labs:</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <div className="font-bold text-black hover:text-gray-800">
              <strong>
                <HoverCard>
                  <HoverCardTrigger className="font-bold text-black hover:text-gray-800">
                    <span style={{ color: '#121826' }}>Hardware Haven: </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
                    <p>YouTube: 
                      <a
                        href="https://www.youtube.com/@HardwareHaven"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-800"
                      >
                        @HardwareHaven
                      </a>
                    </p>
                    <p>X: 
                      <a
                        href="https://www.youtube.com/@HardwareHaven"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-800"
                      >
                        @HardwareHaven
                      </a>
                    </p>
                  </HoverCardContent>
                </HoverCard>
              </strong>
            </div>
            Hosting things wherever, on whatever, and however you want.
          </li>
          <li>
            <div className="font-bold text-black hover:text-gray-800">
              <strong>
              <HoverCard>
                  <HoverCardTrigger className="font-bold text-black  hover:text-gray-800">
                    <span style={{ color: '#121826' }}>Techno Tim: </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
                    <p>YouTube: 
                      <a
                        href="https://www.youtube.com/@TechnoTim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-800"
                      >
                        @Techno Tim
                      </a>
                    </p>
                    <p>Blog Post: 
                      <a
                        href="https://technotim.live/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-800"
                      >
                        technotim.live
                      </a>
                    </p>
                  </HoverCardContent>
                </HoverCard>
              </strong>
            </div>
            A safe environment for testing, learning, and experimenting without breaking production systems.
          </li>
          <li>
            <strong>
            <HoverCard>
                  <HoverCardTrigger className="font-bold text-black hover:text-gray-800">
                    <span style={{ color: '#121826' }}>2GuysTek: </span>
                  </HoverCardTrigger>
                  <HoverCardContent className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
                    <p>YouTube: 
                      <a
                        href="https://www.youtube.com/@2GuysTek"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-800"
                      >
                        @2GuysTek
                      </a>
                    </p>
                    <p> X : 
                      <a
                        href="https://x.com/2GuysTek"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-800"
                      >
                        @2GuysTek
                      </a>
                    </p>
                  </HoverCardContent>
                </HoverCard>
            </strong>
            <ul className="list-disc pl-6">
              <li>A playground to build IT-related skills, such as system or network administration.</li>
              <li>A practical space to host useful applications and services.</li>
            </ul>
          </li>
          <li>
            <strong>
            <HoverCard>
                  <HoverCardTrigger className="font-bold text-black hover:text-gray-800">
                    <span style={{ color: '#121826' }}>Jim’s Garage:</span>
                  </HoverCardTrigger>
                  <HoverCardContent className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
                    <p>YouTube: 
                      <a
                        href="https://www.youtube.com/@Jims-Garage "
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-800"
                      >
                        @Jims-Garage
                      </a>
                    </p>
                    <p> X : 
                      <a
                        href="https://x.com/jimsgarage_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-800"
                      >
                        @jimsgarage_
                      </a>
                    </p>
                  </HoverCardContent>
                </HoverCard>
            </strong> A way to tackle challenging technical work from home, enhancing job prospects, security, and privacy.
          </li>
          <li>
            <strong>
            <HoverCard>
                  <HoverCardTrigger className="font-bold text-black hover:text-gray-800">
                    <span style={{ color: '#121826' }}>Lawrence Systems:</span>
                  </HoverCardTrigger>
                  <HoverCardContent className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
                    <p>YT 
                      <a
                        href="https://www.youtube.com/@LAWRENCESYSTEMS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-800"
                      >
                        @LAWRENCESYSTEMS
                      </a>
                    </p>
                    <p>site: 
                      <a
                        href="https://lawrencesystems.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-800"
                      >
                        lawrencesystems.com
                      </a>
                    </p>
                  </HoverCardContent>
                </HoverCard>
            </strong> Hands-on experimentation with technology, learning from mistakes without risking large-scale outages. (And yes, considering power-efficient devices is important!)
          </li>
        </ul>
        <p className="text-lg mt-4">
          For me, it’s more than just a hobby; it’s a deeply satisfying way to explore and master technology, seeing systems work together from a developer's perspective.
        </p>
      </div>
    ),
  },

  requirements: {
    title: 'Requirements',
    content: (
      <div className="space-y-6">
        <p className="text-lg">
          A home lab is a personal testing environment that allows tech enthusiasts,
          IT professionals, and hobbyists to experiment with various technologies,
          learn new skills, and test configurations in a safe environment.
        </p>
        <h2 className="text-xl font-semibold mt-6">Why Build a Home Lab?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Hands-on learning experience</li>
          <li>Safe environment for testing</li>
          <li>Skill development</li>
          <li>Career advancement</li>
          <li>Personal projects hosting</li>
        </ul>
      </div>
    ),
  },
};
