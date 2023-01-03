import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "@material-tailwind/react";

const Stack = forwardRef((props, ref) => {
  Stack.displayName = "Stack";

  return (
    <div
      ref={ref}
      className="flex flex-col items-center max-w-6xl m-auto min-h-screen"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-center bg-red-500 text-6xl rounded-md p-3 font-bold text-gray-200 inline-block"
      >
        Tech Stack
      </motion.h1>

      <p className="text-2xl text-gray-700 mb-4 dark:text-gray-300  pt-16">
        Atualmente possuo experiência com as seguintes tecnologias:
      </p>
      <div className="flex flex-row flex-wrap mt-8 dark:bg-inherit">
        <Tooltip
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          content="Javascript"
          className="p-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="bg-white rounded-lg m-1"
          >
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
              className="h-20 w-20 mx-4 my-4"
            />
          </motion.div>
        </Tooltip>
        <Tooltip
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          content="Typescript"
          className="p-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-white rounded-lg m-1"
          >
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
              className="h-20 w-20 mx-4 my-4"
            />
          </motion.div>
        </Tooltip>

        <Tooltip
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          content="HTML"
          className="p-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-white rounded-lg m-1"
          >
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
              className="h-20 w-20 mx-4 my-4"
            />
          </motion.div>
        </Tooltip>
        <Tooltip
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          content="CSS"
          className="p-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="bg-white rounded-lg m-1"
          >
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
              className="h-20 w-20 mx-4 my-4"
            />
          </motion.div>
        </Tooltip>
        <Tooltip
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          content="GIT"
          className="p-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-white rounded-lg m-1"
          >
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
              className="h-20 w-20 mx-4 my-4"
            />
          </motion.div>
        </Tooltip>
        <Tooltip
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          content="React"
          className="p-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="bg-white rounded-lg m-1"
          >
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
              className="h-20 w-20 mx-4 my-4"
            />
          </motion.div>
        </Tooltip>
        <Tooltip
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          content="Node"
          className="p-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-white rounded-lg m-1"
          >
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
              className="h-20 w-20 mx-4 my-4"
            />
          </motion.div>
        </Tooltip>
        <Tooltip
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          content="Express"
          className="p-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="bg-white rounded-lg m-1"
          >
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/express/express.png"
              className="h-20 w-20 mx-4 my-4"
            />
          </motion.div>
        </Tooltip>
        <Tooltip
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          content="Next.Js"
          className="p-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="bg-white rounded-lg m-1"
          >
            <img
              src="https://raw.githubusercontent.com/github/explore/28b02bbc9ad9f7a503c43775aebeb515dc2da5fc/topics/nextjs/nextjs.png"
              className="h-20 w-20 mx-4 my-4"
            />
          </motion.div>
        </Tooltip>
        <Tooltip
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          content="TailwindCSS"
          className="p-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className="bg-white rounded-lg m-1"
          >
            <img
              src="https://raw.githubusercontent.com/github/explore/882462b8ecc337fd9c9b2572bc463a1cbc88fb6a/topics/tailwind/tailwind.png"
              className="h-20 w-20 mx-4 my-4"
            />
          </motion.div>
        </Tooltip>
        <Tooltip
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          content="Docker"
          className="p-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="bg-white rounded-lg m-1"
          >
            <img
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png"
              className="h-20 w-20 mx-4 my-4"
            />
          </motion.div>
        </Tooltip>
        <Tooltip
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
          content="Jest"
          className="p-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
            className="bg-white rounded-lg m-1"
          >
            <img
              src="/62a765b6bd73a4af5c5d4fbb.png"
              className="h-20 w-20 mx-4 my-4"
            />
          </motion.div>
        </Tooltip>
      </div>
    </div>
  );
});

export default Stack;
