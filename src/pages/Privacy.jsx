import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const Privacy = () => {
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
            Privacy Policy
          </h1>
          <p className="text-sm font-bold text-slate-400 dark:text-slate-500 mb-12">
            Last updated: August 2026
          </p>

          <div className="prose dark:prose-invert prose-slate max-w-none space-y-10">
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">1. Information We Collect</h2>
              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                When you visit our website, submit a contact form, or subscribe to our newsletter, we may collect personal information such as your name, email address, phone number, and company details. We also collect non-personal data including browser type, IP address, pages visited, and time spent on our site through cookies and analytics tools.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                We use your information to respond to inquiries, provide our services, send newsletter updates (with your consent), improve our website experience, and analyze site performance. We do not sell, trade, or rent your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">3. Cookies & Tracking</h2>
              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                Our website uses cookies to enhance your browsing experience, analyze site traffic, and understand user behavior. You can control cookie preferences through your browser settings. Third-party tools such as Google Analytics may also use cookies to collect anonymized usage data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">4. Data Security</h2>
              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security of your data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">5. Third-Party Services</h2>
              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                We may use third-party services including analytics providers, email marketing platforms, and advertising networks. These services have their own privacy policies, and we encourage you to review them.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">6. Your Rights</h2>
              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                You have the right to access, correct, or delete your personal information. You can also opt out of marketing communications at any time by clicking the unsubscribe link in our emails or contacting us directly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">7. Contact Us</h2>
              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{" "}
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

export default Privacy;
