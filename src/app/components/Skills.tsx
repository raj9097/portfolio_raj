import { motion } from "motion/react";
import { Code, Database, Terminal } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Programming Languages",
    items: ["Java", "Python", "JavaScript", "C", "C++"],
  },
  {
    icon: Terminal,
    title: "Web Development",
    items: ["React.js", "Node.js", "Express.js", "Spring Boot", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Databases & Tools",
    items: ["MongoDB", "MySQL", "Git", "Postman", "Maven"],
  },
  {
    icon: Terminal,
    title: "Mobile Application Development",
    items: ["Android Studio", "Java", "XML", "Firebase"],
  },
  {
    icon: Code,
    title: "Machine Learning",
    items: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    icon: Terminal,
    title: "Internet of Things (IoT)",
    items: ["Raspberry Pi", "Arduino", "Sensors", "Firebase"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,_rgba(59,130,246,0.16),_transparent_24%),radial-gradient(circle_at_15%_80%,_rgba(234,179,8,0.1),_transparent_22%),linear-gradient(180deg,_rgba(2,6,23,1),_rgba(15,23,42,0.98))]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center text-2xl sm:text-3xl">Skills & Expertise</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-7 text-slate-300 sm:mb-12 sm:text-base">
            Proficient in modern technologies and frameworks for building scalable applications.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 text-center shadow-[0_20px_70px_rgba(15,23,42,0.35)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:bg-white/8"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-400/10 sm:h-16 sm:w-16">
                    <Icon className="h-7 w-7 text-cyan-300 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="mb-4 text-lg sm:text-xl">{skill.title}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-sm text-slate-300 sm:text-base">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
