"use client";

import GetStartedButton from "@/components/animata/button/get-started-button";

const Sidebar = ({
  backgroundColor = "bg-gray-100",
  title,
}: {
  backgroundColor?: string;
  title: string;
}) => {
  return (
    <div
      className={`${backgroundColor} 
      md:w-1/3 
      md:h-screen
      md:p-6
      md:justify-center
      md:fixed   
      w-screen
      h-52
      relative 
      left-0
      top-0 
      p-6 
      shadow-lg
      flex 
      items-center
      justify-start`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="md:text-center text-left">
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
      <h2 className="text-xl md:text-3xl font-semibold text-black mb-4">
        Project overview
      </h2>
      <p
        className="text-black-100 text-lg leading-relaxed"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

const SkillsSection = ({ skills }: { skills: string[] }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl md:text-3xl font-semibold text-black mb-4">
        Tech stack used for this project
      </h2>
      <ul className="text-lg list-disc list-inside text-black-100 space-y-2 pl-10 font-bold">
        {skills.map((skill, index) => (
          <li key={index}>
            <span className="font-bold">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Homepage() {
  return (
    <div className="bg-white">
      <div className="w-full pt-14 md:p-0">
        <Sidebar backgroundColor="bg-[#9d1132]" title="Portfolio" />
        <div className="md:mt-16 px-4 md:px-10 md:ml-[33.333333%] p-6">
          <AboutSection
            description={`Welcome to my portfolio! Here, you'll find a showcase of projects that demonstrate my passion for crafting 
            innovative solutions and creating impactful experiences. 
            From dynamic web applications to seamless user interfaces, each project reflects my dedication to delivering excellence.
            <span class="md:hidden"><br/><br/></span>Using modern tools and frameworks like <strong>Next.js</strong>, <strong>React</strong>, and more, 
            I focus on building performant, scalable, and intuitive applications tailored to user needs.`}
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
          <div className="md:absolute md:right-10 md:bottom-8 bottom-8 right-0 flex justify-end">
            <GetStartedButton
              text="source code"
              link="https://github.com/idahagerth/My-Website"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
