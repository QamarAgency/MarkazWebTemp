import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container max-w-4xl px-6 md:px-12 py-12 md:py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <article className="prose prose-slate max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
            Markaz Terms of Service
          </h1>
          <div className="text-muted-foreground mb-8">
            <p className="mb-1">
              <strong>Effective Date:</strong> 2025/01/22
            </p>
            <p>
              <strong>Last Updated:</strong> 2025/01/22
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. OVERVIEW
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Welcome to Markaz.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These Terms of Service ("Terms") govern your access to and use of
              the Markaz mobile application, website, and related services
              (collectively, the "Service").
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using Markaz, you agree to these Terms. If you do
              not agree, please do not use the Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. ABOUT MARKAZ
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Markaz is a community-based platform that allows users to discover
              Muslim-centered events and allows organizations to publish and
              manage events for their communities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Markaz does not organize events itself. Events are created and
              managed by third-party organizations.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. ELIGIBILITY
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>You must be at least 13 years old to use Markaz.</li>
              <li>
                If you are under 18, you confirm that you have permission from a
                parent or legal guardian.
              </li>
              <li>
                Organizations using Markaz confirm that they have authority to
                represent their organization.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. USE OF THE SERVICE
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Post false, misleading, or harmful content</li>
              <li>Harass, abuse, or threaten others</li>
              <li>
                Post content that violates Islamic ethics, community standards,
                or applicable law
              </li>
              <li>Use Markaz for spam, scams, or unauthorized advertising</li>
              <li>Attempt to hack, disrupt, or misuse the platform</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Markaz reserves the right to remove content or suspend accounts
              that violate these rules.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. EVENT CONTENT & RESPONSIBILITY
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Organizations are solely responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>The accuracy of event details</li>
              <li>Event safety, logistics, and conduct</li>
              <li>Any payments, registrations, or refunds related to events</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Markaz:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Does not verify events</li>
              <li>
                Is not responsible for event outcomes, cancellations, injuries,
                losses, or disputes
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Users attend events at their own discretion and risk.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. PAYMENTS & SUBSCRIPTIONS (ORGANIZATIONS)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Some features of Markaz may require payment (e.g., organization
              subscriptions).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By subscribing, organizations agree that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                Payments are processed through third-party providers (e.g.,
                Stripe)
              </li>
              <li>
                Subscription fees are billed on a recurring basis unless
                cancelled
              </li>
              <li>
                Payments made to Markaz are non-refundable, except where
                applicable by law
              </li>
              <li>
                Failure to pay may result in loss of access to paid features.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. INTELLECTUAL PROPERTY
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All Markaz branding, logos, designs, software, and content
              (excluding user-submitted content) are owned by Markaz.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Organizations retain ownership of the event content they submit but
              grant Markaz a non-exclusive, royalty-free license to display,
              promote, and distribute that content within the platform.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. PRIVACY
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your use of Markaz is also governed by our{" "}
              <Link to="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              , which explains how we collect and use data.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By using Markaz, you agree to the practices described in the
              Privacy Policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. ACCOUNT SUSPENSION & TERMINATION
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Markaz may suspend or terminate accounts if:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>These Terms are violated</li>
              <li>Content harms the community</li>
              <li>The Service is misused</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              You may stop using Markaz at any time.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. DISCLAIMER OF WARRANTIES
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Markaz is provided "as is" and "as available."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not guarantee that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>The Service will always be available</li>
              <li>Events will be accurate or successful</li>
              <li>Errors will be fixed immediately</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Use of the Service is at your own risk.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              11. LIMITATION OF LIABILITY
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To the maximum extent permitted by law, Markaz shall not be liable
              for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Personal injury</li>
              <li>Lost profits or data</li>
              <li>Event-related issues</li>
              <li>Indirect or consequential damages</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Markaz's total liability will not exceed the amount paid to Markaz
              in the past 12 months, if any.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              12. CHANGES TO THESE TERMS
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may update these Terms from time to time.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Changes will be posted with an updated date.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Continued use of Markaz after changes means you accept the updated
              Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              13. GOVERNING LAW
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by the laws of Ontario, Canada, without
              regard to conflict of law principles.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              14. CONTACT US
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions or concerns about these Terms:{" "}
              <a
                href="mailto:support@markazapp.com"
                className="text-primary hover:underline"
              >
                support@markazapp.com
              </a>
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
