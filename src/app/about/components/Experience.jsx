import React from "react";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={styles.experienceSection}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.experienceItem}>
        <h3 className={styles.jobTitle}>Job Title at Company</h3>
        <p className={styles.date}>Dates of Employment</p>
        <p className={styles.description}>
          Brief description of your role and responsibilities.
        </p>
      </div>
      {/* Add more experiences as needed */}
    </section>
  );
}
