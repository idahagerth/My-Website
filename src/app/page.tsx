import CycleText from "@/components/animata/text/cycle-text";
import Link from "next/link";
import {
  siHtml5,
  siCss3,
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siNodedotjs,
  siVite,
  siVuedotjs,
  siTailwindcss,
  siGit,
  siFigma,
  siPhp,
  siMysql,
  siWordpress,
  siHtmx,
  siGithub,
  siGooglemaps
} from "simple-icons";

export default function Home() {
  return (
    <div className="bg-white min-h-screen p-8 mt-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="h-[500px] bg-[#fffcf2] p-8 rounded-3xl shadow-lg justify-center md:col-span-8 transition-all hover:scale-[1.01]">
          <h1 className="text-4xl font-bold mb-4 text-stone-800">
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
        <div className="bg-[#feb1d7] text-white p-6 rounded-3xl shadow-lg md:col-span-4 hover:scale-[1.01]">
          <h2 className="text-3xl font-bold mb-2">About</h2>
          <ul className="space-y-4 text-lg pt-4">
          <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d={siGooglemaps.path} />
              </svg>
              <span>Stockholm</span>

          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto h-[400px] grid grid-cols-2 md:grid-cols-2 gap-7 mt-5">
        <div className="bg-[#fa5c44] text-white p-6 rounded-3xl shadow-lg flex flex-col h-full hover:scale-[1.01]">
          <div className="flex-grow">
            <h2 className="text-3xl font-bold mb-2">Apps</h2>
          </div>
          <div className=" text-lg flex justify-end items-center gap-4">
            <p>Check out what I&apos;ve been working on!</p>
            <a
              href="#"
              className="bg-white text-[#fa5c44] px-5 py-2 rounded-full transition-all hover:scale-110 active:scale-95"
            >
              →
            </a>
          </div>
        </div>

        <div className="bg-[#0e76ff] text-white p-6 rounded-3xl shadow-lg hover:scale-[1.01]">
          <h2 className="text-3xl font-bold mb-10">Skills</h2>
          <div className="flex flex-wrap gap-6 justify-center items-center">
            <div className="flex items-center space-x-2">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d={siHtml5.path} />
              </svg>
              <span>HTML</span>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d={siCss3.path} />
              </svg>
              <span>CSS</span>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d={siJavascript.path} />
              </svg>
              <span>JavaScript</span>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d={siTypescript.path} />
              </svg>
              <span>TypeScript</span>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d={siReact.path} />
              </svg>
              <span>React</span>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d={siNextdotjs.path} />
              </svg>
              <span>Next.js</span>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d={siNodedotjs.path} />
              </svg>
              <span>Node.js</span>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d={siVite.path} />
              </svg>
              <span>Vite</span>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d={siVuedotjs.path} />
              </svg>
              <span>Vue.js</span>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d={siTailwindcss.path} />
              </svg>
              <span>Tailwind CSS</span>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d={siGit.path} />
              </svg>
              <span>Git</span>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d={siGithub.path} />
              </svg>
              <span>GitHub</span>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d={siFigma.path} />
              </svg>
              <span>Figma</span>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d={siPhp.path} />
              </svg>
              <span>PHP</span>
            </div>

            <div className="flex items-center space-x-2">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d={siMysql.path} />
              </svg>
              <span>SQL</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d={siWordpress.path} />
              </svg>
              <span>Wordpress</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d={siHtmx.path} />
              </svg>
              <span>Visual Studio Code</span>
            </div>
          </div>
        </div>
        <div className="flex justify-end"></div>
      </div>
      <div className="max-w-7xl mx-auto h-[400px]">
        <div
          className="flex justify-center items-center w-full h-full text-stone-800 gap-12 text-lg"
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
