"use client";

import Image from "next/image";
import { useState } from "react";

const programs = [
  {
    title: "SHAD Fellow - Shad Canada (2024)",
    description: `I participated in the SHAD program, a highly selective summer initiative for Canadian high school students focused on innovation, entrepreneurship, and STEAM problem-solving. I collaborated on challenging projects with other talented peers, attended workshops led by industry experts, and engaged in mentorship opportunities. Throughout the program, I honed my leadership, creative thinking, and teamwork skills while applying concepts in science, technology, engineering, and mathematics. By the end of the program, I developed a prototype for a sustainable solution to the electric vehicle charging infrastructure in rural Canada and presented our team's solution to a panel of mentors and industry professionals.`,
    img: "/shad.png",
  },
  {
    title: "Lloyd Auckland Mathematics Workshop - Waterloo (2024)",
    description: `I attended the Lloyd Auckland Mathematics Workshop, an advanced program bringing together top high school students from across North America. I tackled complex mathematical problems, explored topics beyond the standard curriculum, and collaborated with peers on challenging projects. The program allowed me to deepen my critical thinking and problem-solving skills while engaging in university-level concepts. During the workshop, I developed several proofs and solutions to non-trivial mathematical challenges and created a collaborative presentation of our findings.`,
    img: "/cemc2.png",
  },
  {
    title: "Catalyst Fellow - University of Waterloo (2023  )",
    description: 'I participated in the Catalyst Program, a hands-on program where students work in interdisciplinary teams to design, prototype, and implement engineering and innovation projects learning the basics of engineering. I focused on leadership, design thinking, and practical problem-solving while applying theoretical knowledge to real-world scenarios through engineering concepts. I collaborated with peers to develop innovative solutions and learned how to present our work effectively to mentors and professionals.',
    img: "/catalyst.avif",
  },
  {
    title: "COLS Ambassador - University of Guelph (2023)",
    description: 'I served as a COLS Ambassador, a leadership program emphasizing community engagement, teamwork, and personal growth. I participated in workshops, mentorship, and outreach initiatives to develop communication, event coordination, and leadership skills. The program challenged me to think critically about community impact and professional development. applied what I learned during the program by bringing it back to my high school, where I helped establish a system to support incoming students in adapting to school life.',
    img: "/COLS.jpg",
  },
];

const wrapIndex = (index: number, length: number) => ((index % length) + length) % length;

export default function ProgramsSection() {
  const [page, setPage] = useState(0);

  const programIndex = wrapIndex(page, programs.length);

  const nextProgram = () => setPage((prev) => prev + 1);
  const prevProgram = () => setPage((prev) => prev - 1);

  return (
    <section className="space-y-8">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 border-b border-gray-700 pb-2">
        Programs
      </h2>

      <div className="flex flex-col md:flex-row gap-8 items-start md:items-center w-full">
        {/* Left: Description */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-start items-start">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold">{programs[programIndex].title}</h3>
            <p className="text-gray-200 text-base md:text-lg break-words">
              {programs[programIndex].description}
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <div className="w-full max-w-md rounded-lg overflow-hidden">
            <Image
              src={programs[programIndex].img}
              alt={programs[programIndex].title}
              width={500}
              height={700}
              className="w-full h-auto object-cover"
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* Arrows below the container */}
      <div className="flex justify-center items-center gap-12 mt-4">
        <button
          onClick={prevProgram}
          className="p-2 hover:scale-110 transition-transform cursor-pointer"
        >
          <Image
            src="/warrow.png"
            alt="Left Arrow"
            width={40}
            height={40}
            className="rotate-180 hover:drop-shadow-[0_0_15px_rgba(255,255,255,1)]"
            draggable={false}
          />
        </button>

        <button
          onClick={nextProgram}
          className="p-2 hover:scale-110 transition-transform cursor-pointer"
        >
          <Image
            src="/warrow.png"
            alt="Right Arrow"
            width={40}
            height={40}
            className="hover:drop-shadow-[0_0_15px_rgba(255,255,255,1)]"
            draggable={false}
          />
        </button>
      </div>
    </section>
  );
}
