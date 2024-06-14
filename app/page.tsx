"use client";

import TypeIt from "typeit-react";
import Button from "@/components/Button";
import SocialSidebar from "@/components/SocialSidebar";
import Image from "next/image";
import Project from "@/components/Project";
import projectsData from "@/constants/projects";
import TechStack from "@/components/TechStack";
import MobileFooter from "@/components/MobileFooter";
import { Progress } from "scroll-up-react";

const Home = () => {
  return (
    <main className="mx-5 md:mx-10 lg:mx-24">
      <Progress color2="#7127BA" size="3px" />
      <div className="my-20 md:my-28 md:mr-24 lg:min-h-screen lg:my-0 flex items-start justify-center flex-col max-w-3xl gap-5">
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
            className="absolute top-11 pointer-events-none md:right-20 md:top-1 lg:right-28 lg:top-2"
          />
          <h1 className="text-5xl my-3 lg:block">
            A Front End <span className="text-secondary">Developer</span>
          </h1>

          <p className="py-3 leading-loose">
            Aspiring self taught Frontend developer with a strong foundation in
            React.js, Next Js, Typescript and Tailwind CSS. Eager to apply my
            skills and passion for creating user-friendly web solutions.
            Committed to learning and growing in the field, with a focus on
            delivering high-quality work that meets client needs.
          </p>
        </div>

        <div className="space-y-5 w-full lg:space-x-3 lg:w-fit">
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
          href={project.href}
        />
      ))}
      <h2 className="text-center mt-20">Tech Stack</h2>
      <TechStack />
      <MobileFooter />
    </main>
  );
};

export default Home;
