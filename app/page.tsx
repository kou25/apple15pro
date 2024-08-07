import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

const Highlights = dynamic(() => import("@/components/Highlights"), {
  ssr: false
});

const Model = dynamic(() => import("@/components/Model"), {
  ssr: false
});

const Features = dynamic(() => import("@/components/Features"), {
  ssr: false
});

const Chip = dynamic(() => import("@/components/Chip"), {
  ssr: false
});
export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Chip />
      <Footer />
    </main>
  );
}
