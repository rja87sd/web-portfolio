// pages/about.js

import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import '../globals.css'

export default function About() {
  return (
    <main className="cyberpunk-bg">
      <Header />
      <section className="my-8">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to my portfolio! I am [Your Name], a passionate developer with
          expertise in [Your Skills]. I love building creative and efficient
          solutions for complex problems.
        </p>
      </section>
      <section className="my-8">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <ul className="list-disc list-inside">
          <li>Skill 1: Description</li>
          <li>Skill 2: Description</li>
          <li>Skill 3: Description</li>
          {/* Add more skills as needed */}
        </ul>
      </section>
      <section className="my-8">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold">Job Title at Company</h3>
          <p className="text-gray-600">Dates of Employment</p>
          <p className="text-gray-700">
            Brief description of your role and responsibilities.
          </p>
        </div>
        {/* Add more experiences as needed */}
      </section>
      <section className="my-8">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-4">
          You can find me on these platforms:
        </p>
        <ul className="list-none">
          <li>
            <Link
              href="https://github.com/your-username"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/your-username/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </section>
      <Footer />
    </main>
  );
}
