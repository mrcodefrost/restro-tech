const lastUpdated = "August 2026";

export function TermsOfServicePage() {
  return (
    <article className="bg-white px-6 py-16 md:px-10 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#6b6f7e]">Legal</p>
        <h1 className="mt-4 text-4xl font-medium leading-tight tracking-tight text-[#1c1c1e] md:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm font-medium text-[#6b6f7e]">
          Last updated: {lastUpdated}
        </p>

        <div className="mt-10 grid gap-8 text-base leading-7 text-[#555a6a]">
          <Section title="1. Who we are">
            <p>
              This website, restro.tech, is operated by Synrad Labs Private
              Limited under the brand name RestroScale
              (&quot;RestroScale&quot;, &quot;we&quot;, &quot;us&quot;, or
              &quot;our&quot;). By using this website, you agree to these
              Terms of Service.
            </p>
          </Section>

          <Section title="2. Website use">
            <p>
              This website is provided to give you information about
              RestroScale&apos;s services and products, and to let you
              contact us. You agree to use it only for lawful purposes and
              not to attempt to disrupt or compromise its operation.
            </p>
          </Section>

          <Section title="3. Services and engagements">
            <p>
              Descriptions of our services and products on this website are
              informational and do not by themselves constitute a binding
              offer. Any specific engagement, including scope, timeline,
              pricing, and deliverables, is governed by a separate written
              agreement between RestroScale and the client.
            </p>
          </Section>

          <Section title="4. Standalone products">
            <p>
              Our standalone products, including Queue &amp; Reservations,
              Feedback &amp; Analytics, Loyalty, and Franchise Complaint
              Tracking, may be governed by additional product-specific terms
              provided at the time of signup.
            </p>
          </Section>

          <Section title="5. Intellectual property">
            <p>
              All content on this website, including text, graphics, logos,
              and brand assets, is the property of Synrad Labs Private
              Limited or its licensors and may not be copied or reused
              without permission.
            </p>
          </Section>

          <Section title="6. Third-party links">
            <p>
              This website may link to third-party websites, including
              client websites referenced in our case studies. We are not
              responsible for the content or practices of those sites.
            </p>
          </Section>

          <Section title="7. Disclaimer">
            <p>
              This website and its content are provided on an
              &quot;as is&quot; basis. While we make reasonable efforts to
              keep information accurate and current, we make no warranty
              that the website will be error-free or uninterrupted.
            </p>
          </Section>

          <Section title="8. Limitation of liability">
            <p>
              To the extent permitted by law, Synrad Labs Private Limited
              will not be liable for any indirect, incidental, or
              consequential damages arising from your use of this website.
            </p>
          </Section>

          <Section title="9. Governing law">
            <p>
              These Terms of Service are governed by the laws of India.
              Any dispute arising from your use of this website will be
              subject to the jurisdiction of the courts of India.
            </p>
          </Section>

          <Section title="10. Changes to these terms">
            <p>
              We may update these Terms of Service from time to time. The
              &quot;last updated&quot; date at the top of this page reflects
              the most recent revision.
            </p>
          </Section>

          <Section title="11. Contact us">
            <p>
              If you have questions about these Terms of Service, contact us
              at{" "}
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
