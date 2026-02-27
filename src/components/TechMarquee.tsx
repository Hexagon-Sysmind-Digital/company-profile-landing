"use client";

import Marquee from "react-fast-marquee";

const techs = [
  { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "Laravel", logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Tailwind", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/FFCA28" },
];

function TechItem({ tech }: any) {
  return (
    <div className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-200 rounded-xl shadow-sm mx-4">
      <img src={tech.logo} alt={tech.name} className="w-7 h-7" />
      <span className="text-black font-medium whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div className="w-full bg-white py-1">
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={true}
      >
        {techs.map((tech, i) => (
          <TechItem key={i} tech={tech} />
        ))}
      </Marquee>
    </div>
  );
}