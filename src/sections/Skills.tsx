import CustomTitle from '@/components/CustomTitle';
import { cv } from '@/cv/cv';
import {
   TbBrandJavascript,
   TbBrandTypescript,
   TbBrandTailwind,
   TbBrandGithub,
   TbBrandGit,
   TbBrandMysql,
   TbBrandReact,
   TbBrandNextjs,
} from 'react-icons/tb';
const icons = {
   JavaScript: <TbBrandJavascript size={17} />,
   TypeScript: <TbBrandTypescript size={17} />,
   Tailwind: <TbBrandTailwind size={17} />,
   MySQL: <TbBrandMysql size={17} />,
   Git: <TbBrandGit size={17} />,
   GitHub: <TbBrandGithub size={17} />,
   React: <TbBrandReact size={17} />,
   Next: <TbBrandNextjs size={17} />,
};

export default function Skills() {
   const { skills } = cv;
   return (
      <section className="mb-6">
         <CustomTitle title="Hábilidades" />
         <ul className="flex flex-wrap gap-1 tracking-tight">
            {skills.map(({ name }) => {
               return (
                  <li key={name}>
                     <article className="bg-slate-800 text-slate-50 hover:bg-slate-600 transition-colors text-sm font-mono py-1 px-6 rounded-xl">
                        <div className="flex items-center gap-x-1">
                           {icons[name]}
                           {name}
                        </div>
                     </article>
                  </li>
               );
            })}
         </ul>
      </section>
   );
}
