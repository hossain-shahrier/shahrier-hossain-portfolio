'use client';
import { Menu, MenuIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { usePathname, useRouter } from 'next/navigation';

import { ModeToggle } from '../toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface Route {
  href: string;
  label: string;
}
const MobileNav = () => {
  const pathname = usePathname();

  const [navOpen, setNavOpen] = useState(false);

  // Define a function to toggle the navbar status
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
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
  const router = useRouter();
  const handleClick = (route: Route) => {
    router.push(route.href);
  };
  return (
    <div className="relative flex items-center space-x-2">
      <ModeToggle />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="p-6">
          {routes.map((route, i) => (
            <DropdownMenuItem
              key={i}
              onClick={() => handleClick(route)}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                route.active
                  ? 'text-black dark:text-blue-500'
                  : 'text-blue-950 dark:text-blue-50'
              )}
            >
              {route.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNav;
