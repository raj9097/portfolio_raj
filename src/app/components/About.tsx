import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import rajImg from "@/assets/me_1.png";

export function About() {
  return (
    <section id="about" className="bg-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
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
                className="h-72 w-full rounded-lg object-cover shadow-lg sm:h-80 md:h-[400px]"
              />
            </div>

            <div className="space-y-5 sm:space-y-6">
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                I'm Raj Raushan Kumar, a freelance developer and Computer Science
                undergraduate at Parul Institute of Technology, currently pursuing
                my B.Tech with a strong interest in building practical digital products.
              </p>
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                My experience spans full-stack web development, Java backend work,
                IoT systems, and machine learning projects. During my internship at
                Bluestock Finotech, I developed and optimized backend features using
                Java, wrote modular and testable code, and collaborated on debugging
                and feature improvements in a real SDLC environment.
              </p>
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
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
