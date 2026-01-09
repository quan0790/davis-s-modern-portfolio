import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { ThemeToggle } from "@/components/ThemeToggle";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/services", label: "Services" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-stax-black/95 backdrop-blur-sm border-b border-border transition-colors duration-300">
      <div className="w-full max-w-wide mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/assets/logo.png" alt="Davies.dev" className="h-12 w-auto object-contain transition-transform group-hover:scale-105" />
            <span className="font-display font-bold text-3xl tracking-tight text-stax-black dark:text-white group-hover:text-primary transition-colors">davies.dev/&gt;</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-bold uppercase tracking-wide transition-colors duration-300 font-sans",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-stax-dark-gray dark:text-white hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            <div className="hidden md:block">
              <Button asChild className="rounded-full font-bold uppercase tracking-wider px-6 py-6 bg-primary hover:bg-stax-black dark:hover:bg-white dark:hover:text-stax-black text-white transition-all duration-300 shadow-md hover:shadow-lg">
                <Link to="/contact">
                  Hire Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-stax-dark-gray dark:text-white hover:text-primary transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-stax-black border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-lg font-bold uppercase tracking-wide transition-all",
                    location.pathname === link.path
                      ? "text-primary bg-primary/5 pl-6"
                      : "text-stax-dark-gray dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-white/5 hover:pl-6"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Button asChild className="w-full rounded-full font-bold uppercase tracking-wider py-6 bg-primary hover:bg-stax-black dark:hover:bg-white dark:hover:text-stax-black text-white transition-all duration-300">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Hire Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
