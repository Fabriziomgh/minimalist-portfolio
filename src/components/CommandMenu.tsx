import 'ninja-keys';
import { useState, useRef, useEffect, MutableRefObject } from 'react';
import { TbCommand } from 'react-icons/tb';
import { cv } from '@/cv/cv';

interface NinjaKeysElement extends HTMLElement {
   data: any;
}

const socialNetworks = cv.basics.profiles;
const data = socialNetworks.map(({ name, url }) => ({
   id: name,
   section: 'Redes Sociales',
   title: `Visitar ${name}`,
   url,
   handler: () => {
      window.open(url, '_blank');
   },
}));

const actions = [
   {
      id: 'print',
      title: 'Imprimir',
      section: 'Acciones',
      handler: () => {
         window.print();
      },
   },
   ,
   ...data,
];
export default function App() {
   const ninjaKeys: MutableRefObject<NinjaKeysElement | null> = useRef(null);
   const [hotkeys] = useState(actions);

   const handleButtonClick = () => {
      const event = new KeyboardEvent('keydown', {
         key: 'K',
         code: 'KeyK',
         keyCode: 75,
         which: 75,
         ctrlKey: true,
         altKey: false,
         shiftKey: false,
         metaKey: false,
      });
      document.dispatchEvent(event);
   };

   useEffect(() => {
      if (ninjaKeys.current) {
         ninjaKeys.current.data = hotkeys;
      }
   }, []);

   return (
      <div className="print:hidden">
         <footer className="fixed bottom-0 right-0 left-0 pointer-events-none  hidden border-t border-t-slate-300 bg-white p-1 text-center print:hidden lg:block">
            <p>
               Presiona
               <kbd className="inline-block rounded border bg-slate-800 px-1.5 font-mono text-[10px] font-medium  opacity-100 mx-2">
                  <span className="text-xs text-slate-50">Ctrl + K</span>
               </kbd>
               para abrir la paleta de comandos.
            </p>
         </footer>
         <button
            onClick={handleButtonClick}
            className="fixed bg-gray-300 bottom-4 p-1 right-4 flex rounded-full shadow-2xl print:hidden lg:hidden"
         >
            <TbCommand size={40} className="" />
         </button>
         <ninja-keys ref={ninjaKeys}></ninja-keys>
      </div>
   );
}
