import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, ChevronDown, Code, Server, Smartphone } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const featuredServices = services.slice(0, 3);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // ✅ PDF file path from public folder
  const cvFile = "/assets/DAVIS_KIBET_RESUME_updated.pdf";

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-[90vh] flex items-center justify-center hero-gradient relative overflow-hidden">
        
        {/* Background Parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -right-1/2 w-full h-full opacity-30"
            style={{ y: heroY }}
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full opacity-20"
          >
            <div className="w-full h-full bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl" />
          </motion.div>
        </div>

        <motion.div 
          className="container mx-auto px-4 relative z-10"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="max-w-4xl mx-auto text-center">

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <motion.span 
                className="inline-block px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-full"
                whileHover={{ scale: 1.05 }}
                animate={{ boxShadow: ["0 0 0 0 hsl(var(--primary) / 0.4)", "0 0 0 10px hsl(var(--primary) / 0)", "0 0 0 0 hsl(var(--primary) / 0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Available for freelance work
              </motion.span>
            </motion.div>

            {/* Title / Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Hi, I'm{" "}
              <motion.span 
                className="gradient-text inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Davis Kibet.Eng
              </motion.span>
              <br />
              <span className="text-foreground">Full Stack MERN Developer</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              I build high-performance, scalable web applications and create seamless digital experiences from frontend to backend.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="hero" size="xl" asChild className="btn-magnetic">
                  <Link to="/contact">
                    Hire Me
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>

              {/* ✅ Fixed CV download */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="hero" size="lg" asChild>
                  <a href={cvFile} download="Davis_Kibet_CV.pdf">
                    <Download className="h-5 w-5" />
                    Download CV
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="xl" asChild className="btn-magnetic">
                  <Link to="/projects">View Projects</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Floating Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-16 flex justify-center gap-8"
            >
              {[Code, Server, Smartphone].map((Icon, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center cursor-pointer animate-glow-pulse"
                >
                  <Icon className="h-6 w-6 text-primary" />
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="cursor-pointer"
            >
              <ChevronDown className="h-6 w-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Portfolio"
            title="Featured Projects"
            description="A selection of my recent work showcasing my expertise in full-stack development."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <Link to="/projects">
                View All Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Services"
            title="What I Do"
            description="Professional software engineering services to help you build and scale digital products."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{ 
            background: [
              "radial-gradient(circle at 0% 0%, hsl(var(--primary) / 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, hsl(var(--primary) / 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, hsl(var(--primary) / 0.2) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
            className="glass rounded-2xl p-12 text-center max-w-3xl mx-auto glow"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Let's Build Something <span className="gradient-text">Amazing</span>
            </motion.h2>

            <motion.p className="text-muted-foreground mb-8">
              Have a project in mind? I'd love to hear about it. Let's discuss how we can work together.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="hero" size="lg" asChild className="btn-magnetic">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="glass" size="lg" asChild className="btn-magnetic">
                  <a
                    href="https://wa.me/254790264792"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp Me
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
