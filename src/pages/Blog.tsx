import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/blog";

export default function Blog() {
  return (
    <Layout>
      <section className="py-24 hero-gradient min-h-screen">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Blog"
            title="Articles & Insights"
            description="Thoughts on software development, best practices, and the latest technologies."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {blogPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
}
