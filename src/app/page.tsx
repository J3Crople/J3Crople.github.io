"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import ProgramsSection from "@/components/ProgramsSection";
import SkillsSection from "@/components/SkillsSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText("jordan_cropley@hotmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-animated text-white font-montreal min-h-screen">
      {/* ================= TOP NAVIGATION BAR ================= */}
      <div className="bg-[rgba(42,45,52,0.8)] backdrop-blur-md fixed top-0 left-0 w-full h-12 z-50 flex justify-between items-center px-4 shadow-md">
        {/* Name */}
        <div className="text-2xl font-bold">Jordan Cropley</div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          {[
            { href: "https://github.com/J3Crople", img: "/github2.png", alt: "GitHub" },
            { href: "https://www.linkedin.com/in/jordan-cropley-20b532270/", img: "/linkedin2.png", alt: "LinkedIn" },
            { href: "email", img: "/email2.png", alt: "Email" },
            { href: "https://www.instagram.com/jordan.cropley/", img: "/instagram2.png", alt: "Instagram" },
          ].map((icon, idx) =>
            icon.href === "email" ? (
              <button
                key={idx}
                onClick={handleEmailClick}
                className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:scale-110 transition-transform relative cursor-pointer"
              >
                <Image src={icon.img} alt={icon.alt} width={20} height={20} draggable={false}/>
                {copied && (
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs">
                    Email copied!
                  </span>
                )}
              </button>
            ) : (
              <a
                key={idx}
                href={icon.href}
                target="_blank"
                className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
              >
                <Image src={icon.img} alt={icon.alt} width={20} height={20} draggable={false}/>
              </a>
            )
          )}
        </div>
      </div>

      {/* ================= MAIN CONTENT WITH FADE + SLIDE ================= */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-6xl mx-auto p-6 pt-24 space-y-24"
      >
        {/* ---------- Who Am I Section ---------- */}
        <section className="text-center space-y-6 pt-24">
          <h2 className="text-4xl md:text-5xl font-bold border-b border-gray-700 pb-2 inline-block">
            Who Am I
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hi, I’m <span className="font-semibold">Jordan Cropley</span> — a
            Management Engineering student at the University of Waterloo with a
            strong interest in <span className="text-blue-400">AI</span>,
            <span className="text-green-400"> software development</span>, and
            <span className="text-purple-400"> web development</span>.
            I enjoy creating tools and websites that merge engineering problem-solving
            with modern web development practices, and I’m always looking for
            opportunities to learn and grow through hands-on projects.
          </p>

        </section>

        {/* ---------- Work Experience Section ---------- */}
        <WorkExperienceSection />

        {/* ---------- Programs Section ---------- */}
        <ProgramsSection />

        {/* ---------- Skills Section ---------- */}
        <SkillsSection />

        {/* ---------- Resume Button ---------- */}
        <div className="text-center mt-12">
          <a
            href="/Jordan Cropley.pdf"
            target="_blank"
            className="inline-block bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 text-white px-8 py-4 rounded-lg text-lg font-semibold bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700 ease-in-out cursor-pointer"
          >
            View Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
}
