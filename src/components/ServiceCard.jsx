import { motion } from "framer-motion";




export function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -12, scale: 1.02 }}
      className="group glass rounded-xl p-6 card-shadow hover:glow transition-all duration-300 card-tilt"
    >
      {/* Icon */}
      <motion.div 
        className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6"
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className="w-7 h-7 text-primary-foreground" />
      </motion.div>

      {/* Content */}
      <h3 className="font-display font-bold text-lg text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <motion.li
            key={feature}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="text-sm text-muted-foreground flex items-center gap-2"
          >
            <motion.span 
              className="w-1.5 h-1.5 rounded-full bg-primary"
              whileHover={{ scale: 1.5 }}
            />
            {feature}
          </motion.li>
        ))}
      </ul>
    </motion.article>
  );
}
