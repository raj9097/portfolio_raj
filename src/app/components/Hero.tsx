import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/Raj.png";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <img
              src={profileImage}
              alt="Raj Raushan Kumar"
              className="w-48 h-48 rounded-full mx-auto object-cover shadow-xl border-4 border-white"
            />
          </motion.div>

          <h1 className="mb-6">
            Hi, I'm <span className="text-blue-600">Raj Raushan Kumar</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            A passionate Computer Science student and full-stack developer 
            specializing in Java, Python, and modern web technologies. 
            I build innovative solutions in IoT, machine learning, and web development.
          </p>

          <div className="flex gap-4 justify-center mb-8">
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/raj9097"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/raj-raushan-kumar-raj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:rajraushankumar749@gmail.com"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}