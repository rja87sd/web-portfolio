// components/ProjectCard.jsx

import Image from "next/image";
import ButtonLink from "./ButtonLink";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ imageSrc, title, summary, link }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className={styles.image}
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.summary}>{summary}</p>
      <div className={styles.buttonLink}>
        <ButtonLink href={link}>View Project</ButtonLink>
      </div>
    </div>
  );
};
