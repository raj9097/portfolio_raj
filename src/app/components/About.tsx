import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import rajImg from "@/assets/me_1.png";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(59,130,246,0.16),_transparent_24%),radial-gradient(circle_at_80%_80%,_rgba(16,185,129,0.12),_transparent_24%),linear-gradient(180deg,_rgba(15,23,42,0.96),_rgba(2,6,23,1))]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-10 text-center text-2xl sm:mb-12 sm:text-3xl">About Me</h2>

          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <ImageWithFallback
                src={rajImg}
                alt="Workspace"
                className="h-72 w-full rounded-[1.75rem] border border-white/10 object-cover shadow-[0_24px_90px_rgba(15,23,42,0.45)] sm:h-80 md:h-[400px]"
              />
            </div>

            <div className="space-y-5 rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:space-y-6 sm:p-8">
              <p className="text-sm leading-7 text-slate-300 sm:text-base">
                I&apos;m Raj Raushan Kumar, a freelance developer and Computer Science
                undergraduate at Parul Institute of Technology, currently pursuing
                my B.Tech with a strong interest in building practical digital products.
              </p>
              <p className="text-sm leading-7 text-slate-300 sm:text-base">
                My experience spans full-stack web development, Java backend work,
                IoT systems, and machine learning projects. During my internship at
                Bluestock Finotech, I developed and optimized backend features using
                Java, wrote modular and testable code, and collaborated on debugging
                and feature improvements in a real SDLC environment.
              </p>
              <p className="text-sm leading-7 text-slate-300 sm:text-base">
                I work with technologies such as Java, Python, JavaScript, React,
                Node.js, Express, Spring Boot, MongoDB, and MySQL. I also enjoy
                building solution-focused projects. Recently, I built DeliverX
                and Trivani, alongside work in smart home automation, agriculture
                analytics, and pharmacy management systems, while strengthening my
                foundation in DSA, DBMS, OOP, operating systems, and system design.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
