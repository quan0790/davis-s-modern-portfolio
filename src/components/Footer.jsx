import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { XIcon } from "./XIcon";

const socialLinks = [
  { icon: Github, href: "https://github.com/davies-dev404", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/davies-kibet-342363237?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com/Quantito1", label: "X (formerly Twitter)" },
  { icon: Mail, href: "mailto:informjengaweb@gmail.com", label: "Email" },
];

const footerLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/services", label: "Services" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src="/assets/logo.png" alt="Davies.dev" className="h-10 w-auto object-contain" />
              <span className="font-display text-xl font-bold tracking-tight">&lt;davies.dev/&gt;</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Building digital experiences with clean code and modern technologies.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <Button key={link.label} variant="ghost" size="icon" asChild>
                  <a 
                    href={link.href} 
                    target={link.href.startsWith("mailto") ? undefined : "_blank"} 
                    rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"} 
                    aria-label={link.label}
                  >
                    <link.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-foreground">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:informjengaweb@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                informjengaweb@gmail.com
              </a>
              <a
                href="tel:+254790264792"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                +254790264792
              </a>
            </div>
            <Button variant="hero" size="sm" asChild>
              <a
                href="https://wa.me/254790264792"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Me
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Davis Kibet Kipsoi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
