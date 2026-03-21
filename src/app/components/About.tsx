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
                I'm a Computer Science student at Parul Institute of Technology,
                passionate about building innovative solutions that solve real-world
                problems. With hands-on experience in full-stack development, IoT,
                and machine learning, I enjoy working on projects that make a difference.
              </p>
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                During my internship at Bluestock Finotech, I developed and optimized
                backend features using Java, implementing clean, modular code following
                OOP principles. I collaborated with development teams to debug issues
                and enhance features, gaining valuable real-world SDLC experience.
              </p>
              <p className="text-sm leading-7 text-slate-600 sm:text-base">
                I'm constantly learning and exploring new technologies, with a strong
                foundation in Data Structures and Algorithms, DBMS, and System Design.
                My goal is to create impactful software solutions while continuously
                growing as a developer.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
