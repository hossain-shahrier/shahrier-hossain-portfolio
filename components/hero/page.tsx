import React from 'react';
import MaxWidthWrapper from '../max-width-wrapper';
import Social from '../social';
import Image from 'next/image';
import HomeContent from '../home-content';
import myImage from '../../public/images/my-image.jpg';
const Hero = () => {
  return (
    <section>
      <div className="flex flex-col lg:flex-row items-center justify-between pt-28 gap-10">
        <Social />
        <div className="bg-cover bg-no-repeat order-1 justify-self-center ">
          <Image
            src={myImage}
            width={320}
            height={320}
            alt="logo"
            className="animate__img"
          />
        </div>
        <HomeContent />
      </div>
      {/* <ScrollDown /> */}
    </section>
  );
};

export default Hero;
