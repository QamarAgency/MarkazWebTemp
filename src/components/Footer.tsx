import markazLogo from "@/assets/markaz-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img 
              src={markazLogo} 
              alt="Markaz logo" 
              className="h-6 w-6 object-contain"
            />
            <span className="text-sm text-muted-foreground">
              © 2026 Markaz. All rights reserved.
            </span>
          </div>
          <nav className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
