import HomeContent from '@/components/home-content';
import MaxWidthWrapper from '@/components/max-width-wrapper';
import Social from '@/components/social';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <MaxWidthWrapper>
        <div className="flex flex-col lg:flex-row items-center justify-between pt-28 gap-10">
          <Social />
          <div className="bg-cover bg-no-repeat order-1 justify-self-center ">
            <Image
              src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/324871316_698325348411261_2873506391857342986_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Rtrmm2qem10AX8oU5WW&_nc_ht=scontent.fcgp3-1.fna&oh=00_AfBfT2Gut4Hi-90OyMeviA4kPWdbAOgXFj1e4q0kWYaM3A&oe=65998749"
              width={320}
              height={320}
              alt="logo"
              className="animate__img"
            />
          </div>
          <HomeContent />
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
