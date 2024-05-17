import React from "react";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.title}>Skills</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}>Skill 1: Description</li>
        <li className={styles.listItem}>Skill 2: Description</li>
        <li className={styles.listItem}>Skill 3: Description</li>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );
}
