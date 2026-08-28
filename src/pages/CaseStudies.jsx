import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import { caseStudies } from "../data/caseStudies";

const industries = ["All", ...new Set(caseStudies.map((s) => s.industry))];

const CaseStudies = () => {
  const [activeIndustry, setActiveIndustry] = useState("All");

  const filtered =
    activeIndustry === "All"
      ? caseStudies
      : caseStudies.filter((s) => s.industry === activeIndustry);

  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Case"
        highlight="Studies"
        description="Real results from real brands. See how we've helped companies scale their growth with data-driven Meta advertising strategies."
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <ScrollReveal animation="fade-up">
            <div className="flex flex-wrap gap-3 mb-12">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setActiveIndustry(industry)}
                  className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 ${
                    activeIndustry === industry
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25"
                      : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((study) => (
              <ScrollReveal key={study.slug} animation="fade-up">
                <Link
                  to={`/case-study/${study.slug}`}
                  className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 h-full"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.brand}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-sm">
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">
                      {study.brand}
                    </h3>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {study.metrics.slice(0, 2).map((metric, i) => (
                        <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                          <p className="text-xl font-black text-indigo-600 dark:text-indigo-400">
                            {metric.value}
                          </p>
                          <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed text-sm mb-6 flex-1">
                      {study.summary}
                    </p>

                    <div className="mt-auto flex items-center font-bold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                      Read Full Story
                      <div className="ml-4 w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-500/15 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;
