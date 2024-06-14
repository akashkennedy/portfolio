import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex border bg-white bg-opacity-10 backdrop-blur-3xl h-16 rounded-t-3xl items-center justify-center gap-12 md:hidden lg:hidden">
      <div>
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
    </footer>
  );
};

export default Footer;
