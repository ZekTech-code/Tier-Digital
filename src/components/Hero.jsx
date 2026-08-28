import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Target, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Premium Background Blurs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-125 h-125 bg-blue-400 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[140px] opacity-20"></div>
      <div className="absolute top-1/2 left-0 -ml-20 w-100 h-100 bg-indigo-400 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[140px] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-10 items-center">

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

          {/* Right Image/Graphic */}
          <div className="relative mx-auto w-full max-w-[320px] sm:max-w-md lg:max-w-none flex justify-center z-10 mt-6 lg:mt-0 animate-fade-in-right opacity-0 animate-delay-300">
            {/* Main Image Masked */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white dark:border-slate-800 bg-white dark:bg-slate-800 w-full aspect-4/5 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
               <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                alt="Marketing Expert"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-indigo-900/40 to-transparent"></div>
            </div>

            {/* Floating Card 1 */}
            <div className="absolute top-8 -left-4 sm:-left-12 lg:-left-10 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 z-20 animate-float" style={{animationDelay: '0s'}}>
              <div className="flex items-center gap-4">
                 <div className="bg-emerald-100 dark:bg-emerald-500/20 p-2.5 rounded-xl text-emerald-600 dark:text-emerald-400">
                    <TrendingUp className="w-6 h-6" />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">ROAS</p>
                   <p className="text-xl font-black text-slate-800 dark:text-white">+340%</p>
                 </div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute bottom-12 -right-4 sm:-right-8 lg:-right-6 bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 z-20 animate-float" style={{animationDelay: '2s'}}>
              <div className="flex items-center gap-4">
                 <div className="bg-blue-100 dark:bg-blue-500/20 p-2.5 rounded-xl text-blue-600 dark:text-blue-400">
                    <Target className="w-6 h-6" />
                 </div>
                 <div>
                   <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Leads</p>
                   <p className="text-xl font-black text-slate-800 dark:text-white">10k+</p>
                 </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
