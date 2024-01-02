import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { DownloadIcon } from '@radix-ui/react-icons';

const HomeContent = () => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h1 className="text-4xl md:text-5xl relative  font-bold w-full gap-2 text-center md:text-start">
        Shahrier Hossain
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2563EB"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-sparkles absolute right-8 top-[-20px] md:right-[180px] lg:right-50 "
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          <path d="M5 3v4" />
          <path d="M19 17v4" />
          <path d="M3 5h4" />
          <path d="M17 19h4" />
        </svg>
      </h1>
      <Badge variant="secondary" className="mt-2 text-muted-foreground">
        Software developer
      </Badge>
      <div className="mt-4 flex flex-col items-center md:block space-y-4 max-w-[400px] md:max-w-[600px]">
        <p className="text-l text-muted-foreground text-sm md:text-lg">
          I am a Creative Full stack developer, and I am very passionate and
          dedicated to my work.
        </p>
        <div className="flex space-x-2 items-center">
          <Button variant="secondary">Say Hello</Button>
          <Button variant="secondary" size="icon">
            <DownloadIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
