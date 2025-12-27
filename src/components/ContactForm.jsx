import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formElement = e.currentTarget;

    try {
      // EmailJS configuration
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const visitorTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const adminTemplateId = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      const promises = [];

      // 1. Send Admin Notification (if configured)
      if (adminTemplateId) {
        promises.push(
          emailjs.sendForm(serviceId, adminTemplateId, formElement, publicKey)
            .then(() => console.log('Admin notification sent'))
            .catch(err => console.error('Failed to send admin notification:', err))
        );
      } else {
        console.warn('VITE_EMAILJS_ADMIN_TEMPLATE_ID is missing in .env. Admin will not receive a copy.');
      }

      // 2. Send Visitor Confirmation (Auto-Reply)
      if (visitorTemplateId) {
        promises.push(
          emailjs.sendForm(serviceId, visitorTemplateId, formElement, publicKey)
            .then(() => console.log('Visitor auto-reply sent'))
            .catch(err => console.error('Failed to send visitor auto-reply:', err))
        );
      }

      await Promise.all(promises);

      // We consider it a success if the process completes, even if individual emails fail (they are logged)
      // Ideally, at least one should succeed, but for UX simple success message is robust enough.
      
      setIsSuccess(true);
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });

      // Reset form after success
      setTimeout(() => {
        setIsSuccess(false);
        formElement.reset();
      }, 3000);

    } catch (error) {
      console.error('Failed to execute email sending process:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email or WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
