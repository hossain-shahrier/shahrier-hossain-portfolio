'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ModeToggle } from '../toggle';

const MainNav = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  const pathname = usePathname();

  const routes = [
    {
      href: '/',
      label: 'Home',
      active: pathname === '/',
    },
    {
      href: '/about',
      label: 'About',
      active: pathname === '/about',
    },
    {
      href: '/blog',
      label: 'Blog',
      active: pathname === '/blog',
    },
    {
      href: '/skills',
      label: 'Skills',
      active: pathname === '/skills',
    },
    {
      href: '/services',
      label: 'Services',
      active: pathname === '/services',
    },
    {
      href: '/portfolio',
      label: 'Portfolio',
      active: pathname === '/portfolio',
    },
    {
      href: '/contact',
      label: 'Contact',
      active: pathname === '/contact',
    },
  ];
  return (
    <nav className={cn('flex items-center space-x-4 lg:space-x-6', className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            route.active
              ? 'text-black dark:text-blue-500'
              : 'text-blue-950 dark:text-blue-50'
          )}
        >
          {route.label}
        </Link>
      ))}
      <ModeToggle />
    </nav>
  );
};

export default MainNav;
