const lastUpdated = "August 2026";

export function PrivacyPolicyPage() {
  return (
    <article className="bg-white px-6 py-16 md:px-10 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">Legal</p>
        <h1 className="mt-4 text-4xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm font-medium text-[#6b6f7e]">
          Last updated: {lastUpdated}
        </p>

        <div className="prose-legal mt-10 grid gap-8 text-base leading-7 text-[#555a6a]">
          <Section title="1. Who we are">
            <p>
              RestroScale is a brand owned and operated by Synrad Labs
              Private Limited (&quot;RestroScale&quot;, &quot;we&quot;,
              &quot;us&quot;, or &quot;our&quot;). This Privacy Policy
              explains how we collect, use, and protect information when you
              visit restro.tech or engage us for services.
            </p>
          </Section>

          <Section title="2. Information we collect">
            <p>
              We collect information you provide directly, such as your
              name, email address, phone number, brand or company name, and
              any message you send us through our contact form or by email.
              We also collect basic technical information automatically,
              such as browser type and pages visited, to keep the site
              running correctly.
            </p>
          </Section>

          <Section title="3. How we use your information">
            <p>We use the information we collect to:</p>
            <ul className="mt-3 grid gap-2 pl-5">
              <li className="list-disc">Respond to enquiries submitted through our contact form or by email</li>
              <li className="list-disc">Discuss and scope potential engagements</li>
              <li className="list-disc">Deliver services to clients we work with</li>
              <li className="list-disc">Improve our website and communications</li>
            </ul>
            <p className="mt-3">
              We do not sell your personal information to third parties.
            </p>
          </Section>

          <Section title="4. How we share information">
            <p>
              We share information only with service providers who help us
              operate our business, such as hosting and form-processing
              providers, and only to the extent necessary for them to
              perform that function. We may also disclose information where
              required by law.
            </p>
          </Section>

          <Section title="5. Data retention">
            <p>
              We retain enquiry and client information for as long as
              necessary to respond to your enquiry, deliver services, and
              meet our legal and accounting obligations.
            </p>
          </Section>

          <Section title="6. Your choices">
            <p>
              You may request access to, correction of, or deletion of your
              personal information by emailing relations@synradlabs.com. We will
              respond to reasonable requests within a reasonable time.
            </p>
          </Section>

          <Section title="7. Cookies">
            <p>
              Our website may use essential cookies required for basic
              functionality. We do not currently use advertising or
              cross-site tracking cookies.
            </p>
          </Section>

          <Section title="8. Changes to this policy">
            <p>
              We may update this Privacy Policy from time to time. The
              &quot;last updated&quot; date at the top of this page reflects
              the most recent revision.
            </p>
          </Section>

          <Section title="9. Contact us">
            <p>
              If you have questions about this Privacy Policy, contact us at{" "}
              <a href="mailto:relations@synradlabs.com" className="font-medium text-[#4262ff]">
                relations@synradlabs.com
              </a>
              .
            </p>
          </Section>
        </div>
      </div>
    </article>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-2xl font-medium text-[#1c1c1e]">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
