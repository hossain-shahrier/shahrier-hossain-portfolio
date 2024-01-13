import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { DownloadIcon } from '@radix-ui/react-icons';

const HomeContent = () => {
  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="relative">
        <h1 className="text-4xl md:text-5xl relative  font-bold w-full gap-2 text-center md:text-start bg-gradient-to-r from-rose-300 via-blue-500 to-purple-600 bg-clip-text text-transparent sm:text-5xl">
          Shahrier Hossain
        </h1>
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
          className="lucide lucide-sparkles absolute right-[-15px] top-[-20px]  "
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          <path d="M5 3v4" />
          <path d="M19 17v4" />
          <path d="M3 5h4" />
          <path d="M17 19h4" />
        </svg>
      </div>
      <div className="flex gap-2 mt-4">
        <Badge variant="default" className="font-extralight">
          Software Engineer
        </Badge>
        <Badge variant="outline" className="font-extralight">
          Data Scientist
        </Badge>
      </div>
      <div className="mt-6 flex flex-col items-center md:block space-y-2 max-w-[400px] md:max-w-[600px]">
        <p className="text-muted-foreground text-sm md:text-lg">
          I am a Creative Full stack developer, and I am very passionate and
          dedicated to my work.
        </p>
        <div className="flex space-x-2 items-center">
          <Button variant="secondary" className="text-primary">
            Say Hello
          </Button>
          <Button variant="secondary" size="icon" className="text-primary">
            <DownloadIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
