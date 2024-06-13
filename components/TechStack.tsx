import techStack from "@/constants/techStack";
import Image from "next/image";

const TechStack = () => {
  return (
    <section className="my-16 flex gap-5 items-center justify-between border p-5 bg-white bg-opacity-10 backdrop-blur-3xl rounded-lg">
      {techStack.map((img) => (
        <a key={img.id} href={img.href} target="_blank">
          <Image src={img.img} alt={img.title} height={54} width={54} />
        </a>
      ))}
    </section>
  );
};

export default TechStack;
