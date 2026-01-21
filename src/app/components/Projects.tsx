import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import parmacyImg from "@/assets/paramacy.png";
import homeImg from "@/assets/smart_home.png";
import agroImg from "@/assets/agro.png";
import portImg from "@/assets/portfolio.png";
import taskImg from "@/assets/task.png";

const projects = [
  {
    title: "Smart Home Automation System",
    description:
      "IoT-based home automation solution to control lights, fans, and security devices remotely via Android app. Integrated Raspberry Pi with sensors and Firebase Realtime Database.",
    image: homeImg,
    tags: ["Java", "Python", "IoT", "MySQL", "Firebase"],
    github: "https://github.com/raj9097/Smart-Home-Automation-System",
    demo: "",
  },
  {
    title: "AgroSence",
    description:
      "Platform integrating IoT sensors and machine learning models for real-time crop monitoring and predictive analytics in agriculture. Enables data-driven decisions for improved crop yields.",
    image: agroImg,
    tags: ["Java", "Python", "Machine Learning", "IoT"],
    github: "https://github.com/raj9097/AgroSence",
    demo: "https://github.com/raj9097/AgroSence/blob/main/README.md",
  },
  {
    title: "Pharmacy Dispensing Management System",
    description:
      "Django-based pharmacy management system with role-based access. Manages inventory, prescriptions, billing, and patient records. Improved workflow efficiency by ~40%.",
    image: parmacyImg,
    tags: ["Python", "Django", "REST API", "Tailwind CSS", "SQL"],
    github: "https://github.com/raj9097/Pharmacy_Management_System",
    demo: "https://github.com/raj9097/Pharmacy_Management_System/blob/main/README.md",
  },
  {
    title : "Personal Portfolio Website",
    description :
      "A responsive personal portfolio website built with React and Tailwind CSS to showcase projects, skills, and experience. Features smooth scrolling and interactive UI components.",
    image :portImg,
    tags : ["JavaScript", "React", "Tailwind CSS", "HTML", "CSS"],
    github : "https://github.com/raj9097/Personal-Portfolio-Website",
    demo:"https://github.com/raj9097/Personal-Portfolio-Website/blob/main/README.md" ,
  },
  {
    title : "Task Manager",
    
    description : "A full-stack MERN application for managing tasks with user authentication, role-based access control, and a modern UI.",
    image : taskImg, 
    tags : ["JavaScript", "React", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS","Authentication","JWT"],
    github : "https://github.com/raj9097/Task_Manager",
    demo:"#",
  }
  ,
  {
    title : "Multi-Modal Prompt Refinement System",
    description : "A system that accepts text, images, documents, or any combination and refines them into a standardized, validated, AI-ready prompt format suitable for downstream AI processing. This project emphasizes design thinking, validation, and reliability when working with Large Language Models (LLMs).",
    image : taskImg,
    tags : ["Python", "Streamlit" ,"Pillow", "PyPDF2", "pytesseract", "Pydantic"],
    github : "https://github.com/raj9097/Multi-Modal-Prompt-Refinement-System",
    demo:"#",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">Featured Projects</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web
            development and design.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-shadow">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="mb-2">{project.title}</h3>
                    <p className="text-slate-600 mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}