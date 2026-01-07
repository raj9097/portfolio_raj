import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, Github, Linkedin, Phone, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState, useRef, useEffect } from "react";

export function Contact() {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Initialize EmailJS with your Public Key
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        alert("Message sent successfully! I'll get back to you soon.");
        formRef.current.reset();
      }
    } catch (error: any) {
      console.error("EmailJS Full Error Object:", error);
      // This will help you identify if it's a 401 (Auth) or 404 (Service ID) error
      alert(`Failed to send: ${error?.text || "Check console for details"}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-50/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Have a question or want to work together? Drop me a message!
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* LEFT: CONTACT INFO */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-slate-600 mb-8">
                  I'm currently looking for new opportunities. My inbox is always open. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>

              <div className="space-y-6">
                <ContactItem 
                  href="mailto:rajraushankumar749@gmail.com" 
                  icon={<Mail className="w-5 h-5" />} 
                  text="rajraushankumar749@gmail.com" 
                />
                <ContactItem 
                  href="https://github.com/raj9097" 
                  icon={<Github className="w-5 h-5" />} 
                  text="github.com/raj9097" 
                />
                <ContactItem 
                  href="https://www.linkedin.com/in/raj-raushan-kumar-raj/" 
                  icon={<Linkedin className="w-5 h-5" />} 
                  text="linkedin.com/raj-raushan-kumar-raj" 
                />
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="p-3 bg-white rounded-lg shadow-sm border border-slate-100 text-blue-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-medium">+91 7667364120</span>
                </div>
              </div>
            </div>

            {/* RIGHT: CONTACT FORM */}
            <div className="md:col-span-3">
              <form 
                ref={formRef} 
                onSubmit={handleSubmit} 
                className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 ml-1">Name</label>
                    <Input 
                      type="text" 
                      name="from_name" // Match this with {{from_name}} in EmailJS template
                      placeholder="John Doe" 
                      required 
                      className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 ml-1">Email</label>
                    <Input 
                      type="email" 
                      name="from_email" // Match this with {{from_email}} in EmailJS template
                      placeholder="john@example.com" 
                      required 
                      className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-all" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 ml-1">Message</label>
                  <Textarea 
                    name="message" // Match this with {{message}} in EmailJS template
                    placeholder="Your message here..." 
                    rows={5} 
                    required 
                    className="bg-slate-50 border-slate-200 focus:bg-white transition-all resize-none" 
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg font-semibold gap-2 bg-blue-600 hover:bg-blue-700 transition-colors" 
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
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

// Sub-component for contact links
function ContactItem({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group flex items-center gap-4 text-slate-700 hover:text-blue-600 transition-all"
    >
      <div className="p-3 bg-white rounded-lg shadow-sm border border-slate-100 group-hover:border-blue-200 group-hover:bg-blue-50 text-blue-600 transition-all">
        {icon}
      </div>
      <span className="font-medium break-all">{text}</span>
    </a>
  );
}