"use client";

import TypeIt from "typeit-react";
import Button from "@/components/Button";
import SocialSidebar from "@/components/SocialSidebar";
import Image from "next/image";
import Project from "@/components/Project";
import projectsData from "@/constants/projects";
import TechStack from "@/components/TechStack";

const Home = () => {
  return (
    <main className="mx-24">
      <div className="min-h-screen flex items-start justify-center flex-col max-w-3xl gap-5">
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
            className="absolute right-3"
          />
          <h1>
            A Front End <span className="text-secondary">Developer</span>
          </h1>
          <p className="text-base">
            A Self Taught Front End developer with Great Experience in Latest
            Web Technologies.Specialized in React Js and Tailwind CSS with
            writing Robust and Maintainable Code using Typescript.
          </p>
        </div>
        <div className="space-x-3">
          <a href="/Akash-Kennedy.pdf" download={true} target="_blank">
            <Button label="Resume" />
          </a>
          <Button
            label="Contact"
            className="border bg-white bg-opacity-10 backdrop-blur-3xl"
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
