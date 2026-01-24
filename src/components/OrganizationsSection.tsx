import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import EarlyAccessModal from "./EarlyAccessModal";

const OrganizationsSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-16">
        <div className="container">
          <motion.div
            className="bg-markaz-green-light border border-border rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <motion.div
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-markaz-green-light">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                    For organizations
                  </h2>
                  <p className="text-muted-foreground max-w-md leading-relaxed">
                    Post events in minutes and reach the community. Join
                    hundreds of organizations building stronger connections.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button
                  onClick={() => setModalOpen(true)}
                  variant="outline"
                  className="shrink-0 rounded-full border-border hover:bg-muted hover:text-foreground gap-2 transition-transform hover:scale-105"
                >
                  Partner with Markaz
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <EarlyAccessModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        type="partner"
      />
    </>
  );
};

export default OrganizationsSection;
