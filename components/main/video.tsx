import { VIDEOINTRO } from '@/constants';
import { Video } from '../sub/videointro';

export const Videos = () => {
  return (
    <section id="projects" className="flex flex-col items-center justify-center min-h-screen py-20 text-center">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-10">Introduction</h1>
      <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10 px-5">
        {VIDEOINTRO.map((project) => (
          <Video key={project.title} src={project.image} title={project.title} description={project.description} link={project.link} />
        ))}
      </div>
    </section>
  );
};
