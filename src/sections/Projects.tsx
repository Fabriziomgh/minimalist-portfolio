import CustomTitle from '@/components/CustomTitle';
import Highlights from '@/components/Highlights';
import { TbBrandGithub, TbPointFilled } from 'react-icons/tb';
import { cv } from '@/cv/cv';
function Projects() {
   const { projects } = cv;
   return (
      <section className="pb-6">
         <CustomTitle title="Proyectos" />

         <div className="tracking-tight grid grid-cols-1  gap-y-4 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
               const { description, github, highlights, name, url, isActive } =
                  project;
               return (
                  <div
                     key={name}
                     className="border min-h-40 border-gray-300 py-4 px-3 rounded-lg shadow flex flex-col"
                  >
                     <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                           <h4 className="font-semibold text-slate-950">
                              {isActive ? (
                                 <a
                                    className="hover:underline"
                                    title="Visitar sitio web"
                                    target="_blank"
                                    href={url}
                                 >
                                    {name}
                                 </a>
                              ) : (
                                 `${name}`
                              )}
                           </h4>
                           {isActive ? (
                              <TbPointFilled color="#6FFF52" />
                           ) : (
                              <TbPointFilled color="#9B9B9B" />
                           )}
                        </div>
                        <div className="px-4 hover:scale-110 hover:text-slate-700">
                           <a target="_blank" href={github}>
                              <TbBrandGithub size={20} />
                           </a>
                        </div>
                     </div>
                     <div className="text-xs font-mono text-pretty flex-grow">
                        {description}
                     </div>
                     <Highlights highlights={highlights} />
                  </div>
               );
            })}
         </div>
      </section>
   );
}

export default Projects;
