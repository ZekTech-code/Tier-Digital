import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      {/* Background with gradient and subtle texture overlay */}
      <div className="absolute inset-0 bg-slate-900">
        <div className="absolute inset-0 bg-linear-to-br from-indigo-900/50 via-slate-900 to-blue-900/40"></div>
        {/* Abstract shapes for visual interest */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-[120px]"></div>
          <div className="absolute top-[60%] right-[5%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px]"></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-scale">
          <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-16 text-center shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
            Ready to build something{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-blue-400">
              extraordinary?
            </span>
          </h2>

          <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop letting your ideas wait. Partner with us today and let's craft
            a digital experience that drives real results for your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="group w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 focus:ring-4 focus:ring-indigo-500/50 cursor-pointer">
              Start your project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-slate-600 hover:border-slate-400 text-white rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center hover:bg-slate-800/50 focus:ring-4 focus:ring-slate-700/50 cursor-pointer">
              <MessageSquare className="mr-2 w-5 h-5 text-slate-400" />
              Schedule a call
            </Link>
          </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTA;
