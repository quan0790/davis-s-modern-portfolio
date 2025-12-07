import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    // Create mailto link as fallback (works without backend)
    const mailtoLink = `mailto:informjengaweb@gmail.com?subject=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    )}`;

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Open email client
    window.location.href = mailtoLink;

    setIsSuccess(true);
    toast({
      title: "Opening email client...",
      description: "Your message is ready to send. Thanks for reaching out!",
    });

    setIsSubmitting(false);
    
    // Reset success state after animation
    setTimeout(() => {
      setIsSuccess(false);
      (e.target as HTMLFormElement).reset();
    }, 2000);
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="glass rounded-xl p-8 card-shadow space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          className="space-y-2"
          whileFocus="focus"
          initial="blur"
        >
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <motion.div variants={inputVariants}>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              required
              className="bg-background/50 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
            />
          </motion.div>
        </motion.div>
        <motion.div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <motion.div variants={inputVariants}>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              className="bg-background/50 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-foreground">
          Subject
        </label>
        <motion.div variants={inputVariants}>
          <Input
            id="subject"
            name="subject"
            placeholder="Project Inquiry"
            required
            className="bg-background/50 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
          />
        </motion.div>
      </motion.div>

      <motion.div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <motion.div variants={inputVariants}>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            required
            rows={5}
            className="bg-background/50 resize-none transition-all duration-200 focus:ring-2 focus:ring-primary/20"
          />
        </motion.div>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button 
          type="submit" 
          variant="hero" 
          size="lg" 
          className="w-full btn-magnetic" 
          disabled={isSubmitting || isSuccess}
        >
          {isSuccess ? (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2"
            >
              <CheckCircle className="h-4 w-4" />
              Message Ready!
            </motion.span>
          ) : isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Preparing...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </motion.div>
    </motion.form>
  );
}
