import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Github, Linkedin, Loader2, Mail, Phone, Send } from "lucide-react";

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
    <section id="contact" className="relative overflow-hidden bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(59,130,246,0.18),_transparent_24%),radial-gradient(circle_at_80%_80%,_rgba(16,185,129,0.14),_transparent_24%),linear-gradient(180deg,_rgba(15,23,42,1),_rgba(2,6,23,1))]" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12 text-center sm:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Get In Touch
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-cyan-400"></div>
            <p className="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg">
              Have a question or want to work together? Drop me a message!
            </p>
          </div>

          <div className="grid items-start gap-10 md:grid-cols-5 md:gap-12">
            <div className="space-y-8 rounded-[2rem] border border-white/10 bg-white/6 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.35)] backdrop-blur-xl md:col-span-2">
              <div>
                <h3 className="mb-6 text-2xl font-semibold">Let&apos;s Connect</h3>
                <p className="mb-8 text-sm leading-7 text-slate-300 sm:text-base">
                  I&apos;m currently looking for new opportunities. My inbox is always
                  open. Whether you have a question or just want to say hi, I&apos;ll
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
                <div className="flex items-center gap-4 text-slate-200">
                  <div className="rounded-lg border border-white/10 bg-white/8 p-3 text-cyan-300 shadow-sm">
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
                className="space-y-5 rounded-[2rem] border border-white/10 bg-white/6 p-5 shadow-[0_20px_70px_rgba(15,23,42,0.35)] backdrop-blur-xl sm:p-8"
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label className="ml-1 text-sm font-medium text-slate-200">
                      Name
                    </label>
                    <Input
                      type="text"
                      name="from_name"
                      placeholder="John Doe"
                      required
                      className="h-12 border-white/10 bg-slate-950/60 text-white placeholder:text-slate-500 transition-all focus:border-cyan-400/40 focus:bg-slate-950"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="ml-1 text-sm font-medium text-slate-200">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="from_email"
                      placeholder="john@example.com"
                      required
                      className="h-12 border-white/10 bg-slate-950/60 text-white placeholder:text-slate-500 transition-all focus:border-cyan-400/40 focus:bg-slate-950"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="ml-1 text-sm font-medium text-slate-200">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Your message here..."
                    rows={5}
                    required
                    className="resize-none border-white/10 bg-slate-950/60 text-white placeholder:text-slate-500 transition-all focus:border-cyan-400/40 focus:bg-slate-950"
                  />
                </div>

                <Button
                  type="submit"
                  className="h-12 w-full gap-2 bg-white text-base font-semibold text-slate-950 transition-colors hover:bg-slate-100 sm:text-lg"
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
      className="group flex items-center gap-3 text-slate-200 transition-all hover:text-cyan-300 sm:gap-4"
    >
      <div className="rounded-lg border border-white/10 bg-white/8 p-3 text-cyan-300 shadow-sm transition-all group-hover:border-cyan-300/30 group-hover:bg-cyan-400/10">
        {icon}
      </div>
      <span className="break-all text-sm font-medium sm:text-base">{text}</span>
    </a>
  );
}
