import SectionDivider from '@/components/section-divider';
import Intro from '../components/intro';
import About from '@/components/about';
import SectionHeading from '@/components/section-heading';
import Projects from '@/components/projects';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4 '>
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  );
}
