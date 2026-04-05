import { motion } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/me.png";
import { Button } from "./ui/button";

const highlights = [
  "Full-stack apps",
  "IoT systems",
  "Machine learning",
  "Modern UI engineering",
];

const metrics = [
  { value: "10+", label: "Projects shipped" },
  { value: "Java", label: "Backend foundation" },
  { value: "React", label: "Frontend focus" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.2),_transparent_26%),radial-gradient(circle_at_80%_10%,_rgba(59,130,246,0.22),_transparent_24%),radial-gradient(circle_at_50%_90%,_rgba(251,191,36,0.1),_transparent_24%),linear-gradient(160deg,_#020617_0%,_#0f172a_52%,_#111827_100%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.14)_1px,transparent_1px)] [background-size:70px_70px]" />
      <div className="absolute left-[10%] top-28 h-52 w-52 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="absolute right-[12%] top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-amber-300/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mb-8 flex h-36 w-36 items-center justify-center rounded-[2rem] border border-white/15 bg-white/10 p-2 shadow-[0_24px_80px_rgba(15,23,42,0.45)] backdrop-blur md:h-44 md:w-44 md:rounded-[2.25rem]"
          >
            <img
              src={profileImage}
              alt="Raj Raushan Kumar"
              className="h-full w-full rounded-[1.5rem] object-cover md:rounded-[1.8rem]"
            />
          </motion.div>

          <div className="mb-6 inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm text-slate-200 backdrop-blur">
            Raj Raushan Kumar / Developer / Problem Solver
          </div>

          <h1 className="mx-auto mb-6 max-w-5xl text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Designing and building
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-emerald-300 bg-clip-text text-transparent">
              modern digital products that feel sharp and practical
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg md:text-xl">
            I&apos;m a Computer Science student and full-stack developer working
            across Java, Python, React, IoT, and machine learning. I build
            clean interfaces and reliable systems with a strong focus on real
            usability.
          </p>

          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-slate-200 backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              asChild
              className="w-full border-0 bg-white text-slate-950 shadow-lg shadow-cyan-500/10 hover:bg-slate-100 sm:w-auto"
            >
              <a href="#projects">View My Work</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="w-full border-white/20 bg-white/5 text-white backdrop-blur hover:bg-white/10 sm:w-auto"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="mx-auto mb-10 grid max-w-4xl gap-4 md:grid-cols-3">
            {metrics.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/8 px-6 py-5 text-left shadow-[0_20px_70px_rgba(15,23,42,0.3)] backdrop-blur-xl"
              >
                <p className="mb-1 text-2xl font-semibold text-white">{item.value}</p>
                <p className="text-sm text-slate-300">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/raj9097"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition-all hover:-translate-y-1 hover:bg-white/10 hover:text-white"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/raj-raushan-kumar-raj"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition-all hover:-translate-y-1 hover:bg-white/10 hover:text-white"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:rajraushankumar749@gmail.com"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition-all hover:-translate-y-1 hover:bg-white/10 hover:text-white"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
