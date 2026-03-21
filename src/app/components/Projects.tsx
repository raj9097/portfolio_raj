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
import multiModalImg from "@/assets/multi_model.png";
import DeliverX from "@/assets/deliverx.png";
import Trivani from "@/assets/trivani.png";

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
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website built with React and Tailwind CSS to showcase projects, skills, and experience. Features smooth scrolling and interactive UI components.",
    image: portImg,
    tags: ["JavaScript", "React", "Tailwind CSS", "HTML", "CSS"],
    github: "https://github.com/raj9097/Personal-Portfolio-Website",
    demo: "https://github.com/raj9097/Personal-Portfolio-Website/blob/main/README.md",
  },
  {
    title: "Task Manager",
    description:
      "A full-stack MERN application for managing tasks with user authentication, role-based access control, and a modern UI.",
    image: taskImg,
    tags: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS", "Authentication", "JWT"],
    github: "https://github.com/raj9097/Task_Manager",
    demo: "#",
  },
  {
    title: "Multi-Modal Prompt Refinement System",
    description:
      "A system that accepts text, images, documents, or any combination and refines them into a standardized, validated, AI-ready prompt format suitable for downstream AI processing. This project emphasizes design thinking, validation, and reliability when working with Large Language Models (LLMs).",
    image: multiModalImg,
    tags: ["Python", "Streamlit", "Pillow", "PyPDF2", "pytesseract", "Pydantic"],
    github: "https://github.com/raj9097/Multi-Modal-Prompt-Refinement-System",
    demo: "https://github.com/raj9097/Multi-Modal-Prompt-Refinement-System/blob/main/README.md",
  },
  {
    title: "DeliverX",
    description:
      "A real-time delivery tracking system built with Node.js, Express, Socket.IO, and MongoDB that enables live tracking of delivery status and location for customers and drivers.",
    image: DeliverX,
    tags: ["React", "JavaScript", "Node.js", "Express", "Socket.IO", "MongoDB"],
    github: "https://github.com/raj9097/DeliverX",
    demo: "https://github.com/raj9097/DeliverX/blob/main/README.md",
  },
  {
    title: "Trivani Jewelers",
    description:
      "A modern jewelry e-commerce platform designed for seamless browsing and purchasing of premium jewelry. Built with a responsive UI, secure authentication, and optimized product management, it allows users to explore collections, view detailed product information, and enjoy a smooth shopping experience.",
    image: Trivani,
    tags: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "E-commerce"],
    github: "https://github.com/raj9097/trevani_jwellers",
    demo: "https://github.com/raj9097/trevani_jwellers",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-center text-2xl sm:text-3xl">Featured Projects</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-7 text-slate-600 sm:mb-12 sm:text-base">
            Here are some of my recent projects that showcase my skills in web
            development and design.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-xl">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover sm:h-52"
                  />
                  <div className="flex flex-grow flex-col p-5 sm:p-6">
                    <h3 className="mb-2 text-lg sm:text-xl">{project.title}</h3>
                    <p className="mb-4 flex-grow text-sm leading-7 text-slate-600 sm:text-base">
                      {project.description}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700 sm:text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild className="w-full sm:w-auto">
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
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
