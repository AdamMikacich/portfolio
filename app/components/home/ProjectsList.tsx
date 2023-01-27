import { IoLogoGithub, IoOpenOutline } from 'react-icons/io5';

type Project = {
  id: string;
  title: string;
  date: string;
  points: string[];
};

export default function ProjectsList() {
  const projects: Project[] = [
    {
      id: 'project-1',
      title: 'Events, Robotics Management Application',
      date: 'January 2022',
      points: [
        'Simplifies team scheduling by allowing users to register for events, sign up for food, and sign into the lab',
        'Exhibits functional mobile support, dynamic module loading, clean readability, and user-friendly design'
      ]
    },
    {
      id: 'project-2',
      title: 'ConvoVault, Slack Message Archiving Application',
      date: 'July 2020',
      points: [
        'Created an open source tool for organizations to store an archive of their messages on the Slack platform',
        'Automatically listens to all public channels and saves any new messages to a searchable index',
        'Users can evoke a command to access the archive and filter the results'
      ]
    },
    {
      id: 'project-3',
      title: 'Scouting Native, Robotics Mobile Application',
      date: 'June 2021',
      points: [
        'Built a new alternative to the traditional scantron system used to record scouting data at robotic competitions',
        "Allows scouters to input data on a tablet and stream the information to the team's backend systems in real time",
        'Built using Vue on the React Native platform, which was later ported to Cordova'
      ]
    },
    {
      id: 'project-4',
      title: 'Pit Display, Interactive Multi-Touch Web Application',
      date: 'April 2022',
      points: [
        'Developed an interactive display application for a portrait touch-enabled monitor',
        'Enables users to learn about our team and robot through images and an interactive 3D view',
        'Built using HTML, CSS, JavaScript, Vue, and NodeJS'
      ]
    }
  ];

  return (
    <main className="border-t border-primary-200 lg:border-none bg-white dark:bg-primary-900 overflow-y-auto w-full h-full">
      <div className="relative">
        <div className="pt-16 pb-12 sm:pb-4 lg:pt-12">
          <div className="lg:px-8">
            <div className="lg:max-w-4xl">
              <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                <h1 className="text-2xl font-bold leading-7 text-primary-900 dark:text-primary-100">
                  Projects
                </h1>
              </div>
            </div>
          </div>
          <div className="divide-y divide-primary-100 dark:divide-primary-800 sm:mt-4 lg:mt-8 lg:border-t lg:border-primary-100 dark:lg:border-primary-800">
            {projects.map((project) => {
              return (
                <article
                  aria-labelledby={project.id}
                  className="py-10 sm:py-12"
                  key={project.id}
                >
                  <div className="lg:px-12">
                    <div className="lg:max-w-4xl">
                      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                        <div className="flex flex-col items-start">
                          <h2
                            id={project.id}
                            className="mt-2 text-lg font-bold text-primary-900 dark:text-primary-100"
                          >
                            {project.title}
                          </h2>
                          <time className="order-first font-mono text-sm leading-7 text-primary-500 dark:text-primary-400">
                            {project.date}
                          </time>
                          <ul className="mt-1 text-base leading-7 text-primary-700 dark:text-primary-400 list-disc list-inside md:list-outside -ml-2">
                            {project.points.map((point) => {
                              return (
                                <li className="pl-2" key={point}>
                                  {point}
                                </li>
                              );
                            })}
                          </ul>
                          <div className="mt-4 flex items-center gap-4">
                            <button className="flex items-center text-sm font-bold leading-6 text-sky-500 hover:text-sky-700 active:text-sky-900">
                              <IoOpenOutline className="w-6 h-6" />
                              <a
                                className="ml-2"
                                href="https://github.com/adammikacich/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Learn More
                              </a>
                            </button>
                            <span
                              aria-hidden="true"
                              className="text-sm font-bold text-primary-400 dark:text-primary-600"
                            >
                              /
                            </span>
                            <button className="flex items-center text-sm font-bold leading-6 text-sky-500 hover:text-sky-700 active:text-sky-900">
                              <IoLogoGithub className="w-6 h-6" />
                              <a
                                className="ml-2"
                                href="https://github.com/adammikacich/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                GitHub
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
