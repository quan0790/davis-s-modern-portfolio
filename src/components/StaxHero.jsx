import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Briefcase, Github, Linkedin, Mail } from "lucide-react";
import { XIcon } from "@/components/XIcon";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import heroVisual from "@/assets/hero-visual.png";

const AnimatedText = ({ text, delay = 0 }) => {
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i + delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      style={{ display: "inline-block" }} // Fix for whitespaces
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} style={{ display: "inline-block" }}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export function StaxHero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const personalInfo = {
    tagline: "Building digital products, brands, and experiences",
    resumeUrl: "/assets/DAVIS%20KIBET%20KIPSOI%20cv%20%20full%20stack.pdf"
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/davies-dev404", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/davies-kibet-342363237", icon: Linkedin },
    { name: "Twitter", url: "https://x.com/Quantito1", icon: XIcon },
    { name: "Email", url: "mailto:kipsoikibet2@gmail.com", icon: Mail },
  ];

  return (
    <section ref={heroRef} className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/assets/hero-bg-web-dev.png')",
            y: heroY 
          }}
        />
        <div className="absolute inset-0 bg-white/90 dark:bg-black/80" /> {/* Adjusted overlay for better text contrast */}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Available for opportunities
                </span>
              </motion.div>

              <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 leading-tight text-stax-black dark:text-white">
                <AnimatedText text="Hi, I'm Davis —" />
                <br />
                <span className="text-primary">
                  <AnimatedText text="Software Engineer" delay={0.3} />
                </span>
                <br />
                <AnimatedText text="& Full-Stack Dev" delay={0.6} />
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-stax-medium-gray text-lg md:text-xl max-w-xl mb-8 font-serif leading-relaxed"
              >
                {personalInfo.tagline}. I craft elegant digital solutions with
                modern technologies, turning complex ideas into seamless user
                experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12 flex-wrap"
              >
                <Button size="lg" asChild className="rounded-full font-bold uppercase tracking-wider h-14 px-8 bg-primary hover:bg-stax-black text-white shadow-lg shadow-primary/25">
                  <Link to="/contact">
                    <span className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      Hire Me
                    </span>
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="rounded-full font-bold uppercase tracking-wider h-14 px-8 border-2 hover:bg-stax-light-gray">
                  <a
                    href={personalInfo.resumeUrl}
                    download
                    className="flex items-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    Download CV
                  </a>
                </Button>
                <Button variant="ghost" size="lg" asChild className="rounded-full font-bold uppercase tracking-wider h-14 px-8 hover:bg-transparent hover:text-primary">
                  <Link to="/projects">
                    <span className="flex items-center gap-2">
                      View Projects
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="flex items-center gap-4 flex-wrap"
              >
                <span className="text-sm text-stax-medium-gray font-medium">Find me on</span>
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-stax-light-gray text-stax-medium-gray hover:text-primary hover:border-primary transition-all shadow-sm"
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
            
            {/* Visual Element */}
            <div className="order-1 lg:order-2 relative hidden lg:block perspective-1000">
               <motion.div
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, delay: 0.5 }}
                 className="relative"
               >
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-stax-dark-gray/20 dark:border-white/10 group transform hover:scale-[1.02] transition-transform duration-500">
                    <img 
                        src={heroVisual} 
                        alt="Portfolio Preview" 
                        className="w-full h-auto object-cover"
                    />
                </div>
               </motion.div>
            </div>
        </div>
      </div>
        
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-subtle">
           <div className="w-[1px] h-16 bg-stax-medium-gray/30 mx-auto"></div>
      </div>
    </section>
  );
}
