import LogoFull from './LogoFull';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8 dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75">
      <div className="relative flex flex-grow basis-0 items-center">
        <LogoFull />
      </div>
    </header>
  );
}
