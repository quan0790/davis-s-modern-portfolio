import { motion } from "framer-motion";



export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`space-y-4 mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {badge && (
        <motion.span 
          className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          {badge}
        </motion.span>
      )}
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-foreground"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p 
          className="text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
