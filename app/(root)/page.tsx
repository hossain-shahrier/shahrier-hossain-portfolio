import About from '@/components/about/page';
import Hero from '@/components/hero/page';
import MaxWidthWrapper from '@/components/max-width-wrapper';


export default function Home() {
  return (
    <main>
      <MaxWidthWrapper className="flex flex-col items-center gap-40">
        <Hero />
        <About />
      </MaxWidthWrapper>
    </main>
  );
}
