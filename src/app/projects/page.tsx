"use client";

import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects: {
    id: number;
    title: string;
    image: string;
    bgColor: string;
    link: string;
  }[] = [
    {
      id: 1,
      title: "Portfolio",
      image: "/portfolio.png",
      bgColor: "bg-[#9d1132]",
      link: "/projects/homepage",
    },
    {
      id: 2,
      title: "Under development",
      image: "/empty.png",
      bgColor: "bg-[#f23f39]",
      link: "/",
    },
    {
      id: 3,
      title: "Under development",
      image: "/empty.png",
      bgColor: "bg-[#d9d0ee]",
      link: "/",
    },
    {
      id: 4,
      title: "Under development",
      image: "/empty.png",
      bgColor: "bg-[#bfd1e8]",
      link: "/",
    },
    {
      id: 5,
      title: "Under development",
      image: "/empty.png",
      bgColor: "bg-[#fceba3]",
      link: "/",
    },
    {
      id: 6,
      title: "Under development",
      image: "/empty.png",
      bgColor: "bg-[#4b6746]",
      link: "/",
    },
  ];

  return (
    <div className="container mx-auto p-4 mt-14">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        key={1}
      >
        {projects.map((project) => (
          <Link href={project.link} key={project.id}>
            <div
              className={`group relative aspect-[3/4] 
              rounded-2xl overflow-hidden ${project.bgColor} p-4 
              transition-all duration-300 opacity-100 hover:opacity-50 hover:scale-[1.03]`}
            >
              <div className="relative h-full w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative rounded-[2.5rem] overflow-hidden w-[71%] sm:w-[71%] md:w-[71%] mb-8 sm:mb-0">
                    {project.title === "Under development" ? (
                      <p className="text-white text-center font-bold ">
                        under development
                      </p>
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={270}
                        height={270}
                        className="w-full h-auto"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p
                  className={`text-white text-4xl px-5 py-2 rounded-full transition-all hover:scale-110 active:scale-95`}
                >
                  →
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
