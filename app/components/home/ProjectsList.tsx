import { IoLogoGithub, IoOpenOutline } from 'react-icons/io5';

export default function ProjectsList() {
  return (
    <main className="border-t border-slate-200 lg:ml-[28rem]">
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
                      <ul className="mt-1 text-base leading-7 text-slate-700 list-disc list-outside -ml-2">
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
          </div>
        </div>
      </div>
    </main>
  );
}
