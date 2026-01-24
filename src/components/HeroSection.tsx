import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import EarlyAccessModal from "./EarlyAccessModal";

const HeroSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleModalClose = (open: boolean) => {
    setModalOpen(open);
  };

  const handleSubmitSuccess = () => {
    setSubmitted(true);
    setModalOpen(false);
    // Reset after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="relative overflow-hidden pt-28 md:pt-33 pb-18 md:pb-28">
      <div className="container px-10 md:px-20">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left - Phone Mockup */}
          <motion.div
            className="flex justify-center lg:justify-start order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <PhoneMockup />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="text-center lg:text-left order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            {/* Coming Soon Badge */}
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-muted text-sm font-semibold text-foreground">
                COMING SOON
              </span>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-sm md:text-base text-muted-foreground mb-4 font-medium tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Discover • Connect • Belong
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              Your community, one Markaz.
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-lg lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.25,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              Find local events, connect with organizations, and build
              belonging—starting in Waterloo.
            </motion.p>

            {/* CTA Section */}
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              {submitted ? (
                <div className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-green-50 border border-green-200">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-semibold">
                    You're on the list ✓
                  </span>
                </div>
              ) : (
                <Button
                  onClick={() => setModalOpen(true)}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-base transition-transform hover:scale-105 w-fit"
                >
                  Get Early Access
                </Button>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <EarlyAccessModal
        open={modalOpen}
        onOpenChange={handleModalClose}
        type="early-access"
        onSubmitSuccess={handleSubmitSuccess}
      />
    </section>
  );
};

export default HeroSection;
