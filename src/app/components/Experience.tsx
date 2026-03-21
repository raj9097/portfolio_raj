import { motion } from "motion/react";
import { Briefcase, Award, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";

const experiences = [
  {
    type: "work",
    title: "Backend Developer Intern",
    organization: "Bluestock Finotech",
    period: "Sept 2025 - Oct 2025",
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
    link: "https://drive.google.com/file/d/1K0OmbEN7AWdel6h4PEJiGey4Q9zaLgsU/view?usp=sharing",
  },
  {
    title: "Internet of Things (IoT)",
    organization: "NPTEL Online Certification",
    icon: Award,
    link: "https://drive.google.com/file/d/1uqW7MOvLznTnsFm9tyzftbzW62lSx0IO/view?usp=sharing",
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-white px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center text-2xl sm:text-3xl">Experience</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-7 text-slate-600 sm:mb-12 sm:text-base">
            My professional journey and achievements
          </p>

          <div className="mb-14 space-y-8 sm:mb-16">
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
                  <Card className="p-5 transition-shadow hover:shadow-lg sm:p-6">
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <div className="shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h3 className="mb-1 text-lg sm:text-xl">{exp.title}</h3>
                            <p className="text-blue-600">{exp.organization}</p>
                          </div>
                          <span className="text-sm text-slate-500 sm:ml-4 sm:whitespace-nowrap">
                            {exp.period}
                          </span>
                        </div>
                        <ul className="mt-4 space-y-2">
                          {exp.points.map((point, i) => (
                            <li key={i} className="flex gap-2 text-sm leading-7 text-slate-600 sm:text-base">
                              <span className="mt-1.5 shrink-0 text-blue-600">&bull;</span>
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
            <h3 className="mb-8 text-center text-xl sm:text-2xl">Certifications</h3>
            <div className="grid gap-6 md:grid-cols-2">
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
                      <Card className="group cursor-pointer p-5 transition-shadow hover:shadow-lg sm:p-6">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100">
                            <Icon className="h-6 w-6 text-green-600" />
                          </div>
                          <div className="flex-grow">
                            <h4 className="mb-1">{cert.title}</h4>
                            <p className="text-sm text-slate-600">{cert.organization}</p>
                          </div>
                          <ExternalLink className="h-5 w-5 shrink-0 text-slate-400 transition-colors group-hover:text-blue-600" />
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
