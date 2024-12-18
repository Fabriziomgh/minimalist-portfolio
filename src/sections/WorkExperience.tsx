import CustomTitle from '@/components/CustomTitle';
import Highlights from '@/components/Highlights';
import { cv } from '@/cv/cv';
import { format } from '@formkit/tempo';
export default function WorkExperience() {
   const { work } = cv;
   return (
      <section className="mb-6">
         <CustomTitle title="Experiencia laboral" />
         {work.map((work) => {
            const startDate = format(work.startDate, 'short');
            const checkEndDate = work.endDate !== undefined;
            const endDate = checkEndDate
               ? format(work.endDate, 'short')
               : 'Presente';
            return (
               <div key={work.name} className="tracking-tight ">
                  <div className="flex justify-between">
                     <h3 className="text-gray-950 hover:underline font-semibold ">
                        <a href={work.url} target="_blank">
                           {work.name}
                        </a>
                     </h3>
                     <time className="text-gray-500 text-sm">
                        {startDate} - {endDate}
                     </time>
                  </div>
                  <div>
                     <h4 className="text-gray-950 text-sm font-semibold font-mono">
                        {work.position}
                     </h4>
                     <p className="font-mono text-gray-500 text-sm mt-2">
                        {work.summary}
                     </p>
                  </div>
                  <Highlights highlights={work.highlights} />
               </div>
            );
         })}
      </section>
   );
}
