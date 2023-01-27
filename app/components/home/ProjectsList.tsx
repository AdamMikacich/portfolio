import { IoLogoGithub, IoOpenOutline } from 'react-icons/io5';

export default function ProjectsList() {
  return (
    <main className="border-t border-slate-200 bg-white max-h-screen overflow-y-auto">
      <div className="relative">
        <div className="pt-16 pb-12 sm:pb-4 lg:pt-12">
          <div className="lg:px-8">
            <div className="lg:max-w-4xl">
              <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                <h1 className="text-2xl font-bold leading-7 text-slate-900">
                  Projects
                </h1>
              </div>
            </div>
          </div>
          <div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
            <article aria-labelledby="project-1" className="py-10 sm:py-12">
              <div className="lg:px-12">
                <div className="lg:max-w-4xl">
                  <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                    <div className="flex flex-col items-start">
                      <h2
                        id="project-1"
                        className="mt-2 text-lg font-bold text-slate-900"
                      >
                        Events, Robotics Management Application
                      </h2>
                      <time className="order-first font-mono text-sm leading-7 text-slate-500">
                        January 2022
                      </time>
                      <ul className="mt-1 text-base leading-7 text-slate-700 list-disc list-inside md:list-outside -ml-2">
                        <li className="pl-2">
                          Simplifies team scheduling by allowing users to
                          register for events, sign up for food, and sign into
                          the lab
                        </li>
                        <li className="pl-2">
                          Exhibits functional mobile support, dynamic module
                          loading, clean readability, and user-friendly design.
                        </li>
                      </ul>
                      <div className="mt-4 flex items-center gap-4">
                        <button className="flex items-center text-sm font-bold leading-6 text-sky-500 hover:text-sky-700 active:text-sky-900">
                          <IoOpenOutline className="w-6 h-6" />
                          <span className="ml-2">Learn More</span>
                        </button>
                        <span
                          aria-hidden="true"
                          className="text-sm font-bold text-slate-400"
                        >
                          /
                        </span>
                        <button className="flex items-center text-sm font-bold leading-6 text-sky-500 hover:text-sky-700 active:text-sky-900">
                          <IoLogoGithub className="w-6 h-6" />
                          <span className="ml-2">GitHub</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article aria-labelledby="project-2" className="py-10 sm:py-12">
              <div className="lg:px-12">
                <div className="lg:max-w-4xl">
                  <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                    <div className="flex flex-col items-start">
                      <h2
                        id="project-2"
                        className="mt-2 text-lg font-bold text-slate-900"
                      >
                        ConvoVault, Slack Message Archiving Application
                      </h2>
                      <time className="order-first font-mono text-sm leading-7 text-slate-500">
                        July 2020
                      </time>
                      <ul className="mt-1 text-base leading-7 text-slate-700 list-disc list-inside md:list-outside -ml-2">
                        <li className="pl-2">
                          Created an open source tool for organizations to store
                          an archive of their messages on the Slack platform
                        </li>
                        <li className="pl-2">
                          Automatically listens to all public channels and saves
                          any new messages to a searchable index
                        </li>
                        <li className="pl-2">
                          Users can evoke a command to access the archive and
                          filter the results
                        </li>
                      </ul>
                      <div className="mt-4 flex items-center gap-4">
                        <button className="flex items-center text-sm font-bold leading-6 text-sky-500 hover:text-sky-700 active:text-sky-900">
                          <IoOpenOutline className="w-6 h-6" />
                          <span className="ml-2">Learn More</span>
                        </button>
                        <span
                          aria-hidden="true"
                          className="text-sm font-bold text-slate-400"
                        >
                          /
                        </span>
                        <button className="flex items-center text-sm font-bold leading-6 text-sky-500 hover:text-sky-700 active:text-sky-900">
                          <IoLogoGithub className="w-6 h-6" />
                          <span className="ml-2">GitHub</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article aria-labelledby="project-3" className="py-10 sm:py-12">
              <div className="lg:px-12">
                <div className="lg:max-w-4xl">
                  <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                    <div className="flex flex-col items-start">
                      <h2
                        id="project-3"
                        className="mt-2 text-lg font-bold text-slate-900"
                      >
                        Scouting Native, Robotics Mobile Application
                      </h2>
                      <time className="order-first font-mono text-sm leading-7 text-slate-500">
                        June 2021
                      </time>
                      <ul className="mt-1 text-base leading-7 text-slate-700 list-disc list-inside md:list-outside -ml-2">
                        <li className="pl-2">
                          Built a new alternative to the traditional scantron
                          system used to record scouting data at robotic
                          competitions
                        </li>
                        <li className="pl-2">
                          Allows scouters to input data on a tablet and stream
                          the information to the team’s backend systems in real
                          time
                        </li>
                        <li className="pl-2">
                          Built using Vue on the React Native platform, which
                          was later ported to Cordova
                        </li>
                      </ul>
                      <div className="mt-4 flex items-center gap-4">
                        <button className="flex items-center text-sm font-bold leading-6 text-sky-500 hover:text-sky-700 active:text-sky-900">
                          <IoOpenOutline className="w-6 h-6" />
                          <span className="ml-2">Learn More</span>
                        </button>
                        <span
                          aria-hidden="true"
                          className="text-sm font-bold text-slate-400"
                        >
                          /
                        </span>
                        <button className="flex items-center text-sm font-bold leading-6 text-sky-500 hover:text-sky-700 active:text-sky-900">
                          <IoLogoGithub className="w-6 h-6" />
                          <span className="ml-2">GitHub</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article aria-labelledby="project-4" className="py-10 sm:py-12">
              <div className="lg:px-12">
                <div className="lg:max-w-4xl">
                  <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                    <div className="flex flex-col items-start">
                      <h2
                        id="project-4"
                        className="mt-2 text-lg font-bold text-slate-900"
                      >
                        Pit Display, Interactive Multi-Touch Web Application
                      </h2>
                      <time className="order-first font-mono text-sm leading-7 text-slate-500">
                        April 2022
                      </time>
                      <ul className="mt-1 text-base leading-7 text-slate-700 list-disc list-inside md:list-outside -ml-2">
                        <li className="pl-2">
                          Developed an interactive display application for a
                          portrait touch-enabled monitor
                        </li>
                        <li className="pl-2">
                          Enables users to learn about our team and robot
                          through images and an interactive 3D view
                        </li>
                        <li className="pl-2">
                          Built using HTML, CSS, JavaScript, Vue, and NodeJS
                        </li>
                      </ul>
                      <div className="mt-4 flex items-center gap-4">
                        <button className="flex items-center text-sm font-bold leading-6 text-sky-500 hover:text-sky-700 active:text-sky-900">
                          <IoOpenOutline className="w-6 h-6" />
                          <span className="ml-2">Learn More</span>
                        </button>
                        <span
                          aria-hidden="true"
                          className="text-sm font-bold text-slate-400"
                        >
                          /
                        </span>
                        <button className="flex items-center text-sm font-bold leading-6 text-sky-500 hover:text-sky-700 active:text-sky-900">
                          <IoLogoGithub className="w-6 h-6" />
                          <span className="ml-2">GitHub</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
