import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import LogoFull from './LogoFull';

export default function NavBar() {
  return (
    <header className="h-16 sticky top-0 z-50 flex items-center justify-between bg-white dark:bg-primary-900 px-4 py-4 shadow-md shadow-primary-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8 dark:border-b border-primary-800">
      <div className="flex flex-grow">
        <LogoFull />
      </div>
      <div className="flex flex-row space-x-4 lg:space-x-6 bg-white dark:bg-primary-900 p-2 rounded-full">
        <a
          href="https://github.com/adammikacich/"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoGithub className="w-7 h-7 transition-colors text-primary-400 hover:text-primary-300 cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/adam-mikacich-1532431a1/"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoLinkedin className="w-7 h-7 transition-colors text-primary-400 hover:text-primary-300 cursor-pointer" />
        </a>
      </div>
    </header>
  );
}
