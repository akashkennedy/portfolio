"use client";

import TypeIt from "typeit-react";
import Button from "@/components/Button";
import SocialSidebar from "@/components/SocialSidebar";

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
        <div className="space-y-3">
          <h1>
            A Front End <span className="text-secondary">Developer</span>
          </h1>
          <p className="text-base">
            A Self Taught Front End developer with Great Experience with Latest
            Web Technologies.Specialized in React Js and Tailwind CSS with
            writing Robust and Maintainable Code using Typescript.
          </p>
        </div>
        <div className="space-x-3">
          <Button label="Resume" />
          <Button
            label="Contact"
            className="border bg-white bg-opacity-10 backdrop-blur-3xl"
          />
        </div>
        <SocialSidebar />
      </div>
    </main>
  );
};

export default Home;
