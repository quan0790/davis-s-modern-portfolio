import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { StaxHero } from "@/components/StaxHero";
import { StaxSection } from "@/components/StaxSection";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const featuredServices = services.slice(0, 3);

  return (
    <Layout>
      <StaxHero />

      {/* Intro Section - "Totally Customizable" style */}
      <StaxSection background="light" className="text-center" width="content">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="font-display font-bold text-5xl md:text-6xl text-stax-black dark:text-white mb-4 leading-none">
                Totally <br /> Customizable
            </h2>
            <h3 className="font-sans font-normal text-2xl md:text-3xl text-stax-medium-gray dark:text-gray-300 leading-tight mb-8">
               Modern web development just got easier with <strong className="text-stax-black dark:text-white">DAVIES.DEV</strong>
            </h3>
            <p className="font-serif text-lg text-stax-medium-gray dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                I provide complete control over your entire web presence. From global fonts and colors to custom headers and layouts. The possibilities are truly endless when you have a dedicated Full Stack Developer.
            </p>
        </motion.div>
      </StaxSection>

      {/* Services / "Blocks" Section */}
      <StaxSection background="accent">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative -mt-32 z-20">
             {featuredServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
        </div>
      </StaxSection>

      {/* Featured Projects */}
      <StaxSection background="white">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <h6 className="font-sans font-bold uppercase tracking-widest text-stax-medium-gray dark:text-gray-400 mb-2">Portfolio</h6>
                <h2 className="font-display font-bold text-5xl text-stax-black dark:text-white">Featured Projects</h2>
            </div>
            <Button variant="outline" size="lg" asChild className="hidden md:flex rounded-full font-bold uppercase tracking-wider">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </div>

        <div className="mt-12 text-center md:hidden">
             <Button variant="outline" size="lg" asChild className="rounded-full font-bold uppercase tracking-wider">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
        </div>
      </StaxSection>

      {/* "Get Stacking" CTA Section */}
      <StaxSection background="white" className="border-t border-border">
         <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-5xl md:text-6xl text-stax-black mb-6">
                Let's Build <strong className="text-primary">Something Amazing</strong>
            </h2>
            <p className="font-serif text-lg text-stax-medium-gray mb-10 leading-relaxed">
                Have a project in mind? I'd love to hear about it. Whether it's a new application, a website redesign, or technical consulting, I'm here to help you achieve your digital goals.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
                <Button asChild className="rounded-full font-bold uppercase tracking-wider px-8 py-6 bg-primary hover:bg-stax-black text-white transition-all duration-300 shadow-md">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                
                 <Button asChild variant="outline" className="rounded-full font-bold uppercase tracking-wider px-8 py-6 border-2 border-stax-light-gray text-stax-medium-gray hover:text-primary hover:border-primary">
                  <a href="https://wa.me/254790264792" target="_blank" rel="noopener noreferrer">
                    WhatsApp Me
                  </a>
                </Button>
            </div>
         </div>
      </StaxSection>
    </Layout>
  );
}
