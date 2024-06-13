"use client";

import TypeIt from "typeit-react";
import Button from "@/components/Button";
import SocialSidebar from "@/components/SocialSidebar";
import Image from "next/image";
import Project from "@/components/Project";
import projectsData from "@/constants/projects";
import TechStack from "@/components/TechStack";
import { Progress } from "scroll-up-react";

const Home = () => {
  return (
<<<<<<< Updated upstream
    <main className="mx-5 md:mx-10 lg:mx-24">
      <Progress color2="#7127BA" size="3px" />
      <div className="my-20 md:my-28 lg:min-h-screen lg:my-0 flex items-start justify-center flex-col max-w-3xl gap-5">
=======
    <main className="mx-5 lg:mx-24">
      <Progress color2="#7127BA" size="3px" />
      <div className="my-16 lg:min-h-screen my-0 flex items-start justify-center flex-col max-w-3xl gap-5">
>>>>>>> Stashed changes
        <h2 className="text-2xl">
          Hello I'm{" "}
          <span id="heading" className="text-secondary">
            <TypeIt>Akash Kennedy</TypeIt>
          </span>
        </h2>
        <div className="space-y-3 relative">
          <Image
            src="/ellipse.svg"
            height={200}
            width={350}
            alt="Ellipse"
<<<<<<< Updated upstream
            className="absolute top-11 md:right-20 md:top-1 lg:right-28 lg:top-2"
=======
            className="absolute top-11 lg:right-28 lg:top-2"
>>>>>>> Stashed changes
          />
          <h1 className="text-5xl my-3 lg:block">
            A Front End <span className="text-secondary">Developer</span>
          </h1>
<<<<<<< Updated upstream
          <p className="py-3 leading-loose">
=======
          <p>
>>>>>>> Stashed changes
            A Self Taught Front End developer with Great Experience in Latest
            Web Technologies.Specialized in React Js and Tailwind CSS with
            writing Robust and Maintainable Code using Typescript.
          </p>
        </div>
<<<<<<< Updated upstream
        <div className="space-y-5 w-full lg:space-x-3 lg:w-fit">
=======
        <div className="space-y-3 lg:space-x-3">
>>>>>>> Stashed changes
          <a href="/Akash-Kennedy.pdf" download={true} target="_blank">
            <Button label="Resume" className="w-full lg:w-48" />
          </a>
          <Button
            label="Contact"
            className="border bg-white bg-opacity-10 backdrop-blur-3xl w-full lg:w-48"
          />
        </div>
        <SocialSidebar />
      </div>
      <h2 className="text-center mb-16">Projects</h2>
      {projectsData.map((project) => (
        <Project
          title={project.title}
          desc={project.desc}
          img={project.img}
          key={project.id}
        />
      ))}
      <h2 className="text-center mt-20">Tech Stack</h2>
      <TechStack />
    </main>
  );
};

export default Home;
