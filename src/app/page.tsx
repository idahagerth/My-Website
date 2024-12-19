import CycleText from "@/components/animata/text/cycle-text";
import TextBorderAnimation from "@/components/animata/text/text-border-animation";

export default function Home() {
  return (
    <div className="bg-white min-h-screen p-8 mt-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-5">
        <div className="h-[500px] bg-gradient-to-r from-[#fafafa] to-[#fbf9e0] p-8 rounded-3xl shadow-lg justify-center md:col-span-8">
          <h1 className="text-4xl font-bold mb-4 text-stone-800">
            <CycleText /> I’m Ida, a frontend developer with a deep passion<br/> for colors
            and design.
          </h1>
          <p className="text-stone-800 text-lg mb-6 pt-1">
            I am dedicated to leveraging design to inspire connections,I believe
            in the power of design to inspire and connect, and I strive to code
            interfaces that are not only functional but also meaningful and
            visually engaging.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/ida-hägerth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 hover:text-sky-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.5 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.783-1.75-1.75 0-.966.784-1.75 1.75-1.75s1.75.784 1.75 1.75c0 .967-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.396c0-1.286-.026-2.943-1.794-2.943-1.795 0-2.071 1.402-2.071 2.851v5.488h-3v-10h2.879v1.367h.041c.401-.761 1.378-1.561 2.837-1.561 3.031 0 3.608 1.994 3.608 4.586v5.608z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="bg-[#aac1e3] text-white p-6 rounded-3xl shadow-lg md:col-span-4">
          <h2 className="text-3xl font-bold mb-2">Stack</h2>
          <ul className="pl-4 space-y-6 text-white text-lg font-bold pt-4">
            <li><TextBorderAnimation text="Javascript" /></li>
            <li><TextBorderAnimation text="Web Design" /></li>
            <li><TextBorderAnimation text="React.js" /></li>
            <li><TextBorderAnimation text="Next.js" /></li>
            <li><TextBorderAnimation text="CSS & HTML5" /></li>
            <li><TextBorderAnimation text="Typescript" /></li>
            <li><TextBorderAnimation text="Tailwind CSS" /></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto h-[400px] grid grid-cols-2 md:grid-cols-2 gap-7 mt-5">
        <div className="bg-[#ff9cff] text-white p-6 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-2">Apps</h2>
          <p className="mb-14">Check out what I&apos;ve been working on!</p>
          <div className="flex justify-end">
            <a
              href="#"
              className="bg-white text-purple-500 px-4 py-2 rounded-full"
            >
              →
            </a>
          </div>
        </div>

        <div className="bg-stone-800 text-white p-6 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <p className="mb-14">utfyllnad</p>
          <div className="flex justify-end">
          </div>
        </div>
      </div>
    </div>
  );
}
