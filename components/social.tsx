import { Github, Instagram, Linkedin, LucideProps } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const socials = [
  {
    href: 'https://www.instagram.com',
    label: 'Instagram',
    Icon: Instagram,
  },
  {
    href: 'https://www.github.com',
    label: 'Github',
    Icon: Github,
  },
  {
    href: 'https://www.linkedin.com',
    label: 'Linkedin',
    Icon: Linkedin,
  },
];

const Social = () => {
  return (
    <div className="gap-8 flex lg:flex-col">
      {socials.map(({ href, label, Icon }) => (
        <Link href={href} key={href}>
          {
            <Icon className="text-muted-foreground w-5 h-5 hover:text-primary transition-colors duration-300 ease-in-out" />
          }
        </Link>
      ))}
    </div>
  );
};

export default Social;
