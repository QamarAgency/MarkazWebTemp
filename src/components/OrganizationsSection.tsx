import { FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrganizationsSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-markaz-green-light">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                  For organizations
                </h2>
                <p className="text-muted-foreground max-w-md leading-relaxed">
                  Post events in minutes and reach the community. Join hundreds of organizations building stronger connections.
                </p>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="shrink-0 rounded-full border-border hover:bg-muted gap-2"
            >
              Partner with Markaz
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationsSection;
