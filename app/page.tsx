import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Domains from "./components/Domains";
import Engagement from "./components/Engagement";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Capabilities />
      <Domains />
      <Engagement />
      <Footer />
    </main>
  );
}
