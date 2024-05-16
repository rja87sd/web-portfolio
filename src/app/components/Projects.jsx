// components/Projects.jsx

import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

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

export default function ProjectContainer() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.grid}>
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

