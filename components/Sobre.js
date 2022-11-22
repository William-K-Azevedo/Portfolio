import React, { useState, useEffect, forwardRef } from "react";

const Sobre = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col max-w-3xl m-auto items-center justify-between py-10 min-h-screen"
    >
      <div>
        <h1 className="text-center bg-red-500 text-6xl rounded-md p-3 font-bold text-gray-200 inline-block mt-36">
          Sobre mim
        </h1>
      </div>
      <div className="flex flex-col md:flex-row mx-auto items-center justify-between mb-24">
        <div className="mb-10 md:mb-0">
          <img src="" alt="avatar"></img>
        </div>
        <div className="h-full w-0.5 bg-white dark:bg-gray-700"></div>
        <div className="w-3/5">
          <div className="text-lg">
            Olá, meu nome é William, estou no meio do Desenvolvimento de
            Software desde 2019, quando comecei a estudar programação!
            Atualmente estou em busca de meu primeiro emprego como Desenvolvedor
            Full-Stack Jr. e busco por meio deste site apresentar um pouco dos
            meus conhecimentos e experiências, assim como alguns projetos de
            portfolio feitos por mim!{" "}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Sobre;
