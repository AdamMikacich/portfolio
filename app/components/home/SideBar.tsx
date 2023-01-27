import profilePicture from '@/assets/profile.jpg';
import Image from 'next/image';

export default function SideBar() {
  return (
    <header className="bg-slate-50 lg:flex lg:items-start lg:overflow-y-auto ">
      <div className="hidden lg:flex sticky top-0 w-16 flex-none items-center whitespace-nowrap py-12 text-sm leading-7 [writing-mode:vertical-rl]">
        <span className="font-mono text-slate-500">Developed by&nbsp;</span>
        <span className="flex gap-6 font-bold text-slate-900">
          Adam Mikacich
        </span>
      </div>
      <div className="mx-auto px-4 pb-4 pt-10 sm:px-6 max-w-xl lg:max-w-lg md:px-4  lg:flex-auto lg:border-x lg:border-slate-200 lg:py-12 lg:px-8 xl:px-12 overflow-y-auto">
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
            As a passionate developer working on full-stack applications, I
            prioritize security and efficiency when creating new software. I
            excel at developing real-time collaborative experiences by using
            tools such as OT and CRDT. While producing a wide range of
            applications for my freelance clients has improved my personal skill
            set, I am also passionate about sharing my programming knowledge as
            a teaching assistant at my local high school.
          </p>
        </div>
      </div>
    </header>
  );
}
