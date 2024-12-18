interface Props {
   title: string;
}

export default function CustomTitle({ title }: Props) {
   return <h2 className="text-2xl font-bold text-gray-950 mb-4">{title}</h2>;
}
