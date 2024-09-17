import { Header } from "@/components/Header";
import About from "@/pages/About";
import Contacts from "@/pages/Contacts";
import Footer from "@/pages/Footer";
import Hero from "@/pages/Hero";
import Projects from "@/pages/Projects";
import Skill from "@/pages/Skill";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}
