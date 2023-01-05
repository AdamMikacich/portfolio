import profilePicture from '@/assets/profile.jpg';
import NavBar from '@/components/NavBar';
import { Lexend } from '@next/font/google';
import Image from 'next/image';

const lexend = Lexend({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar></NavBar>
      <div className="flex-grow">
        <header className="bg-slate-50 lg:mt-16 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:items-start lg:overflow-y-auto xl:w-120">
          <div className="hidden lg:flex sticky top-0 w-16 flex-none items-center whitespace-nowrap py-12 text-sm leading-7 [writing-mode:vertical-rl]">
            <span className="font-mono text-slate-500">Developed by&nbsp;</span>
            <span className="flex gap-6 font-bold text-slate-900">
              Adam Mikacich
            </span>
          </div>
          <div className="mx-auto px-4 pb-4 pt-10 sm:px-6 max-w-xl lg:max-w-sm md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:py-12 lg:px-8 xl:px-12">
            <a
              className="relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl"
              aria-label="Homepage"
              href="/"
            >
              <Image
                src={profilePicture}
                alt="profile picture"
                priority={true}
              ></Image>
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl"></div>
            </a>
            <div className="mt-10 text-center lg:mt-12 lg:text-left">
              <p className="text-xl font-bold text-slate-900">Adam Mikacich</p>
              <p className="mt-3 text-lg font-medium leading-8 text-slate-700">
                Software Engineering Student at Cal Poly SLO
              </p>
              <p className="mt-6 text-base font-normal leading-8 text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus non ante nisi. Phasellus quis pharetra elit, eu
                placerat enim. Phasellus a odio fringilla, elementum dui vel,
                blandit eros. Nulla ultricies vitae mauris rhoncus mollis. Ut
                gravida rhoncus auctor. Suspendisse scelerisque sed lacus a
                elementum. Mauris nec mi aliquam, sodales enim vel, lobortis
                leo. Morbi non mattis ante. Mauris quis nulla a lorem interdum
                pellentesque quis et dui. Donec malesuada, justo a porttitor
                sollicitudin, justo mi imperdiet nibh, sit amet semper est leo
                nec risus.
              </p>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
