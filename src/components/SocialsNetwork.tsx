import { cv } from '@/cv/cv';
import { TbMail } from 'react-icons/tb';

export default function SocialsNetwork() {
   const {
      basics: { name, email, profiles },
   } = cv;

   return (
      <div className="flex justify-center md:justify-start">
         <div className="flex gap-x-4 text-gray-500">
            <a
               className="p-1 border border-gray-500 rounded-md shadow hover:scale-125 transition hover:bg-gray-400"
               title={`Enviar correo electrónico a ${name} al correo ${email}`}
               target="_blank"
               href={`mailto:${email}`}
               aria-label="Mail"
            >
               <TbMail size={24} />
            </a>
            {profiles.map(({ icon: Icon, name, url }) => (
               <a
                  className=" p-1 border border-gray-500 rounded-md shadow hover:scale-110 transition hover:bg-gray-300"
                  title={`Visitar perfil de ${name}`}
                  href={url}
                  key={name}
                  target="_blank"
                  aria-label={name}
               >
                  <Icon size={24} />
               </a>
            ))}
         </div>
      </div>
   );
}
