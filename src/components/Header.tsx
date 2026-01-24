import { useState } from "react";
import { Button } from "@/components/ui/button";
import markazLogo from "@/assets/markaz-logo.png";
import EarlyAccessModal from "./EarlyAccessModal";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-6 md:px-12">
          <div className="flex items-center gap-2">
            <img
              src={markazLogo}
              alt="Markaz logo"
              className="h-8 w-8 object-contain"
            />
            <span className="text-lg font-semibold text-foreground">
              Markaz
            </span>
          </div>
          <Button
            onClick={() => setModalOpen(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5"
          >
            Get Early Access
          </Button>
        </div>
      </header>
      <EarlyAccessModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        type="early-access"
      />
    </>
  );
};

export default Header;
