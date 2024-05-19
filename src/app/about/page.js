// Credit to ChatGPT for assistance and code comments.
// Importing necessary libraries and components
import React from "react"; // Importing React library
import Header from "../components/Header"; // Importing Header component
import Footer from "../components/Footer"; // Importing Footer component
import Section from "./components/Section"; // Importing Section component
import Skills from "./components/Skills"; // Importing Skills component
import Experience from "./components/Experience"; // Importing Experience component
import Contact from "./components/Contact"; // Importing Contact component
import "../globals.css"; // Importing global CSS styles
import styles from "./About.module.css"; // Importing CSS module for styling

// Functional component named About
export default function About() {
  return (
    // Main container with a background class and custom styles
    <main className={`cyberpunk-bg ${styles.mainContainer}`}>
      {/* Header component */}
      <Header />
      {/* Content container with custom styles */}
      <div className={styles.contentContainer}>
        {/* Section component with a title and content */}
        <Section title="About Me">
          {/* Paragraph with text content */}
          <p className="text-lg text-gray-400 mb-4">
            Welcome to my portfolio! I am Ryan Arnold, a passionate developer
            beginning in Front-end Development, with some knowledge of Back-end
            Development. I have a background in computer forensics, and I love
            building creative and efficient solutions for complex problems.
          </p>
        </Section>
        {/* Skills component */}
        <Skills />
        {/* Experience component */}
        <Experience />
        {/* Contact component */}
        <Contact />
      </div>
      {/* Footer component */}
      <Footer />
    </main>
  );
}
