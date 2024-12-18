import Hero from '@/sections/Hero';
import About from '@/sections/About';
import WorkExperience from '@/sections/WorkExperience';
import Education from '@/sections/Education';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import CommandMenu from '@/components/CommandMenu';
export default function App() {
   return (
      <main className="px-4 py-6 lg:mt-16 antialiased max-w-3xl mx-auto">
         <Hero />
         <About />
         <WorkExperience />
         <Education />
         <Skills />
         <Projects />
         <CommandMenu />
      </main>
   );
}
