import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useRef } from "react";



export function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="
        group relative bg-card/30 backdrop-blur-xl rounded-xl overflow-hidden 
        border border-white/10 shadow-xl card-tilt transition-all duration-300
        hover:shadow-primary/40 hover:shadow-2xl
      "
    >
      {/* Image with parallax */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />

        {/* Nice gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" />

        {/* Hover Overlay */}
        <motion.div
          className="
            absolute inset-0 bg-black/60 backdrop-blur-md 
            flex items-center justify-center gap-6 rounded-xl
            opacity-0 group-hover:opacity-100 
            transition-opacity duration-300
          "
        >
          {/* GitHub Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.2 }}
            className="hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
          >
            <Button variant="glass" size="icon" asChild className="btn-magnetic">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
          </motion.div>

          {/* Demo Icon */}
          {project.demo && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.25, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.2 }}
              className="hover:drop-shadow-[0_0_10px_rgba(0,200,255,0.5)]"
            >
              <Button variant="glass" size="icon" asChild className="btn-magnetic">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-6 w-6" />
                </a>
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.05 }}
              whileHover={{ scale: 1.1, y: -3 }}
              className="
                px-2 py-1 text-xs font-medium 
                bg-primary/10 text-primary rounded-md 
                shadow-sm hover:shadow-primary/30 transition
              "
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
