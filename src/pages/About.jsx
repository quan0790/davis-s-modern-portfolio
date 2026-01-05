import { motion, useScroll, useTransform } from "framer-motion"; 
import { Download, MapPin, GraduationCap, Film, Plane, ChefHat, Music, Book, Gamepad2 } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillBar } from "@/components/SkillBar";
import { skills, techStack } from "@/data/skills";

// ✅ Keep CV in public/assets for Vercel
const cvFile = "/assets/DAVIS%20KIBET%20KIPSOI%20cv%20%20full%20stack.pdf";

// ✅ Original profile image import from src/assets
import profileAvatar from "/assets/kibetprofess.png";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 1, 0.6]);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-24 hero-gradient" ref={containerRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Image */}
            <motion.div
              className="relative"
              style={{ y }}
            >
              <div className="relative w-full max-w-md mx-auto">
                <motion.div 
                  className="rounded-2xl overflow-hidden glass card-shadow"
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.img
                    src={profileAvatar}
                    alt="Davis Kibet Kipsoi"
                    fetchPriority="high"
                    className="w-full h-auto object-contain"
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
                I am a passionate Full-Stack Developer specializing in the MERN stack with a strong background in ICT support and digital systems. I build scalable, high-performance web applications by combining clean frontend design with robust backend architecture.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                With experience in building web applications, integrating APIs, and managing databases, I focus on delivering solutions that are not only functional but also secure and reliable. My technical background has honed my problem-solving and debugging skills, ensuring I write efficient, maintainable code.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Beyond coding, I am an enthusiastic learner who stays up-to-date with emerging technologies. I enjoy contributing to open-source projects and collaborating with teams to turn innovative ideas into reality.
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
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Expertise"
            title="Skills & Technologies"
            description="Technologies I've been working with recently"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Frontend", data: skills.filter(s => s.category === "Frontend") },
              { title: "Backend", data: skills.filter(s => s.category === "Backend") },
              { title: "Databases", data: skills.filter(s => s.category === "Databases") },
              { title: "Tools & Deployment", data: skills.filter(s => s.category === "Tools") }
            ].map((section, idx) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="space-y-6"
              >
                <h3 className="font-display font-bold text-2xl border-b pb-2">{section.title}</h3>
                <div className="space-y-4">
                  {section.data.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="py-12 md:py-24 bg-card overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Lifestyle"
            title="Beyond the Code"
            description="What keeps me inspired and balanced when I'm away from the keyboard."
          />

            {/* Interests Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[
                { icon: Film, label: "Movies", desc: "Investigative,Sci-Fi & Cinema" },
                { icon: Plane, label: "Travelling", desc: "Exploring Cultures &Foods" },
                { icon: ChefHat, label: "Cooking", desc: "Culinary Experiments" },
                { icon: Music, label: "Music", desc: " R&B,Afro-beats & Jazz" },
                { icon: Book, label: "Reading", desc: "Books & Blogs" },
                { icon: Gamepad2, label: "Gaming", desc: "PC & Mobile Games" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.05)" }}
                  className="p-6 rounded-xl border border-border bg-background/50 hover:border-primary/50 transition-colors"
                >
                  <item.icon className="h-8 w-8 text-primary mb-3" />
                  <h4 className="font-semibold text-foreground">{item.label}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
        </div>
      </section>
    </Layout>
  );
}
