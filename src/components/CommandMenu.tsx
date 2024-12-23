import { useState, useEffect } from 'react';
import { TbCommand } from 'react-icons/tb';
import { cv } from '@/cv/cv';

import {
   CommandDialog,
   CommandGroup,
   CommandItem,
   CommandList,
   CommandSeparator,
} from '@/components/ui/command';
import { DialogTitle } from '@/components/ui/dialog';
import { Printer } from 'lucide-react';

const socialNetworks = cv.basics.profiles;

export default function App() {
   const [open, setOpen] = useState(false);

   const openCommandHandler = () => setOpen(true);

   useEffect(() => {
      const down = (e: KeyboardEvent) => {
         if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
            e.preventDefault();
            setOpen((open) => !open);
         }
      };

      document.addEventListener('keydown', down);
      return () => document.removeEventListener('keydown', down);
   }, []);
   return (
      <>
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
            onClick={openCommandHandler}
            className="fixed bg-gray-300 bottom-4 p-1 right-4 flex rounded-full shadow-2xl print:hidden lg:hidden"
         >
            <TbCommand size={40} />
         </button>

         <CommandDialog open={open} onOpenChange={setOpen}>
            <DialogTitle className="font-light p-4">
               Lista de comandos
            </DialogTitle>

            <CommandList>
               <CommandGroup heading="Acciones">
                  <CommandItem asChild>
                     <div
                        onClick={() => {
                           window.print();
                        }}
                        className="cursor-pointer"
                     >
                        <Printer />
                        <span>Imprimir</span>
                     </div>
                  </CommandItem>
               </CommandGroup>
               <CommandSeparator />

               <CommandGroup heading="Redes sociales">
                  {socialNetworks.map(({ icon: Icon, name, url }) => (
                     <CommandItem asChild key={name}>
                        <a
                           className="cursor-pointer"
                           title={`Visitar perfíl de ${name}`}
                           href={url}
                           target="_blank"
                        >
                           <Icon />
                           <span>{name}</span>
                        </a>
                     </CommandItem>
                  ))}
               </CommandGroup>
            </CommandList>
         </CommandDialog>
      </>
   );
}
