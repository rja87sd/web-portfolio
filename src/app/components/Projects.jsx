// components/Projects.jsx

import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    imageSrc: "/5eLookup.png",
    title: "5e Spell Lookup",
    summary: "This is a brief summary of project one.",
    link: "https://rja87sd.github.io/5e-Lookup/",
  },
  {
    imageSrc: "/WeatherApp.png",
    title: "Simple Weather App",
    summary: "This is a brief summary of project two.",
    link: "https://rja87sd.github.io/simple-weather-app/",
  },
  {
    imageSrc: "/LFG.png",
    title: "Looking For Gamers",
    summary: "This is a brief summary of project three.",
    link: "https://rja87sd.github.io/capstone-level-1/",
  },
];

const ProjectContainer = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            summary={project.summary}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectContainer;
