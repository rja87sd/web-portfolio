import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="">
      <Header />
      <h1>Hello, World!</h1>
      <Hero />
      <Footer />
    </main>
  );
}
