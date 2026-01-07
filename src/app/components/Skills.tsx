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
    // Mobile application Development 
    icon: Terminal,
    title: "Mobile Application Development",
    items: ["Android Studio", "Java", "XML","Firebase"],
  },
  {
    // Machine Learning 
    icon: Code,
    title: "Machine Learning",
    items: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  },
  //IoT
  {
    icon: Terminal,
    title: "Internet of Things (IoT)",
    items: ["Raspberry Pi", "Arduino", "Sensors", "Firebase"],
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">Skills & Expertise</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks for building scalable applications.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="mb-4">{skill.title}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-slate-600">
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