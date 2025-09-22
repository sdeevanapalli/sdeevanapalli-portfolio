import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <div>
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="projects"><Projects /></section>
      <section id="about"><About /></section>
      <section id="contact"><Contact /></section>
      <Analytics />
    </div>
  );
}

export default App;
