// page.js

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectContainer from "./components/Projects";
import "./globals.css";

export default function Home() {
  return (
    <main className="cyberpunk-bg">
      <Header />
      <Hero />
      <ProjectContainer />
      <Footer />
    </main>
  );
}
