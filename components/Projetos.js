import React, { forwardRef, useState, useEffect } from "react";
import userData from "../constants/data";
import { motion } from "framer-motion";

const Projetos = forwardRef((props, ref) => {
  Projetos.displayName = "Projetos";

  const [animations, setAnimations] = useState([
    {
      initial: { opacity: 0, x: -200 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    {
      initial: { opacity: 0, y: -200 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    {
      initial: { opacity: 0, x: 200 },
      whileInView: { opacity: 1, x: 0 },
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    {
      initial: { opacity: 0, y: 200 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  ]);

  return (
    <section ref={ref} className="min-h-screen flex flex-col">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-center bg-red-500 text-6xl rounded-md p-3 font-bold text-gray-200 inline-block">
          Projetos
        </h1>
      </motion.div>

      <p className="text-2xl text-gray-700 mb-4 dark:text-gray-300 pt-16 text-center">
        Clique nas imagens para acessar o repositório no GitHub:
      </p>
      <div className="py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
          {userData.projects.map((proj, idx) => (
            <motion.div
              initial={animations[idx % 4].initial}
              whileInView={animations[idx % 4].whileInView}
              transition={animations[idx % 4].transition}
              className="p-1 bg-white rounded"
            >
              <ProjectCard
                title={proj.title}
                link={proj.link}
                imgUrl={proj.imgUrl}
                number={`${idx + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a
      href={link}
      className="w-full block shadow-2xl"
      target="_blank"
      rel="noreferrer"
    >
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
