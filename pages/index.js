import React, { useSate, useEffect, useRef } from "react";
import Sobre from "../components/Sobre";
import Stack from "../components/Stack";
import Projetos from "../components/Projetos";
import Experiencia from "../components/Experiencia";
import Contato from "../components/Contato";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const RefSobre = useRef(null);
  const RefStack = useRef(null);
  const Refprojetos = useRef(null);
  const RefExperiencia = useRef(null);
  const RefContato = useRef(null);
  const RefArr = useRef([
    RefSobre,
    RefStack,
    Refprojetos,
    RefExperiencia,
    RefContato,
  ]);

  return (
    <main className="dark:bg-black bg-[#87CEEB] w-full h-full">
      <Navbar resultRef={RefArr} />
      <Sobre ref={RefSobre} />
      <Stack ref={RefStack} />
      <Projetos ref={Refprojetos} />
      <Experiencia ref={RefExperiencia} />
      <Contato ref={RefContato} />
      <Footer />
    </main>
  );
};

export default Home;
