import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const Terms = () => {
  return (
    <section className="pt-36 pb-24 lg:pt-44">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <ScrollReveal animation="fade-up">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-sm font-bold text-slate-400 dark:text-slate-500 mb-12">
            Last updated: August 2026
          </p>

          <div className="prose dark:prose-invert prose-slate max-w-none space-y-10">
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">1. Services</h2>
              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                Tier Digital provides digital marketing services including paid social advertising, creative production, analytics, and consulting. Service scope, deliverables, and pricing are defined in individual client agreements.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">2. Client Responsibilities</h2>
              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                Clients are responsible for providing timely access to ad accounts, brand assets, and relevant business information. Delays in client-provided materials may affect campaign timelines and performance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">3. Payment Terms</h2>
              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                Payment terms are outlined in each client agreement. Late payments may result in service suspension. All fees are non-refundable unless otherwise specified in the service agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">4. Intellectual Property</h2>
              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                Upon full payment, clients receive ownership of creative assets produced specifically for their campaigns. Tier Digital retains the right to showcase work in portfolios and case studies unless otherwise agreed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">5. Performance Disclaimer</h2>
              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                While we strive to deliver exceptional results, digital advertising performance depends on many factors including market conditions, competition, and platform changes. We do not guarantee specific outcomes unless explicitly stated in writing.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">6. Limitation of Liability</h2>
              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                Tier Digital's total liability shall not exceed the fees paid by the client for the services in question. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">7. Contact</h2>
              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                For questions about these Terms, contact us at{" "}
                <a href="mailto:hello@tierdigital.co" className="text-indigo-600 dark:text-indigo-400 font-bold hover:underline">
                  hello@tierdigital.co
                </a>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Terms;
