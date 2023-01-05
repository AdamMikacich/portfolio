import { Lexend } from '@next/font/google';
import Link from 'next/link';

const lexend = Lexend({ subsets: ['latin'] });

export default function NavSection(props: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center lg:w-64 ${lexend.className} ${props.className}`}
    >
      <p className="text-sky-500 p-2 mr-2 font-extrabold rounded-full text-sm border-sky-500 border-2">
        AM
      </p>
      <p className="self-center text-xl font-normal whitespace-nowrap dark:text-white">
        Adam Mikacich
      </p>
    </Link>
  );
}
