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
} from "simple-icons";

export default function Skills() {
  return (
    <div className="bg-[#3d1900] text-white p-6 rounded-3xl shadow-lg hover:scale-[1.01]">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <div className="flex flex-wrap gap-6 justify-center items-center">
        <div className="flex items-center space-x-2">
          <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d={siHtml5.path} />
          </svg>
          <span>HTML</span>
        </div>

        <div className="flex items-center space-x-2">
          <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d={siCss3.path} />
          </svg>
          <span>CSS</span>
        </div>

        <div className="flex items-center space-x-2">
          <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d={siJavascript.path} />
          </svg>
          <span>JavaScript</span>
        </div>

        <div className="flex items-center space-x-2">
          <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d={siTypescript.path} />
          </svg>
          <span>TypeScript</span>
        </div>

        <div className="flex items-center space-x-2">
          <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d={siReact.path} />
          </svg>
          <span>React</span>
        </div>

        <div className="flex items-center space-x-2">
          <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d={siNextdotjs.path} />
          </svg>
          <span>Next.js</span>
        </div>

        <div className="flex items-center space-x-2">
          <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d={siNodedotjs.path} />
          </svg>
          <span>Node.js</span>
        </div>

        <div className="flex items-center space-x-2">
          <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d={siVite.path} />
          </svg>
          <span>Vite</span>
        </div>

        <div className="flex items-center space-x-2">
          <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d={siVuedotjs.path} />
          </svg>
          <span>Vue.js</span>
        </div>

        <div className="flex items-center space-x-2">
          <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d={siTailwindcss.path} />
          </svg>
          <span>Tailwind CSS</span>
        </div>

        <div className="flex items-center space-x-2">
          <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d={siGit.path} />
          </svg>
          <span>Git</span>
        </div>

        <div className="flex items-center space-x-2">
          <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d={siGithub.path} />
          </svg>
          <span>GitHub</span>
        </div>

        <div className="flex items-center space-x-2">
          <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d={siFigma.path} />
          </svg>
          <span>Figma</span>
        </div>

        <div className="flex items-center space-x-2">
          <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d={siPhp.path} />
          </svg>
          <span>PHP</span>
        </div>

        <div className="flex items-center space-x-2">
          <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d={siMysql.path} />
          </svg>
          <span>SQL</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d={siWordpress.path} />
          </svg>
          <span>Wordpress</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg role="img" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
            <path d={siHtmx.path} />
          </svg>
          <span>Visual Studio Code</span>
        </div>
      </div>
    </div>
  );
}
