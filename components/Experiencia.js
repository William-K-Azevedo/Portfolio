import React, { forwardRef } from "react";
import userData from "../constants/data";

const Experiencia = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="min-h-screen flex flex-col">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center bg-red-500 text-6xl rounded-md p-3 font-bold text-gray-200 inline-block">
          Experiências
        </h1>
      </div>
      <h1 className="text-2xl text-center m-4 pt-10">
        {" "}
        Estas são minhas experiências profissionais até o momento:
      </h1>
      <div className="grid grid-cols-1 max-w-xl mx-auto py-16">
        {userData.experience.map((exp, idx) => (
          <>
            <ExperienceCard
              key={idx}
              title={exp.title}
              desc={exp.desc}
              year={exp.year}
              company={exp.company}
              companyLink={exp.companyLink}
            />
            {idx === userData.experience.length - 1 ? null : (
              <div className="divider-container flex flex-col items-center -mt-2">
                <div className="w-4 h-4 bg-green-500 rounded-full relative z-10">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                </div>
                <div className="w-1 h-24 bg-gray-300 dark:bg-gray-500 rounded-full -mt-2"></div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
});

const ExperienceCard = ({ title, desc, year, company, companyLink }) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-[#F1F1F1] dark:bg-gray-800 z-10 mx-4">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800">
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
