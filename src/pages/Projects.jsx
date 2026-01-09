import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const categories = ["All", "Full Stack", "Backend", "Frontend"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <section className="py-12 md:py-24 hero-gradient">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Portfolio"
            title="My Projects"
            description="Explore my recent work and see how I bring ideas to life through code."
            align="center"
          />

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 border-2",
                  activeCategory === category
                    ? "bg-primary border-primary text-white shadow-md scale-105"
                    : "bg-white border-stax-light-gray text-stax-medium-gray hover:border-primary hover:text-primary dark:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:text-primary dark:hover:border-primary"
                )}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-muted-foreground py-12"
            >
              No projects found in this category.
            </motion.p>
          )}
        </div>
      </section>
    </Layout>
  );
}
