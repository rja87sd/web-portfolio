// Credit to ChatGPT for assistance and code comments.
import styles from "./Section.module.css"; // Importing CSS module for styling

// Functional component named Section, accepting title and children as props
export default function Section({ title, children }) {
  return (
    // Section element with styling from Section.module.css
    <section className={styles.section}>
      {/* Heading with styling from Section.module.css, displaying the title prop */}
      <h2 className={styles.title}>{title}</h2>
      {/* Rendering children elements inside the section */}
      {children}
    </section>
  );
}
