import Image from "next/image"; // Importing Image component from Next.js for optimized image loading
import ButtonLink from "./ButtonLink"; // Importing ButtonLink component
import styles from "./ProjectCard.module.css"; // Importing CSS module for styling

// Functional component named ProjectCard
export default function ProjectCard({ imageSrc, title, summary, link }) {
  return (
    // Main container div with styling from ProjectCard.module.css
    <div className={styles.card}>
      {/* Wrapper div for the image with styling from ProjectCard.module.css */}
      <div className={styles.imageWrapper}>
        {/* Image component from Next.js with source URL, alt text, layout fill, and cover fit */}
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className={styles.image}
        />
      </div>
      {/* Title of the project with styling from ProjectCard.module.css */}
      <h3 className={styles.title}>{title}</h3>
      {/* Summary of the project with styling from ProjectCard.module.css */}
      <p className={styles.summary}>{summary}</p>
      {/* Wrapper div for the ButtonLink component with styling from ProjectCard.module.css */}
      <div className={styles.buttonLink}>
        <ButtonLink href={link}>View Project</ButtonLink>
      </div>
    </div>
  );
}
