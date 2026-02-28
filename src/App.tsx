import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/AnimatedBackground";
import LoadingScreen from "./components/LoadingScreen";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="relative">
      <LoadingScreen />
      <AnimatedBackground />
      <div className="relative z-10">
        <section id="home"><Hero /></section>
        <section id="projects"><Projects /></section>
        <section id="about"><About /></section>
        <section id="contact"><Contact /></section>
      </div>
      <Analytics />
    </div>
  );
}

export default App;
