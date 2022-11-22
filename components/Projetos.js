import React, { forwardRef } from "react";
import userData from "../constants/data";

const Projetos = forwardRef((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen flex flex-col">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center bg-red-500 text-6xl rounded-md p-3 font-bold text-gray-200 inline-block">
          Projetos
        </h1>
      </div>
      <p className="text-xl text-gray-700 mb-4 dark:text-gray-300 pt-16 text-center">
        Clique nas imagens para acessar o repositório no GitHub:
      </p>
      <div className="py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className="w-full block shadow-2xl" target="_blank">
      <div className="relative z-10 overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
          {title}
        </h1>
      </div>
    </a>
  );
};

export default Projetos;
