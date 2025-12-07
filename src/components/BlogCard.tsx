import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link to={`/blog/${post.slug}`}>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -8, scale: 1.02 }}
        className="group glass rounded-xl p-6 card-shadow hover:glow transition-all duration-300 cursor-pointer h-full"
      >
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.1 }}
              className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>
          <motion.span 
            className="flex items-center gap-1 text-primary"
            whileHover={{ x: 4 }}
          >
            Read more
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </motion.span>
        </div>
      </motion.article>
    </Link>
  );
}
