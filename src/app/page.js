import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import HowToBuy from "@/components/HowToBuy/HowToBuy";
import Roadmap from "@/components/Roadmap/Roadmap";
import Tokenomics from "@/components/Tokenomics/Tokenomics";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero/>
      <About />
      <Tokenomics/>
      <Roadmap/>
      <HowToBuy />
      <Footer/>
    </main>
  )
}
