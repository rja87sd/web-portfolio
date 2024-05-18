import React from "react"; // Importing React library
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
        <h3 className={styles.jobTitle}>Job Title at Company</h3>
        {/* Dates of employment with styling from Experience.module.css */}
        <p className={styles.date}>Dates of Employment</p>
        {/* Description of the role with styling from Experience.module.css */}
        <p className={styles.description}>
          Brief description of your role and responsibilities.
        </p>
      </div>
      {/* Add more experiences as needed */}
    </section>
  );
}
