import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Writing } from "@/components/sections/Writing";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Experience />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
