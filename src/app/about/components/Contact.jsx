import React from "react";
import Link from "next/link";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Get in Touch</h2>
      <p className={styles.text}>You can find me on these platforms:</p>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link
            href="https://github.com/your-username"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            href="https://www.linkedin.com/in/your-username/"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </li>
      </ul>
    </section>
  );
}
