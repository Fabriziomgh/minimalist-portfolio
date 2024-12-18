import CustomTitle from '@/components/CustomTitle';
import { cv } from '@/cv/cv';

export default function About() {
   const {
      basics: { summary },
   } = cv;
   return (
      <section className="my-6 tracking-tight">
         <CustomTitle title="Sobre mí" />
         <p className="text-gray-500 font-light font-mono text-pretty text-sm">
            {summary}
         </p>
      </section>
   );
}
