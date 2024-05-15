import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ProjectContainer from "./components/Projects";

export default function Home() {
  return (
    <main className="">
      <Header />
      <h1 className="mx-4">Hello, World!</h1>
      <Hero />
      <ProjectContainer />
      <Footer />
    </main>
  );
}
