import { MessageCircle } from "lucide-react";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <a
        href="https://wa.me/917667364120"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-medium text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30 sm:bottom-6 sm:right-6 sm:text-base"
      >
        <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
        <span>Let's connect on WhatsApp</span>
      </a>
    </div>
  );
}
