import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { caseStudies } from "../data/caseStudies";

const Case = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <ScrollReveal animation="fade-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-4">Case Studies</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                Don't just take our{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400">word for it</span>
              </h3>
            </div>
            <Link to="/case-studies" className="flex items-center gap-2 group text-indigo-600 dark:text-indigo-400 font-bold hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors">
              View All Work
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.slice(0, 3).map((item) => (
            <Link to={`/case-study/${item.slug}`} key={item.slug} className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500">

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.brand} Case Study`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent flex items-end"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-wider rounded-md shadow-sm">
                    {item.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-6">{item.brand}</h4>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {item.metrics.slice(0, 2).map((metric, i) => (
                    <div key={i} className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg shadow-sm">
                      <p className="text-2xl lg:text-3xl font-black text-indigo-600 dark:text-indigo-400 mb-1">{metric.value}</p>
                      <p className="text-[10px] sm:text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-8 flex-1">
                  {item.summary}
                </p>

                <div className="mt-auto flex items-center font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Read Full Story
                  <div className="ml-4 w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-500/15 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

            </Link>
          ))}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Case;
