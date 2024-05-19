// Credit to ChatGPT for assistance and code comments.
import ProjectCard from "./ProjectCard"; // Importing ProjectCard component
import styles from "./Projects.module.css"; // Importing CSS module for styling

// Array of project data
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

// Functional component named ProjectContainer
export default function ProjectContainer() {
  return (
    // Container div with styling from Projects.module.css
    <div className={styles.container}>
      {/* Heading with styling from Projects.module.css */}
      <h2 className={styles.title}>My Projects</h2>
      {/* Grid container with styling from Projects.module.css */}
      <div className={styles.grid}>
        {/* Mapping over the projects array to render ProjectCard components */}
        {projects.map((project, index) => (
          <ProjectCard
            key={index} // Unique key for each project
            imageSrc={project.imageSrc} // Image source URL
            title={project.title} // Project title
            summary={project.summary} // Project summary
            link={project.link} // Project link
          />
        ))}
      </div>
    </div>
  );
}
