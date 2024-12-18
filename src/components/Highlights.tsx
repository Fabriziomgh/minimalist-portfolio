interface Props {
   highlights: readonly string[];
}

export default function Highlights({ highlights }: Props) {
   return (
      <div className="mt-2">
         <ul className="flex flex-wrap gap-1">
            {highlights.map((highlight) => (
               <li key={highlight}>
                  <span className="block text-nowrap text-gray-950 bg-gray-300/50 py-0.5 px-2 text-xs font-mono rounded-md font-semibold ">
                     {highlight}
                  </span>
               </li>
            ))}
         </ul>
      </div>
   );
}
