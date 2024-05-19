// Credit to ChatGPT for assistance and code comments.
import ProjectCard from "./ProjectCard"; // Importing ProjectCard component
import styles from "./Projects.module.css"; // Importing CSS module for styling

// Array of project data
const projects = [
  {
    imageSrc: "/5eLookup.png",
    title: "5e Spell Lookup",
    summary: "A simple search engine for D&D 5e spells using dndapi.",
    link: "https://rja87sd.github.io/5e-Lookup/",
  },
  {
    imageSrc: "/WeatherApp.png",
    title: "Simple Weather App",
    summary:
      "An app to look up weather forecasts based on city or zip code using weatherbit's API.",
    link: "https://rja87sd.github.io/simple-weather-app/",
  },
  {
    imageSrc: "/LFG.png",
    title: "Looking For Gamers",
    summary:
      "My first capstone project. It uses local storage to simulate posts being made to the page. Future updates may include usage of Firebase to implement actual post capability.",
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
