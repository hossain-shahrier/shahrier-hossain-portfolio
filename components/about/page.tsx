import React from 'react';
import Image from 'next/image';
import AboutImage from '../../public/images/about.jpg';
import Info from '../info';
import { Button } from '../ui/button';
import Link from 'next/link';
import MaxWidthWrapper from '../max-width-wrapper';

const handleClick = () => {};
const About = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl">About Me</h2>
        <span className="">My Introduction</span>
      </div>
      <div className="flex justify-between items-start space-x-32 ">
        <div className="w-72 h-44">
          <Image
            src={AboutImage}
            alt=""
            width={400}
            height={400}
            className="object-cover rounded-full w-full h-full"
          />
        </div>

        <div className="flex-1 flex flex-col items-start w-96">
          <Info />

          <p>
            Full stack developer and a Data Scientist, I create web application
            with Using User Interface Design , create and manage server. I
            design data base and manupulate data.
          </p>

          <Button variant="outline">
            <Link href="/Educational_Resume.pdf" download="">
              Download Resume
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
