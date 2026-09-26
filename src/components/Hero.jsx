import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import HeroCampaignDashboard from "./HeroCampaignDashboard";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-10 items-start">

          {/* Left Content */}
          <div className="text-center lg:text-left z-10 flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-500/30 shadow-sm text-sm font-bold text-indigo-700 dark:text-indigo-300 mb-8 animate-fade-in-left opacity-0 animate-delay-100">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
              Facebook Premier Level Partner
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 dark:text-white leading-tight mb-8 tracking-tight animate-fade-in-up opacity-0 animate-delay-200">
              Unlock Your Business <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-700 to-blue-500 dark:from-indigo-400 dark:to-blue-400">
                Potential With Meta Ads
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl font-medium leading-relaxed animate-fade-in-up opacity-0 animate-delay-300">
              We help ambitious brands scale rapidly with data-driven Facebook and Instagram advertising strategies that guarantee measurable ROI.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto animate-fade-in-up opacity-0 animate-delay-400">
              <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold text-lg shadow-[0_8px_30px_rgb(79,70,229,0.3)] hover:shadow-[0_8px_30px_rgb(79,70,229,0.4)] transition-all hover:-translate-y-1 group flex justify-center items-center gap-2">
                Work With Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a href="#case-studies" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-full font-bold text-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex items-center justify-center gap-3">
                <div className="bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-full p-1.5 flex items-center justify-center">
                  <Play className="w-4 h-4 fill-indigo-600 dark:fill-indigo-400 ml-0.5" />
                </div>
                View Case Study
              </a>
            </div>
          </div>

          {/* Right Dashboard Visual */}
          <div className="relative z-10 animate-fade-in-right opacity-0 animate-delay-300">
            <HeroCampaignDashboard />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
