import { motion } from "motion/react";
import { Briefcase, Award, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";

const experiences = [
  {
    type: "work",
    title: "Backend Developer Intern",
    organization: "Bluestock Finotech",
    period: "Sept 2025 – Oct 2025",
    points: [
      "Developed and optimized backend features using Java, implementing clean, modular code and following OOP principles",
      "Collaborated with the development team to debug issues, write testable code, and support feature enhancements",
      "Gained hands-on experience with real-world SDLC practices and agile development methodologies",

    ],
    
    icon: Briefcase,
  },
];

const certifications = [
  {
    title: "Computer Networks",
    organization: "NPTEL Online Certification",
    icon: Award,
    link: "https://drive.google.com/file/d/1K0OmbEN7AWdel6h4PEJiGey4Q9zaLgsU/view?usp=sharing", // Add your certificate link here
  },
  {
    title: "Internet of Things (IoT)",
    organization: "NPTEL Online Certification",
    icon: Award,
    link: "https://drive.google.com/file/d/1uqW7MOvLznTnsFm9tyzftbzW62lSx0IO/view?usp=sharing", // Add your certificate link here
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">Experience</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            My professional journey and achievements
          </p>

          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="mb-1">{exp.title}</h3>
                            <p className="text-blue-600">{exp.organization}</p>
                          </div>
                          <span className="text-sm text-slate-500 whitespace-nowrap ml-4">
                            {exp.period}
                          </span>
                        </div>
                        <ul className="space-y-2 mt-4">
                          {exp.points.map((point, i) => (
                            <li key={i} className="text-slate-600 flex gap-2">
                              <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div>
            <h3 className="text-center mb-8">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon className="w-6 h-6 text-green-600" />
                          </div>
                          <div className="flex-grow">
                            <h4 className="mb-1">{cert.title}</h4>
                            <p className="text-sm text-slate-600">{cert.organization}</p>
                          </div>
                          <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                        </div>
                      </Card>
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}