import Button from "./Button";

interface ProjectProps {
  title: string;
  desc: string;
  img: string;
}

const Project = ({ title, desc, img }: ProjectProps) => {
  return (
    <article className="flex gap-5 mb-10">
      <div>
        <img src={img} alt={title} className="rounded-lg" />
      </div>
      <div className="flex flex-col gap-3 max-w-3xl">
        <h3>{title}</h3>
        <p className="border p-3 rounded-lg bg-white bg-opacity-10 backdrop-blur-3xl">
          {desc}
        </p>
        <Button label="Live Demo" className="w-36 h-12 font-normal" />
      </div>
    </article>
  );
};

export default Project;
