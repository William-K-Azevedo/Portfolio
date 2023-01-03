import React, { forwardRef } from "react";
import userData from "../constants/data";
import { motion } from "framer-motion";

const Experiencia = forwardRef((props, ref) => {
  Experiencia.displayName = "Experiencia";
  return (
    <div ref={ref} className="min-h-screen flex flex-col text-gray-700">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-center bg-red-500 text-6xl rounded-md p-3 font-bold text-gray-200 inline-block">
          Experiências
        </h1>
      </motion.div>

      <h1 className="text-2xl text-center m-4 pt-10">
        {" "}
        Estas são minhas experiências profissionais até o momento:
      </h1>
      <div className="grid grid-cols-1 max-w-xl mx-auto py-16">
        {userData.experience.map((exp, idx) => (
          <div key={idx}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: [0, 1, 1], x: [0, 100, 0] }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                times: [0, 0.5, 1],
              }}
            >
              <ExperienceCard
                key={idx}
                title={exp.title}
                desc={exp.desc}
                year={exp.year}
                company={exp.company}
                companyLink={exp.companyLink}
              />
            </motion.div>

            {idx === userData.experience.length - 1 ? null : (
              <div className="divider-container flex flex-col items-center -mt-2">
                <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                </div>
                <div className="w-1 h-24 bg-gray-300 dark:bg-gray-500 rounded-full -mt-2"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-[#F1F1F1] dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-700 font-bold dark:text-gray-800">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <a href={companyLink} className="text-blue-600">
        {company}
      </a>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
    </div>
  );
};

export default Experiencia;
