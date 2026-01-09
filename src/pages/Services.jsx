import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { useEffect } from "react";



export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <Layout>
      {/* Hero */}
      {/* Hero */}
      <section className="py-20 lg:py-24 hero-gradient relative overflow-hidden flex flex-col justify-center min-h-[40vh]">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[80px] transform -translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] bg-repeat opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            badge="Services"
            title="What I Offer"
            description="Comprehensive software engineering services tailored to your needs."
            align="center"
          />
        </div>
      </section>

      {/* Detailed Services List */}
      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard key={service.id} service={service} index={index} />
                ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stax-black text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="font-display font-bold text-4xl mb-6">Ready to Start Your Project?</h2>
            <p className="font-serif text-lg text-white/80 max-w-2xl mx-auto mb-10">
                Let's collaborate to build something amazing. Contact me today to discuss your requirements.
            </p>
            <Button asChild size="lg" className="rounded-full font-bold uppercase tracking-wider bg-primary hover:bg-white hover:text-stax-black">
                <Link to="/contact">
                    Get a Quote
                </Link>
            </Button>
        </div>
      </section>
    </Layout>
  );
}
