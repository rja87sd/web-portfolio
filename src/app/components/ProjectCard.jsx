// components/ProjectCard.js

import Image from "next/image";
import ButtonLink from "./ButtonLink";

const ProjectCard = ({ imageSrc, title, summary, link }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-4 bg-white relative h-96 flex flex-col">
      <div className="relative w-full h-40">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="mt-1 text-gray-600">{summary}</p>
      <ButtonLink href={link}>View Project</ButtonLink>
    </div>
  );
};

export default ProjectCard;
