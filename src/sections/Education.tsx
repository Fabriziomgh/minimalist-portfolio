import CustomTitle from '@/components/CustomTitle';
import { cv } from '@/cv/cv';
import { format } from '@formkit/tempo';
export default function Education() {
   const { education } = cv;
   return (
      <section className="mb-6">
         <CustomTitle title="Educación" />

         {education.map((edu) => {
            const { institution, area, url, startDate, endDate } = edu;
            const start = format(startDate, 'YYYY');
            const end = format(endDate, 'YYYY');
            return (
               <div key={edu.area} className="tracking-tight">
                  <div className="flex justify-between">
                     <h3 className="text-slate-950 font-semibold hover:underline">
                        <a
                           title="Visitar sitio web de la institución"
                           target="_blank"
                           href={url}
                        >
                           {institution}
                        </a>
                     </h3>
                     <time className="text-sm text-gray-500">
                        {start} - {end}
                     </time>
                  </div>
                  <h4 className="text-pretty text-gray-500 font-mono text-sm mt-2">
                     {area}
                  </h4>
               </div>
            );
         })}
      </section>
   );
}
