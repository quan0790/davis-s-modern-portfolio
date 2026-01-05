import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding your requirements, goals, and project scope through detailed discussions.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Creating a comprehensive roadmap with timelines, milestones, and technical specifications.",
  },
  {
    step: "03",
    title: "Development",
    description: "Building your solution using best practices, with regular updates and iterations.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Testing, deployment, and handover with documentation and ongoing support.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Services"
            title="What I Offer"
            description="Comprehensive software engineering services tailored to your needs."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Process"
            title="How I Work"
            description="A streamlined process to ensure project success from start to finish."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -z-10" />
                )}

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-bg text-primary-foreground font-display font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="py-12 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-4">
                Why Choose Me
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Building Quality Software That <span className="gradient-text">Delivers Results</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                With a focus on clean code, modern practices, and user-centric design, 
                I deliver solutions that not only meet but exceed expectations.
              </p>

              <div className="space-y-4">
                {[
                  "Clean, maintainable, and well-documented code",
                  "Modern technologies and best practices",
                  "Clear communication throughout the project",
                  "On-time delivery with quality assurance",
                  "Post-launch support and maintenance",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 card-shadow"
            >
              <h3 className="font-display font-bold text-2xl mb-6">Ready to Start?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss your project and see how I can help bring your vision to life.
              </p>
              <div className="space-y-4">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="glass" size="lg" className="w-full" asChild>
                  <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer">
                    WhatsApp Me
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
