import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
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
            Markaz Privacy Policy
          </h1>
          <div className="text-muted-foreground mb-8">
            <p className="mb-1">
              <strong>Effective Date:</strong> 2026/02/14
            </p>
            <p>
              <strong>Last Updated:</strong> 2026/02/14
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. OVERVIEW
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Markaz ("we," "us," or "our") values your privacy.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              This Privacy Policy explains how we collect, use, store, and
              protect your information when you use the Markaz mobile
              application, website, and related services (collectively, the
              "Service").
            </p>
            <p className="text-muted-foreground leading-relaxed">
              By using Markaz, you agree to the practices described in this
              Privacy Policy.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              1.1 Accountability
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Markaz is responsible for personal information under its control
              and has designated a Privacy Officer to oversee compliance with
              applicable privacy laws, including the Personal Information
              Protection and Electronic Documents Act (PIPEDA).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our Privacy Officer is responsible for ensuring compliance with
              this Privacy Policy and addressing any questions or concerns about
              our privacy practices.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You may contact our Privacy Officer at:{" "}
              <a
                href="mailto:support@markazapp.com"
                className="text-primary hover:underline"
              >
                support@markazapp.com
              </a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. INFORMATION WE COLLECT
            </h2>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              2.1 Information You Provide Directly
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you create an account or use Markaz, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Name</li>
              <li>Email address</li>
              <li>Organization name (for organization accounts)</li>
              <li>Profile information</li>
              <li>
                Event information (title, description, date, location, images)
              </li>
              <li>
                Communications you send to us (support requests, feedback)
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              2.2 Information Collected Automatically
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you use the Service, we may automatically collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Device information (device type, operating system version)</li>
              <li>App usage data (screens viewed, interactions)</li>
              <li>
                Approximate location (city or region, not precise GPS unless
                permitted)
              </li>
              <li>Log data and crash reports</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We collect only the personal information necessary to fulfill the
              purposes identified in this Privacy Policy.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              2.3 Location Information
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Markaz uses location data to help show relevant nearby events.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Location access is optional</li>
              <li>
                You may enable or disable location access at any time through
                your device settings
              </li>
              <li>If disabled, you may manually browse events by region</li>
              <li>
                We do not track users continuously or in the background
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. HOW WE USE YOUR INFORMATION
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use your information to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide, operate, and improve the Markaz Service</li>
              <li>Display relevant events based on location or preferences</li>
              <li>
                Allow organizations to create, manage, and publish events
              </li>
              <li>
                Send notifications (such as event reminders or updates)
              </li>
              <li>Respond to support requests and feedback</li>
              <li>Monitor usage and improve performance and reliability</li>
              <li>Ensure community safety and prevent misuse</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. LEGAL BASIS FOR PROCESSING
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect, use, and disclose personal information only with your
              knowledge and meaningful consent, except where otherwise permitted
              or required by law.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By creating an account or using the Markaz Service, you consent to
              the collection, use, and disclosure of your personal information
              for the purposes described in this Privacy Policy.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Where personal information is sensitive, we will obtain express
              consent. In other cases, consent may be implied through your use of
              the Service.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You may withdraw your consent at any time, subject to legal or
              contractual restrictions and reasonable notice. Withdrawal of
              consent may limit your ability to use certain features of the
              Service. To withdraw consent, please contact us at{" "}
              <a
                href="mailto:support@markazapp.com"
                className="text-primary hover:underline"
              >
                support@markazapp.com
              </a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. HOW WE SHARE INFORMATION
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell your personal data.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may share information only in the following circumstances:
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              5.1 Service Providers
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may share information with trusted third-party service providers
              that help us operate Markaz, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Hosting and databases (e.g., Firebase)</li>
              <li>Analytics services</li>
              <li>
                Payment processors (e.g., Stripe for organization subscriptions)
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              These providers are required to protect your information and use it
              only to perform services on our behalf.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
              5.2 Legal Requirements
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We may disclose information if required by law or if necessary to
              protect the rights, safety, and security of Markaz, our users, or
              others.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. DATA STORAGE & SECURITY
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We implement administrative, technical, and physical safeguards
              appropriate to the sensitivity of the personal information we
              collect to protect against loss, theft, unauthorized access,
              disclosure, copying, use, or modification.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These safeguards include secure servers, access controls,
              authentication measures, encryption where appropriate, and
              monitoring for potential vulnerabilities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              While we take reasonable steps to protect your information, no
              method of transmission over the Internet or electronic storage is
              completely secure.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. DATA RETENTION
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We retain personal information only as long as necessary to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Provide and operate the Service</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes and enforce agreements</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When data is no longer required, it is securely deleted or
              anonymized.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              You may request account deletion at any time.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. DATA BREACHES
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In the event of a breach of security safeguards involving personal
              information that poses a real risk of significant harm, we will
              notify affected individuals as soon as feasible and report the
              breach to the Office of the Privacy Commissioner of Canada, as
              required by applicable law.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We maintain records of security incidents in accordance with legal
              requirements.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. YOUR RIGHTS & CHOICE
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Subject to applicable law, you have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>Request access to your personal information</li>
              <li>
                Request correction of inaccurate or incomplete personal
                information
              </li>
              <li>Withdraw your consent to the use of your information</li>
              <li>Request deletion of your account</li>
              <li>Disable notifications</li>
              <li>Enable or disable location access</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To exercise any of these rights, please contact us at{" "}
              <a
                href="mailto:support@markazapp.com"
                className="text-primary hover:underline"
              >
                support@markazapp.com
              </a>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you are not satisfied with our response to your privacy concern,
              you may contact the Office of the Privacy Commissioner of Canada.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              10. MINORS
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Markaz is not intended for individuals who do not have the legal
              capacity to consent under applicable privacy laws.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We do not knowingly collect personal information from individuals
              who are unable to provide valid consent. If we become aware that
              personal information has been collected without appropriate
              consent, we will take steps to delete it promptly.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              11. THIRD PARTY LINKS
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Markaz may contain links to third-party websites or external event
              registration pages.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are not responsible for the privacy practices of third parties.
              Please review their privacy policies separately.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              12. INTERNATIONAL DATA TRANSFERS
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your information may be stored and processed on servers located
              outside your country of residence, including Canada.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We take reasonable steps to ensure appropriate safeguards are in
              place to protect your data.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              13. CHANGES TO THE PRIVACY POLICY
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may update this Privacy Policy from time to time.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When we do:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
              <li>The "Last Updated" date will be revised</li>
              <li>
                Significant changes will be communicated where appropriate
              </li>
              <li>
                Continued use of Markaz after changes means you accept the
                updated policy.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              14. CONTACT US
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions or concerns about this Privacy Policy,
              contact us at:{" "}
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

export default Privacy;
