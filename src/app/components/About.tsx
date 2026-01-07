import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="src\assets\raj.jpg"
                alt="Workspace"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div>
              <p className="text-slate-600 mb-6">
                I'm a Computer Science student at Parul Institute of Technology, 
                passionate about building innovative solutions that solve real-world 
                problems. With hands-on experience in full-stack development, IoT, 
                and machine learning, I enjoy working on projects that make a difference.
              </p>
              <p className="text-slate-600 mb-6">
                During my internship at Bluestock Finotech, I developed and optimized 
                backend features using Java, implementing clean, modular code following 
                OOP principles. I collaborated with development teams to debug issues 
                and enhance features, gaining valuable real-world SDLC experience.
              </p>
              <p className="text-slate-600">
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