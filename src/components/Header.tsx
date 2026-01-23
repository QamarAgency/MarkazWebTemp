import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
            M
          </div>
          <span className="text-lg font-semibold text-foreground">Markaz</span>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5">
          Get Early Access
        </Button>
      </div>
    </header>
  );
};

export default Header;
