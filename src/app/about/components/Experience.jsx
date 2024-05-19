// Credit to ChatGPT for assistance and code comments.
import styles from "./Experience.module.css"; // Importing CSS module for styling

// Functional component named Experience
export default function Experience() {
  return (
    // Section element with styling from Experience.module.css
    <section className={styles.experienceSection}>
      {/* Heading with styling from Experience.module.css */}
      <h2 className={styles.title}>Experience</h2>
      {/* Container for an individual experience item with styling from Experience.module.css */}
      <div className={styles.experienceItem}>
        {/* Job title with styling from Experience.module.css */}
        <h3 className={styles.jobTitle}>Employment</h3>
        {/* Dates of employment with styling from Experience.module.css */}
        <p className={styles.date}>Dates of Employment</p>
        {/* Description of the role with styling from Experience.module.css */}
        <p className={styles.description}>
          No relevant work experience as yet.
        </p>
      </div>
      <div className={styles.experienceItem}>
        {/* Job title with styling from Experience.module.css */}
        <h3 className={styles.jobTitle}>Education</h3>
        {/* Dates of employment with styling from Experience.module.css */}
        <p className={styles.date}>2017 - 2019</p>
        {/* Description of the role with styling from Experience.module.css */}
        <p className={styles.description}>
          AAS with a focus in Network Security and Computer Forensics
        </p>
        <p className={styles.date}>2023 - Present</p>
        {/* Description of the role with styling from Experience.module.css */}
        <p className={styles.description}>
          CodeX Academy web development bootcamp.
        </p>
      </div>
      {/* Add more experiences as needed */}
    </section>
  );
}
