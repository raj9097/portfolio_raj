import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/me.png";

export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-4xl text-center">
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
              className="mx-auto h-32 w-32 rounded-full border-4 border-white object-cover shadow-xl sm:h-40 sm:w-40 md:h-48 md:w-48"
            />
          </motion.div>

          <h1 className="mb-4 text-3xl leading-tight sm:mb-6 sm:text-4xl md:text-5xl">
            Hi, I'm <span className="text-blue-600">Raj Raushan Kumar</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg md:text-xl">
            A passionate Computer Science student and full-stack developer
            specializing in Java, Python, and modern web technologies. I build
            innovative solutions in IoT, machine learning, and web development.
          </p>

          <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/raj9097"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-slate-600 transition-colors hover:text-slate-900"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/raj-raushan-kumar-raj"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-slate-600 transition-colors hover:text-slate-900"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:rajraushankumar749@gmail.com"
              className="rounded-full p-2 text-slate-600 transition-colors hover:text-slate-900"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
