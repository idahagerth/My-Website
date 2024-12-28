"use client";

import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "",
      image: "",
      bgColor: "bg-[#fe76b4]",
    },
    {
      id: 2,
      title: "",
      image: "",
      bgColor: "bg-[#f23f39]",
    },
    {
      id: 3,
      title: "",
      image: "",
      bgColor: "bg-[#9d1132]",
    },
    {
      id: 4,
      title: "",
      image: "",
      bgColor: "bg-[#6ecff1]",
    },
    {
      id: 5,
      title: "",
      image: "",
      bgColor: "bg-[#ffc548]",
    },
    {
      id: 6,
      title: "",
      image: "",
      bgColor: "bg-[#00b487]",
    },
  ];

  return (
    <div className="container mx-auto p-4 mt-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`relative aspect-[3/4] rounded-2xl overflow-hidden ${project.bgColor} p-4`}
          >
            <div className="relative h-full w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[80%] aspect-[9/19] rounded-[2.5rem] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
