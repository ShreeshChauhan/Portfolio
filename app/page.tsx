import Preloader from "@/components/Preloader";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import FeaturedWork from "@/components/FeaturedWork";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <main>
        <Nav />
        <Hero />
        <Marquee />
        <FeaturedWork />
        <Experience />
        <Skills />
        <Footer />
      </main>
    </>
  );
}