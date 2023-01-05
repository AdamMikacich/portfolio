import Link from 'next/link';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import LogoFull from './LogoFull';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-4 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8 dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75">
      <div className="flex flex-grow">
        <LogoFull />
      </div>
      <div className="flex flex-row space-x-4 lg:space-x-6">
        <Link href="https://github.com/adammikacich/">
          <IoLogoGithub className="w-7 h-7 transition-colors text-primary-400 hover:text-primary-300 cursor-pointer" />
        </Link>
        <Link href="https://www.linkedin.com/in/adam-mikacich-1532431a1/">
          <IoLogoLinkedin className="w-7 h-7 transition-colors text-primary-400 hover:text-primary-300 cursor-pointer" />
        </Link>
      </div>
    </header>
  );
}
