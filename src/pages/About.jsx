import { motion, useScroll, useTransform } from "framer-motion"; 
import { Download, MapPin, GraduationCap } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillBar } from "@/components/SkillBar";
import { skills, techStack } from "@/data/skills";

// ✅ Keep CV in public/assets for Vercel
const cvFile = "/assets/DAVIS_KIBET_RESUME_updated.pdf";

// ✅ Original profile image import from src/assets
import profileAvatar from "/assets/profile.jpg";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 hero-gradient" ref={containerRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
              style={{ y }}
            >
              <div className="relative w-full max-w-md mx-auto">
                <motion.div 
                  className="aspect-square rounded-2xl overflow-hidden glass card-shadow"
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.img
                    src={profileAvatar}
                    alt="Davis Kibet Kipsoi"
                    className="w-full h-full object-cover"
                    style={{ opacity }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                About Me
              </span>
              <h1 className="text-4xl md:text-5xl font-bold">
                Davis Kibet <span className="gradient-text">Kipsoi</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Software Engineer & Full-Stack Developer
              </p>

              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Nairobi, Kenya
                </span>
                <span className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  BSc Information Science, Mount Kenya University
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                I am a passionate software engineer and self-taught developer, also an alumnus of the Power Learn Project. 
                I specialize in building web and mobile applications with clean, efficient, and scalable solutions using modern technologies.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and continuously learning to stay up-to-date with industry trends.
              </p>

              <div className="flex gap-4 flex-wrap">
                <Button variant="hero" size="lg" asChild>
                  <a href={cvFile} download="Davis_Kibet_CV.pdf">
                    <Download className="h-5 w-5" />
                    Download CV
                  </a>
                </Button>

                <Button variant="secondary" size="lg" asChild>
                  <a href={cvFile} target="_blank" rel="noopener noreferrer">
                    View CV
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Expertise"
            title="Skills & Technologies"
            description="Technologies I've been working with recently"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Skill Bars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-xl p-8 card-shadow"
            >
              <h3 className="font-display font-bold text-xl mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary rounded-lg cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
