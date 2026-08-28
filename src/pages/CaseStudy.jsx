import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Quote } from "lucide-react";
import { caseStudies } from "../data/caseStudies";
import ScrollReveal from "../components/ScrollReveal";

const CaseStudy = () => {
  const { slug } = useParams();
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return (
      <section className="pt-40 pb-24 min-h-screen text-center px-4">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
          Case study not found
        </h1>
        <Link
          to="/"
          className="text-indigo-600 dark:text-indigo-400 font-bold hover:text-indigo-800"
        >
          Back to home
        </Link>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-12 lg:pt-44 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-125 h-125 bg-blue-400 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[140px] opacity-20"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/#case-studies"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to case studies
          </Link>

          <ScrollReveal animation="fade-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/30 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-6">
              {study.industry}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              {study.brand}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-3xl">
              {study.summary}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Cover Image */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-scale">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={study.image}
                alt={study.brand}
                className="w-full h-72 md:h-96 object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {study.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center shadow-sm"
                >
                  <p className="text-3xl md:text-4xl font-black text-indigo-600 dark:text-indigo-400 mb-2">
                    {metric.value}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                The Challenge
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {study.challenge}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                Our Solution
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {study.solution}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
                The Results
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {study.results}
              </p>
            </div>
          </ScrollReveal>

          {/* Testimonial */}
          <ScrollReveal animation="fade-scale">
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-8 md:p-10 my-16">
              <Quote className="w-10 h-10 text-indigo-200 dark:text-indigo-800 mb-4" />
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 font-medium leading-relaxed italic mb-6">
                "{study.testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">
                  {study.testimonial.author}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {study.testimonial.role}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal animation="fade-up">
            <div className="bg-linear-to-br from-indigo-600 to-blue-700 rounded-xl p-8 md:p-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-black mb-2">Want results like these?</h3>
                <p className="text-indigo-100 font-medium max-w-md">
                  Book a free strategy call and we'll show you exactly how we'd
                  approach your account.
                </p>
              </div>
              <Link
                to="/contact"
                className="shrink-0 bg-white text-indigo-600 font-bold py-3.5 px-7 rounded-lg shadow-lg hover:bg-indigo-50 transition-colors inline-flex items-center gap-2"
              >
                Work With Us <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  );
};

export default CaseStudy;
