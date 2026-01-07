import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Github, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.currentTarget,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully!");
        e.currentTarget.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">Get In Touch</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="mb-4">Let's Connect</h3>
              <p className="text-slate-600 mb-6">
                I'm always open to discussing new projects, internship
                opportunities, or collaborations.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:rajraushankumar749@gmail.com"
                  className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  rajraushankumar749@gmail.com
                </a>

                <a
                  href="https://github.com/raj9097"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  github.com/raj9097
                </a>

                <a
                  href="https://www.linkedin.com/in/raj-raushan-kumar-raj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  linkedin.com/in/raj-raushan-kumar-raj
                </a>

                <div className="flex items-center gap-3 text-slate-600">
                  <span className="w-5 h-5">📱</span>
                  +91 7667364120
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
              />

              <Input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
              />

              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
              />

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
