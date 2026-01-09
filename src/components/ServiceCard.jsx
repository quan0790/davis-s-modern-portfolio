import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="organic-block flex flex-col items-center text-center h-full hover:shadow-lg transition-shadow duration-300"
    >
      {/* Icon */}
      <div className="mb-6 transform transition-transform duration-300 hover:scale-110">
        <Icon className="w-12 h-12 text-primary" />
      </div>

      {/* Content */}
      <h3 className="font-display font-bold text-2xl text-stax-black dark:text-white mb-3 transition-colors">
        {service.title}
      </h3>
      
      <p className="font-serif text-stax-medium-gray dark:text-gray-300 text-base mb-6 transition-colors">
        {service.description}
      </p>

    <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="mt-auto border-2 border-stax-light-gray text-stax-medium-gray dark:text-gray-400 dark:border-gray-700 hover:text-primary hover:border-primary rounded-full font-bold uppercase tracking-wider text-xs">
              View Details
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-white dark:bg-stax-black border-none p-0 gap-0">
            {/* Header / Banner */}
            <div className="bg-primary/10 p-6 border-b border-primary/10 flex items-center gap-4">
                <div className="p-3 bg-white dark:bg-stax-black rounded-xl shadow-sm">
                   <Icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                   <DialogTitle className="font-display font-bold text-2xl text-stax-black dark:text-white mb-1">{service.title}</DialogTitle>
                   <DialogDescription className="font-serif text-stax-medium-gray dark:text-gray-300">
                        Comprehensive solutions tailored for you.
                   </DialogDescription>
                </div>
            </div>

            <div className="p-6 space-y-8">
                {/* Intro */}
                <div>
                    <p className="text-lg leading-relaxed font-serif text-stax-medium-gray dark:text-gray-300">
                        {service.longDescription || service.description}
                    </p>
                </div>

                 {/* Benefits */}
                 {service.benefits && (
                    <div>
                         <h4 className="font-bold text-sm uppercase tracking-wider text-stax-black mb-4 flex items-center gap-2">
                            <span className="w-1 h-4 bg-primary rounded-full"/> Key Benefits
                         </h4>
                         <ul className="grid sm:grid-cols-2 gap-3">
                            {service.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-stax-medium-gray">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                    {benefit}
                                </li>
                            ))}
                         </ul>
                    </div>
                 )}

                 {/* Technologies */}
                 {service.features && (
                    <div>
                         <h4 className="font-bold text-sm uppercase tracking-wider text-stax-black mb-4 flex items-center gap-2">
                             <span className="w-1 h-4 bg-primary rounded-full"/> Technologies
                         </h4>
                         <div className="flex flex-wrap gap-2">
                            {service.features.map((tech) => (
                                <span key={tech} className="px-3 py-1 bg-stax-light-gray/50 rounded-md text-xs font-bold text-stax-medium-gray border border-stax-light-gray">
                                    {tech}
                                </span>
                            ))}
                         </div>
                    </div>
                 )}
                 
                 {/* Process Steps (Simplified for Modal) */}
                 {service.process && (
                    <div className="bg-stax-light-gray/20 rounded-xl p-5 border border-stax-light-gray/50">
                        <h4 className="font-bold text-sm uppercase tracking-wider text-stax-black mb-4">Process Overview</h4>
                        <div className="space-y-3">
                             {service.process.map((step, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm">
                                    <span className="font-mono text-primary font-bold">0{i + 1}</span>
                                    <span className="text-stax-medium-gray">{step}</span>
                                </div>
                             ))}
                        </div>
                    </div>
                 )}

                 <div className="pt-4 flex justify-end">
                    <Button asChild className="rounded-full font-bold uppercase tracking-wider bg-primary hover:bg-stax-black text-white">
                        <Link to="/contact">Get a Quote</Link>
                    </Button>
                 </div>
            </div>

        </DialogContent>
    </Dialog>
    </motion.article>
  );
}
