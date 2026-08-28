import React from "react";
import { Search, PenTool, Rocket, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const Work = () => {
  const steps = [
    {
      title: "Discovery & Audit",
      description: "We dive deep into your brand, current campaigns, and competitors to find the hidden opportunities for scale.",
      icon: <Search className="w-8 h-8 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      title: "Creative & Strategy",
      description: "Our studio develops high-converting assets while our media buyers build a robust, full-funnel strategy.",
      icon: <PenTool className="w-8 h-8 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      title: "Launch & Testing",
      description: "We launch rapid experiments to identify winning audiences and creatives with ruthless precision.",
      icon: <Rocket className="w-8 h-8 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
    },
    {
      title: "Scale & Dominate",
      description: "Once we establish profitable unit economics, we aggressively scale your budget while maintaining ROI.",
      icon: <TrendingUp className="w-8 h-8 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-indigo-200 dark:bg-indigo-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-30 translate-x-1/2 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[120px] opacity-30 -translate-x-1/2 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <ScrollReveal animation="fade-right">
          <div className="max-w-3xl mb-20 md:mb-28">
            <h2 className="text-sm font-black text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-4">The Playbook</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
              How we drive{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400">record profits</span>
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 font-medium pt-2">
              A battle-tested framework that removes the guesswork from paid advertising and guarantees predictable revenue growth.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-linear-to-r from-indigo-100 via-indigo-300 to-indigo-100 dark:from-indigo-500/20 dark:via-indigo-400/50 dark:to-indigo-500/20 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group cursor-pointer">
              <div className="w-24 h-24 bg-white dark:bg-slate-900 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center border border-slate-100 dark:border-slate-700/60 group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_rgb(79,70,229,0.12)] transition-all duration-500 group-hover:border-indigo-100 dark:group-hover:border-indigo-500/40 mb-8">
                {step.icon}
              </div>

              <h4 className="text-xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {step.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Work;
