import { cv } from '@/cv/cv';
import { TbWorld } from 'react-icons/tb';
import SocialsNetwork from '@/components/SocialsNetwork';

export default function Hero() {
   const {
      basics: { name, level, image, label, location },
   } = cv;
   const { city, region, countryCode } = location;

   return (
      <section className="flex w-full flex-col-reverse md:flex-row md:justify-between md:mb-16">
         <div>
            <div className="text-center tracking-tight md:text-start">
               <h1 className="text-3xl lg:text-4xl font-bold text-gray-950">
                  {name}
               </h1>
               <div className="my-2">
                  <h3 className="text-gray-500 text-xl font-normal">{level}</h3>
                  <h2 className="text-gray-500 text-xl font-normal">{label}</h2>
               </div>
               <div className="text-sm font-mono tracking-wider flex w-full justify-center items-center gap-x-2 text-gray-800 my-4 md:justify-start ">
                  <TbWorld size={18} />
                  <h4>
                     {city}, {region}, {countryCode}
                  </h4>
               </div>
            </div>
            <SocialsNetwork />
         </div>
         <div className="mx-auto md:m-0 mb-3">
            <img
               className="size-32 rounded-md shadow-md aspect-square "
               src={image}
               alt={name}
            />
         </div>
      </section>
   );
}
