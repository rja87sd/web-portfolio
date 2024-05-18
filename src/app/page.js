// Importing necessary components and styles
import Header from "./components/Header"; // Importing Header component
import Footer from "./components/Footer"; // Importing Footer component
import Hero from "./components/Hero"; // Importing Hero component
import ProjectContainer from "./components/Projects"; // Importing ProjectContainer component
import "./globals.css"; // Importing global CSS styles

// Functional component named Home
export default function Home() {
  return (
    // Main container with a background class
    <main className="cyberpunk-bg">
      {/* Header component */}
      <Header />
      {/* Hero component */}
      <Hero />
      {/* ProjectContainer component */}
      <ProjectContainer />
      {/* Footer component */}
      <Footer />
    </main>
  );
}
