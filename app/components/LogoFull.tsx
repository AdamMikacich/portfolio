import logo from '@/assets/logo.svg';
import { Lexend } from '@next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const lexend = Lexend({ subsets: ['latin'] });

export default function NavSection(props: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center lg:w-64 ${lexend.className} ${props.className}`}
    >
      {/* <p className="text-sky-500 mr-4 font-normal text-2xl">AM</p> */}
      <Image
        src={logo}
        alt="logo"
        priority={true}
        className="w-8 h-8 mr-3 lg:mr-4"
      ></Image>
      <p className="self-center text-xl font-semibold whitespace-nowrap text-primary-700 dark:text-primary-300">
        Adam Mikacich
      </p>
    </Link>
  );
}
