// Credit to ChatGPT for assistance and code comments.
"use client"; // Indicates that this component uses client-side rendering

import Image from "next/image"; // Importing Image component from Next.js for optimized image loading
import styles from "./Hero.module.css"; // Importing CSS module for styling
import "../globals.css"; // Importing global CSS styles

// Functional component named Hero
export default function Hero() {
  return (
    // Container div with styling from Hero.module.css
    <div className={styles.hero}>
      {/* Text container with styling from Hero.module.css */}
      <div className={styles.text}>
        {/* Heading with global neon text styling and additional classes for margin and size */}
        <h1 className="my-4 neon-text text-5xl">Hello, World!</h1>
        {/* Paragraph with text content */}
        <p>
          Welcome to my portfolio! I am Ryan Arnold, a passionate developer
          beginning in Front-end Development, with some knowledge of Back-end
          Development. I have a background in Computer Forensics, and I love
          building creative and efficient solutions for complex problems. You
          can view some of my projects below, or click on the About link to view
          relevant skills and experience, or contact me.
        </p>
      </div>
      {/* Image component from Next.js with styling, source URL, alt text, and dimensions */}
      <Image
        className={styles.image}
        src="/me.png"
        alt="Description of image"
        width={400}
        height={300}
      />
    </div>
  );
}
