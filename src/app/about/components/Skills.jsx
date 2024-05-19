// Credit to ChatGPT for assistance and code comments.
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
        <li className={styles.listItem}>HTML: Novice</li>
        <li className={styles.listItem}>CSS: Novice</li>
        <li className={styles.listItem}>Bootstrap: Novice</li>
        <li className={styles.listItem}>JavaScript: Novice</li>
        <li className={styles.listItem}>Node.js: Novice</li>
        <li className={styles.listItem}>React: Novice</li>
        <li className={styles.listItem}>Next.js: Novice</li>
        <li className={styles.listItem}>Firebase: Entry-level</li>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );
}
