import React, { useState, useEffect, forwardRef, useRef } from "react";
import { motion } from "framer-motion";

const Sobre = forwardRef((props, ref) => {
  Sobre.displayName = "Sobre";

  return (
    <div ref={ref}>
      <div className="flex flex-col max-w-3xl m-auto items-center justify-between py-10 min-h-screen text-black dark:text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h1 className="text-center bg-red-500 text-6xl rounded-md p-3 font-bold text-gray-200 inline-block mt-20 mb-10">
            Sobre mim
          </h1>
        </motion.div>
        <div className="flex flex-col md:flex-row mx-auto items-center justify-between mb-24">
          <motion.div
            className="mb-10 md:mb-0"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <img
              className=" w-full h-auto max-w-sm object-bottom rounded-full"
              src="/20221209_185752.jpg"
              alt="avatar"
            ></img>
          </motion.div>
          <div className="h-full w-0.5 bg-white dark:bg-gray-700 ml-20"></div>
          <motion.div
            className="w-3/5"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="text-lg">
              Olá, meu nome é William, estou no meio do Desenvolvimento de
              Software desde 2019, quando comecei a estudar programação!
              Atualmente estou em busca de meu primeiro emprego como
              Desenvolvedor Full-Stack Jr. e busco por meio deste site
              apresentar um pouco dos meus conhecimentos e experiências, assim
              como alguns projetos de portfolio feitos por mim!{" "}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
});

export default Sobre;
