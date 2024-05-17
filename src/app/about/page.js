// pages/about.js

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "./components/Section";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "../globals.css";
import styles from "./About.module.css";

export default function About() {
  return (
    <main className={`cyberpunk-bg ${styles.mainContainer}`}>
      <Header />
      <div className={styles.contentContainer}>
        <Section title="About Me">
          <p className="text-lg text-gray-700 mb-4">
            Welcome to my portfolio! I am [Your Name], a passionate developer
            with expertise in [Your Skills]. I love building creative and
            efficient solutions for complex problems.
          </p>
        </Section>
        <Skills />
        <Experience />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
