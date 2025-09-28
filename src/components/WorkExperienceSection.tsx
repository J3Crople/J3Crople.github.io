"use client";

import Image from "next/image";

export default function WorkExperienceSection() {
  return (
    <section>
      <h2 className="text-4xl md:text-5xl font-bold mb-8 border-b border-gray-700 pb-2">
        Work Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Interware */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]">
          <Image
            src="/interware.png"
            alt="Interware Internship"
            width={500}
            height={192}
            className="w-full h-48 object-cover"
            draggable={false}
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">
              Business Process Automation Intern - Interware
            </h3>
            <p className="italic text-gray-400 mb-2">
              Jul 2025 - Aug 2025 | Hybrid
            </p>
            <ul className="list-disc list-inside text-gray-200 space-y-1">
              <li>
                Implemented Power Automate workflows to automate invoice
                management, reducing errors and processing time.
              </li>
              <li>
                Developed flows to parse, validate, and standardize invoice
                data, integrating with ConnectWise.
              </li>
              <li>
                Collaborated with finance and operations teams to improve
                efficiency.
              </li>
              <li>
                Created documentation and training materials for independent
                workflow maintenance.
              </li>
              <li>
                Gained hands-on experience in workflow automation, data
                validation, and system integration.
              </li>
            </ul>
          </div>
        </div>

        {/* Umpire */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]">
          <Image
            src="/umpire.jpg"
            alt="Markham Baseball Umpire"
            width={500}
            height={192}
            className="w-full h-48 object-cover"
            draggable={false}
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">
              Markham Baseball Umpire - Markham District Baseball Association
            </h3>
            <p className="italic text-gray-400 mb-2">
              May 2019 - Oct 2024 | Markham, ON | Level 2.3
            </p>
            <ul className="list-disc list-inside text-gray-200 space-y-1">
              <li>
                Officiated competitive games by enforcing rules and ensuring
                safety.
              </li>
              <li>
                Managed player, coach, and spectator interactions professionally.
              </li>
              <li>
                Made quick, accurate decisions under pressure while maintaining
                control.
              </li>
              <li>
                Coordinated with other umpires to ensure consistent rule
                application.
              </li>
              <li>
                Developed leadership, communication, and conflict-resolution
                skills.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
