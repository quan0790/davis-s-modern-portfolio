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
      className="organic-block flex flex-col h-full hover:shadow-lg transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-lg border-b border-border">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
      </div>

      {/* Content */}
      {/* Content */}
      <h3 className="font-display font-bold text-2xl text-stax-black dark:text-white mb-3 transition-colors">
        {project.title}
      </h3>

      <p className="font-serif text-stax-medium-gray dark:text-gray-300 text-base mb-6 flex-grow transition-colors">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs font-bold uppercase tracking-wide bg-stax-accent-secondary text-stax-bg-dark rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 mt-auto">
        <Button variant="outline" size="sm" asChild className="flex-1 border-stax-medium-gray text-stax-medium-gray hover:bg-stax-accent hover:text-white hover:border-stax-accent rounded-full font-bold uppercase tracking-wider text-xs">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> Code
          </a>
        </Button>
        
        {project.demo && (
            <Button size="sm" asChild className="flex-1 bg-primary text-white hover:bg-stax-black rounded-full font-bold uppercase tracking-wider text-xs">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live
                </a>
            </Button>
        )}
      </div>
    </motion.article>
  );
}
