import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="group relative glass rounded-xl overflow-hidden card-shadow card-tilt"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
        
        {/* Hover Overlay */}
        <motion.div 
          className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Button variant="glass" size="icon" asChild className="btn-magnetic">
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="glass" size="icon" asChild className="btn-magnetic">
              <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="View Demo">
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
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
        
        {/* Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
