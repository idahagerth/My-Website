"use client";

const Sidebar = ({
  backgroundColor = "bg-gray-100",
  title,
}: {
  backgroundColor?: string;
  title: string;
}) => {
  return (
    <div
      className={`${backgroundColor} w-1/3 min-h-screen fixed left-0 top-0 p-6 shadow-lg flex items-center justify-center`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

const AboutSection = ({
  description = "This is a portfolio project showcasing my work and skills.",
}: {
  description: string;
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold text-black mb-4">
        Project overview
      </h2>
      <p className="text-black-100  text-lg leading-relaxed">{description}</p>
    </div>
  );
};

const SkillsSection = ({ skills }: { skills: string[] }) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold text-black mb-4">
        Tech stack used for this project
      </h2>
      <ul className="text-lg list-disc list-inside text-black-100 space-y-2 pl-10 font-bold">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default function Homepage() {
  return (
    <div className="bg-white min-h-screen mt-14">
      <div className="ml-[33.333333%] p-6">
        <Sidebar backgroundColor="bg-[#9d1132]" title="Portfolio" />
        <div className="mt-20 pl-10">
          <AboutSection
            description="Welcome to my portfolio! Here, you'll find a showcase of projects that demonstrate my passion for crafting 
            innovative solutions and creating impactful experiences. 
            From dynamic web applications to seamless user interfaces, each project reflects my dedication to delivering excellence.
            Using modern tools and frameworks like Next.js, React, and more, 
            I focus on building performant, scalable, and intuitive applications tailored to user needs."
          />
          <SkillsSection
            skills={[
              "Next.js",
              "Tailwind CSS",
              "Animata component library",
              "TypeScript",
              "React-DOM",
              "React",
              "Simple-icons",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
