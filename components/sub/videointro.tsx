import Image from 'next/image';
import Link from 'next/link';

type VideoProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const Video = ({ src, title, description, link }: VideoProps) => {
  return (
    <div className="flex items-center justify-center">
      <Link href={link} target="_blank" rel="noreferrer noopener" className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
        <Image src={src} alt={title} width={800} height={800} className="w-full object-contain" />

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </Link>
    </div>
  );
};
