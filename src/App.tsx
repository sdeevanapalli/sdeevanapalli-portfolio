import { lazy, Suspense } from "react";
import Hero from "./components/Hero";
import LoadingScreen from "./components/LoadingScreen";
import { Analytics } from "@vercel/analytics/react";

const Projects = lazy(() => import("./components/Projects"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <div className="relative">
      <LoadingScreen />
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black" />
      <div className="relative z-10">
        <section id="home"><Hero /></section>
        <Suspense fallback={<div className="min-h-[120px]" />}>
          <section id="projects"><Projects /></section>
          <section id="about"><About /></section>
          <section id="contact"><Contact /></section>
        </Suspense>
      </div>
      <Analytics />
    </div>
  );
}

export default App;
