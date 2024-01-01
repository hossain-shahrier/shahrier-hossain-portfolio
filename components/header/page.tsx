import Link from 'next/link';
import MainNav from '../main-nav/page';
import { ModeToggle } from '../toggle';
import MobileNav from '../mobile-nav/page';

const Header = () => {
  return (
    <header className="fixed z-50 left-0 bottom-0 lg:top-0 inset-x-0 border-b border-slate-300 bg-gradient-to-b from-gray-100 backdrop-blur-2xl dark:border-neutral-900 dark:bg-blue-900/30 dark:from-inherit lg:static lg:w-auto  lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
      <div className="flex w-full items-center justify-between px-4 h-16">
        <Link href="/">
          <span className="text-lg font-mono cursor-pointer">
            <span className="text-primary">Shahrier</span> Hossain
          </span>
        </Link>
        <div className="hidden md:flex">
          <MainNav className="mx-6" />
        </div>
        <div className="flex md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
