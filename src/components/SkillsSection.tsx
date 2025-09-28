"use client";

import Image from "next/image";

const icons = [
  { src: "/html.png", alt: "HTML" },
  { src: "/css.png", alt: "CSS" },
  { src: "/js.png", alt: "JavaScript" },
  { src: "/react.png", alt: "React" },
  { src: "/tailwind.png", alt: "TailwindCSS" },
  { src: "/python.png", alt: "Python" },
  { src: "/java.png", alt: "Java" },
  { src: "/ts.png", alt: "TypeScript" },
  { src: "/node.png", alt: "Node.js" },
  { src: "/powerautomate.png", alt: "Power Automate" },
];

export default function SkillsSection() {
  return (
    <section className="w-full py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 border-b border-gray-700 pb-2 text-center">
        Technical Skills
      </h2>

      {/* Marquee container */}
      <div className="overflow-hidden relative w-full">
        <div className="flex gap-12 animate-marquee">
          {icons.concat(icons).map((icon, i) => (
            <Image
              key={i}
              src={icon.src}
              alt={icon.alt}
              width={64}
              height={64}
              draggable={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
