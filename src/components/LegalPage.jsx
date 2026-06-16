import { ArrowLeft, Circle } from 'lucide-react';

const pages = {
  'privacy-policy': {
    eyebrow: 'Privacy Policy',
    title: 'Privacy Policy',
    updated: 'Last updated: June 16, 2026',
    intro:
      'Ginny & Co. respects your privacy. This policy explains how we collect, use, protect, and handle information shared with us through this website, consultation requests, email, phone, or other client communication.',
    sections: [
      {
        title: 'Information We Collect',
        body:
          'We may collect your name, phone number, email address, service requirements, business details, documents you voluntarily share, and message contents submitted through our contact form or direct communication.',
      },
      {
        title: 'How We Use Your Information',
        body:
          'We use your information to respond to enquiries, provide consultations, deliver accounting, tax, audit, compliance, and advisory services, maintain client records, improve our services, and meet applicable professional or legal obligations.',
      },
      {
        title: 'Confidentiality',
        body:
          'Information shared with Ginny & Co. is treated as confidential and is accessed only by team members or professional partners who need it to support your matter, subject to applicable law and professional standards.',
      },
      {
        title: 'Data Sharing',
        body:
          'We do not sell your personal information. We may share information with government portals, regulators, technology providers, or professional service partners only where required to perform requested services or comply with law.',
      },
      {
        title: 'Data Security',
        body:
          'We use reasonable administrative and technical safeguards to protect information. However, no online transmission or storage system can be guaranteed to be completely secure.',
      },
      {
        title: 'Your Choices',
        body:
          'You may request correction, update, or deletion of your personal information, subject to record-keeping, regulatory, contractual, and legal requirements.',
      },
    ],
  },
  'terms-of-service': {
    eyebrow: 'Terms',
    title: 'Terms of Service',
    updated: 'Last updated: June 16, 2026',
    intro:
      'These terms govern your use of this website and your engagement with Ginny & Co. for consultations or professional services. By using this website or requesting services, you agree to these terms.',
    sections: [
      {
        title: 'Website Use',
        body:
          'The content on this website is provided for general information. You agree not to misuse the website, interfere with its operation, or use its content for unlawful purposes.',
      },
      {
        title: 'Professional Engagement',
        body:
          'Submitting a form or contacting us does not automatically create a client relationship. A professional engagement begins only after scope, fees, timelines, responsibilities, and required documentation are mutually agreed.',
      },
      {
        title: 'Client Responsibilities',
        body:
          'You are responsible for providing accurate, complete, and timely information. Ginny & Co. is not responsible for delays, penalties, or outcomes caused by incomplete, incorrect, or delayed client inputs.',
      },
      {
        title: 'Fees and Payments',
        body:
          'Fees, payment schedules, and applicable taxes will be communicated before or during engagement. Work may be paused if required information or agreed payments are not received on time.',
      },
      {
        title: 'Third-party Platforms',
        body:
          'Some services may require use of government portals, banks, payment systems, or third-party software. Their availability, processing timelines, and policies are outside our control.',
      },
      {
        title: 'Limitation of Liability',
        body:
          'To the fullest extent permitted by law, Ginny & Co. is not liable for indirect, incidental, consequential, or punitive damages arising from website use or service engagement.',
      },
    ],
  },
  disclaimer: {
    eyebrow: 'Disclaimer',
    title: 'Disclaimer',
    updated: 'Last updated: June 16, 2026',
    intro:
      'The information on this website is intended for general awareness and should not be treated as professional advice for your specific facts or circumstances.',
    sections: [
      {
        title: 'No Professional Advice Without Engagement',
        body:
          'Website content, FAQs, service descriptions, and general communication do not constitute legal, tax, audit, accounting, investment, or financial advice unless provided within a formal professional engagement.',
      },
      {
        title: 'Accuracy of Information',
        body:
          'We aim to keep website information useful and current, but laws, rules, rates, forms, and regulatory positions can change. You should seek tailored advice before acting on any information.',
      },
      {
        title: 'No Guarantee of Outcomes',
        body:
          'Any timelines, examples, or service outcomes mentioned on this website are indicative. Actual results may vary based on facts, documents, authorities, portals, and regulatory processing.',
      },
      {
        title: 'External Links',
        body:
          'This website may contain links to external platforms or resources. Ginny & Co. is not responsible for external content, privacy practices, security, or availability.',
      },
      {
        title: 'Professional Standards',
        body:
          'All professional services are subject to applicable laws, regulatory requirements, professional standards, ethical obligations, and mutually agreed engagement terms.',
      },
    ],
  },
};

export default function LegalPage({ pageKey }) {
  const page = pages[pageKey] ?? pages['privacy-policy'];

  const goHome = (e) => {
    e.preventDefault();
    window.location.hash = '#hero';
  };

  return (
    <main className="relative overflow-hidden bg-[#F9F7F2] pt-36 pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(200,164,106,0.14),transparent_28%),radial-gradient(circle_at_82%_10%,rgba(255,255,255,0.07),transparent_22%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.045] bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:78px_78px] pointer-events-none" />

      <div className="relative mx-auto max-w-[980px] px-6">
        <a
          href="#hero"
          onClick={goHome}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-black/[0.1] bg-[#FFFFFF]/80 px-5 py-2.5 text-sm font-semibold text-[#475569] transition-all duration-300 hover:border-[#C8A46A]/35 hover:text-[#E2C17E]"
        >
          <ArrowLeft size={16} />
          Back to Home
        </a>

        <div className="mb-12">
          <div className="mb-5 flex items-center gap-3">
            <Circle size={9} className="text-[#C8A46A]" strokeWidth={3} />
            <span className="text-[#E2C17E] text-[11px] font-bold tracking-[0.2em] uppercase">{page.eyebrow}</span>
          </div>
          <h1 className="font-heading text-5xl lg:text-7xl leading-tight text-[#111827] drop-shadow-[0_16px_34px_rgba(0,0,0,0.24)]">
            {page.title}
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#475569]">{page.updated}</p>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#475569]">{page.intro}</p>
        </div>

        <div className="overflow-hidden rounded-[34px] border border-black/[0.08] bg-[#FFFFFF]/88 shadow-[0_30px_90px_rgba(0,0,0,0.32)]">
          {page.sections.map((section, index) => (
            <section key={section.title} className="border-b border-black/[0.06] p-6 md:p-8 last:border-0">
              <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C8A46A]/80">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h2 className="font-heading text-2xl text-[#111827]">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#475569]">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-[28px] border border-[#C8A46A]/18 bg-[#C8A46A]/8 p-6">
          <h2 className="font-heading text-2xl text-[#111827]">Contact</h2>
          <p className="mt-2 text-sm leading-relaxed text-[#475569]">
            For questions about these terms or your information, contact us at{' '}
            <a href="mailto:hello@ginnyandco.in" className="font-semibold text-[#E2C17E] hover:text-[#F3DDA6]">
              hello@ginnyandco.in
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
