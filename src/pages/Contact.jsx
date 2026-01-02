import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "informjengaweb@gmal.com",
    href: "mailto:informjengaweb@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254790264792",
    href: "tel:+254790264792",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
    href: null,
  },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/davies-dev404", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/daviskipsoi", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/daviskipsoi", label: "Twitter" },
  { icon: MessageCircle, href: "https://wa.me/254790264792?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you", label: "WhatsApp" },
];

export default function Contact() {
  return (
    <Layout>
      <section className="py-12 md:py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Contact"
            title="Get in Touch"
            description="Have a project in mind? Let's talk about how I can help."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass rounded-xl p-6 card-shadow"
              >
                <h3 className="font-display font-bold text-lg mb-4">Connect With Me</h3>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <Button key={link.label} variant="ghost" size="icon" asChild>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                      >
                        <link.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass rounded-xl p-6 card-shadow"
              >
                <h3 className="font-display font-bold text-lg mb-2">Prefer WhatsApp?</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  For quick responses, feel free to reach out on WhatsApp.
                </p>
                <Button variant="hero" className="w-full" asChild>
                  <a
                    href="https://wa.me/254790264792?text=Hello%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
