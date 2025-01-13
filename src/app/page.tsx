import CycleText from "@/components/animata/text/cycle-text";
import Skills from "@/components/Skills";
import Link from "next/link";
import About from "@/components/About";

export const runtime = "edge";

export default function Home() {
  return (
    <div className="bg-white min-h-screen p-8 mt-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="h-[600px] md:h-[550px] bg-[#fcfbf5] p-8 rounded-3xl shadow-lg justify-center md:col-span-8 transition-all hover:scale-[1.01]">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-stone-800">
            <CycleText /> I’m Ida, a frontend developer with a deep passion
            <br /> for colors and design.
          </h1>
          <p className="text-stone-800 text-lg mb-6 pt-1">
            I’m passionate about using design as a tool to inspire and create
            real connections. To me, great design isn’t just about
            functionality—it’s about creating experiences that are meaningful
            and visually exciting. <br /> I strive to code interfaces that are
            not only responsive and user-friendly but also crafted with
            attention to detail, ensuring seamless and enjoyable interactions
            for everyone.
          </p>
        </div>
        <About />
      </div>

      <div className="max-w-7xl mx-auto min-h-[400px] grid grid-cols-1 md:grid-cols-2 gap-7 mt-5">
        <div className="bg-[#f23f39] text-white p-6 rounded-3xl shadow-lg flex flex-col h-full hover:scale-[1.01]">
          <div className="flex-grow">
            <h2 className="text-3xl font-bold mb-2">Apps</h2>
          </div>
          <div className=" text-lg flex justify-end items-center gap-4">
            <p>Check out what I&apos;ve been working on!</p>
            <a
              href="#"
              className="bg-white text-[#f23f39] px-5 py-2 rounded-full transition-all hover:scale-110 active:scale-95"
            >
              →
            </a>
          </div>
        </div>

        <Skills />

        <div className="flex justify-end"></div>
      </div>
      <div className="max-w-7xl mx-auto min-h-[200px] mb-8">
        <div
          className="flex flex-row justify-center items-center w-full h-full text-stone-800 gap-8 sm:gap-12 text-lg py-12 mt-8 sm:mt-0"
          id="contact"
        >
          <Link
            href="mailto:idiis@live.com?subject=Hello!"
            className="transition-all hover:scale-110 active:scale-95"
          >
            Mail
          </Link>
          <Link
            href="https://linkedin.com/in/ida-hägerth"
            target="_blank"
            className="transition-all hover:scale-110 active:scale-95"
          >
            Linkedin
          </Link>
          <Link
            href="https://github.com/idahagerth"
            target="_blank"
            className="transition-all hover:scale-110 active:scale-95"
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
