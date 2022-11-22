import React, { forwardRef } from "react";

const Stack = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex flex-col items-center max-w-6xl m-auto min-h-screen"
    >
      <h1 className="text-center bg-red-500 text-6xl rounded-md p-3 font-bold text-gray-200 inline-block">
        Tech Stack
      </h1>
      <p className="text-xl text-gray-700 mb-4 dark:text-gray-300  pt-16">
        Atualmente possuo experiência com as seguintes tecnologias:
      </p>
      <div className="flex flex-row flex-wrap mt-8 bg-[#F1F1F1] dark:bg-inherit">
        <img
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
          className="h-20 w-20 mx-4 my-4"
        />
        <img
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
          className="h-20 w-20 mx-4 my-4"
        />
        <img
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
          className="h-20 w-20 mx-4 my-4"
        />
        <img
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
          className="h-20 w-20 mx-4 my-4"
        />
        <img
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
          className="h-20 w-20 mx-4 my-4"
        />
        <img
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
          className="h-20 w-20 mx-4 my-4"
        />
        <img
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
          className="h-20 w-20 mx-4 my-4"
        />
        <img
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
          className="h-20 w-20 mx-4 my-4"
        />
        <img
          src="https://raw.githubusercontent.com/github/explore/28b02bbc9ad9f7a503c43775aebeb515dc2da5fc/topics/nextjs/nextjs.png"
          className="h-20 w-20 mx-4 my-4"
        />
        <img
          src="https://raw.githubusercontent.com/github/explore/882462b8ecc337fd9c9b2572bc463a1cbc88fb6a/topics/tailwind/tailwind.png"
          className="h-20 w-20 mx-4 my-4"
        />
        <img
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/styled-components/styled-components.png"
          className="h-20 w-20 mx-4 my-4"
        />
        <img
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png"
          className="h-20 w-20 mx-4 my-4"
        />
      </div>
    </div>
  );
});

export default Stack;
