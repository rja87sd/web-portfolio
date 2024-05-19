// Credit to ChatGPT for assistance and code comments.
import Link from "next/link"; // Importing Link component from Next.js for client-side navigation
import styles from "./Contact.module.css"; // Importing CSS module for styling

// Functional component named Contact
export default function Contact() {
  return (
    // Section element with styling from Contact.module.css
    <section className={styles.section}>
      {/* Heading with styling from Contact.module.css */}
      <h2 className={styles.title}>Get in Touch</h2>
      {/* Paragraph with styling from Contact.module.css */}
      <p className={styles.text}>You can find me on these platforms:</p>
      {/* Unordered list with styling from Contact.module.css */}
      <ul className={styles.list}>
        {/* List item with styling from Contact.module.css */}
        <li className={styles.listItem}>
          {/* Link to GitHub profile with styling and attributes for security */}
          <Link
            href="https://github.com/rja87sd"
            className={styles.link}
            target="_blank" // Opens link in a new tab
            rel="noopener noreferrer" // Security measure to prevent exploitation
          >
            GitHub
          </Link>
        </li>
        {/* List item with styling from Contact.module.css */}
        <li className={styles.listItem}>
          {/* Link to LinkedIn profile with styling and attributes for security */}
          <Link
            href="https://www.linkedin.com/in/ryan-arnold-3ab1b015b/"
            className={styles.link}
            target="_blank" // Opens link in a new tab
            rel="noopener noreferrer" // Security measure to prevent exploitation
          >
            LinkedIn
          </Link>
        </li>
      </ul>
    </section>
  );
}
