import { Github, Linkedin, Twitter } from "lucide-react";

const SocialSidebar = () => {
  return (
    <aside className="hidden absolute border bg-white bg-opacity-10 backdrop-blur-3xl min-w-20 min-h-96 right-0 rounded-l-3xl  flex-col items-center justify-center gap-12 md:flex lg:flex">
      <div className="cursor-pointer">
        <a href="https://www.github.com/akashkennedy" target="_blank">
          <Github />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/akashkennedy" target="_blank">
          <Linkedin />
        </a>
      </div>
      <div>
        <a href="https://www.twitter.com/akash_kennedy1" target="_blank">
          <Twitter />
        </a>
      </div>
    </aside>
  );
};

export default SocialSidebar;
