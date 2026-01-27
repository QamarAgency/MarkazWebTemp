import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";

interface EarlyAccessModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "early-access" | "partner";
  onSubmitSuccess?: () => void;
}

const EarlyAccessModal = ({
  open,
  onOpenChange,
  type,
  onSubmitSuccess,
}: EarlyAccessModalProps) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    location: "",
    businessName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare submission data
    const submissionData = {
      type,
      email: formData.email,
      name: formData.name,
      location: formData.location,
      business_name: type === "partner" ? formData.businessName : null,
    };

    try {
      // Insert into Supabase
      const { error } = await supabase
        .from("waitlist_submissions")
        .insert([submissionData]);

      if (error) {
        console.error("Submission error:", error.message);
        return;
      }

      console.log("Submission successful!");
      setFormData({ email: "", name: "", location: "", businessName: "" });
      onOpenChange(false);

      // Call the success callback if provided
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const title =
    type === "early-access" ? "Get Early Access" : "Partner with Markaz";
  const description =
    type === "early-access"
      ? "Join Our Community"
      : "Join us as a partner to grow together";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[90%] max-w-md border-0 rounded-2xl shadow-2xl z-[9999] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            {description}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          {/* Name Field */}
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="text-sm font-medium text-foreground"
            >
              Name *
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
            >
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Location Field */}
          <div className="space-y-2">
            <Label
              htmlFor="location"
              className="text-sm font-medium text-foreground"
            >
              Location *
            </Label>
            <Input
              id="location"
              name="location"
              type="text"
              placeholder="City, Country"
              value={formData.location}
              onChange={handleChange}
              required
              className="rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          {/* Business Name Field - Only for Partner type */}
          {type === "partner" && (
            <div className="space-y-2">
              <Label
                htmlFor="businessName"
                className="text-sm font-medium text-foreground"
              >
                Business Name *
              </Label>
              <Input
                id="businessName"
                name="businessName"
                type="text"
                placeholder="Your business name"
                value={formData.businessName}
                onChange={handleChange}
                required
                className="rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-2.5 font-medium transition-all hover:scale-105"
          >
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EarlyAccessModal;
