import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "What services do you actually provide?",
    answer:
      "We offer end-to-end digital solutions including custom web development, UI/UX design, mobile app creation, and performance marketing. Think of us as your fully equipped digital growth partner.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the scope, but typically, a responsive marketing website takes 3-4 weeks, while a full-scale web application might take 2-3 months. We provide a detailed timeline during our initial strategy phase.",
  },
  {
    question: "Do you work with startups or established brands?",
    answer:
      "Both! We love the agility and innovation of startups, guiding them from zero to launch. We also partner with established enterprises looking to modernize their digital presence or scale their systems.",
  },
  {
    question: "How do you handle post-launch support and maintenance?",
    answer:
      "We don't just launch and leave. We offer dedicated retention retainers that include continuous monitoring, security updates, feature expansions, and A/B testing to ensure your product performs optimally.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "We utilize value-based pricing, tailoring our proposals to the specific challenges and ROI potential of your project. After our discovery call, we provide clear, tiered packages so you can choose the velocity that makes sense.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 relative" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-scale">
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-3">
              Questions & Answers
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400">
                Questions
              </span>
            </h3>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
              Everything you need to know about our process, pricing, and how we
              work with you to build something spectacular.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                openIndex === index
                  ? "border-indigo-300 dark:border-indigo-500/60 bg-white dark:bg-slate-900 shadow-lg shadow-indigo-100 dark:shadow-indigo-900/30"
                  : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 focus:outline-none text-left cursor-pointer"
              >
                <span
                  className={`text-lg font-bold pr-8 transition-colors ${
                    openIndex === index
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-slate-900 dark:text-white"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? "bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rotate-180"
                      : "bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500"
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-6 pt-0 text-slate-600 dark:text-slate-300 leading-relaxed text-md sm:text-lg">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQ;
