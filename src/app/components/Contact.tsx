import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Github, Linkedin, Phone, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      if (result.status === 200) {
        alert("Message sent successfully! I'll get back to you soon.");
        formRef.current.reset();
      }
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-slate-50/50 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Get In Touch
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-blue-600"></div>
            <p className="mx-auto max-w-2xl text-base text-slate-600 sm:text-lg">
              Have a question or want to work together? Drop me a message!
            </p>
          </div>

          <div className="grid items-start gap-10 md:grid-cols-5 md:gap-12">
            <div className="space-y-8 md:col-span-2">
              <div>
                <h3 className="mb-6 text-2xl font-semibold">Let's Connect</h3>
                <p className="mb-8 text-sm leading-7 text-slate-600 sm:text-base">
                  I'm currently looking for new opportunities. My inbox is always
                  open. Whether you have a question or just want to say hi, I'll
                  try my best to get back to you!
                </p>
              </div>

              <div className="space-y-6">
                <ContactItem
                  href="mailto:rajraushankumar749@gmail.com"
                  icon={<Mail className="h-5 w-5" />}
                  text="rajraushankumar749@gmail.com"
                />
                <ContactItem
                  href="https://github.com/raj9097"
                  icon={<Github className="h-5 w-5" />}
                  text="github.com/raj9097"
                />
                <ContactItem
                  href="https://www.linkedin.com/in/raj-raushan-kumar-raj/"
                  icon={<Linkedin className="h-5 w-5" />}
                  text="linkedin.com/raj-raushan-kumar-raj"
                />
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="rounded-lg border border-slate-100 bg-white p-3 text-blue-600 shadow-sm">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="break-all font-medium">+91 7667364120</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl shadow-slate-200/50 sm:p-8"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="ml-1 text-sm font-medium text-slate-700">
                      Name
                    </label>
                    <Input
                      type="text"
                      name="from_name"
                      placeholder="John Doe"
                      required
                      className="h-12 border-slate-200 bg-slate-50 transition-all focus:bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="ml-1 text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="from_email"
                      placeholder="john@example.com"
                      required
                      className="h-12 border-slate-200 bg-slate-50 transition-all focus:bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="ml-1 text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Your message here..."
                    rows={5}
                    required
                    className="resize-none border-slate-200 bg-slate-50 transition-all focus:bg-white"
                  />
                </div>

                <Button
                  type="submit"
                  className="h-12 w-full gap-2 bg-blue-600 text-base font-semibold transition-colors hover:bg-blue-700 sm:text-lg"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactItem({
  href,
  icon,
  text,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 text-slate-700 transition-all hover:text-blue-600 sm:gap-4"
    >
      <div className="rounded-lg border border-slate-100 bg-white p-3 text-blue-600 shadow-sm transition-all group-hover:border-blue-200 group-hover:bg-blue-50">
        {icon}
      </div>
      <span className="break-all text-sm font-medium sm:text-base">{text}</span>
    </a>
  );
}
