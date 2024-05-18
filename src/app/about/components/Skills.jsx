import React from "react"; // Importing React library
import styles from "./Skills.module.css"; // Importing CSS module for styling

// Functional component named Skills
export default function Skills() {
  return (
    // Section element with styling from Skills.module.css
    <section className={styles.skillsSection}>
      {/* Heading with styling from Skills.module.css */}
      <h2 className={styles.title}>Skills</h2>
      {/* Unordered list with styling from Skills.module.css */}
      <ul className={styles.list}>
        {/* List item with styling from Skills.module.css */}
        <li className={styles.listItem}>Skill 1: Description</li>
        <li className={styles.listItem}>Skill 2: Description</li>
        <li className={styles.listItem}>Skill 3: Description</li>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );
}
