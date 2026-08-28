import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import {
  Megaphone,
  Video,
  MousePointerClick,
  Mail,
  LineChart,
} from "lucide-react";
import { getServiceBySlug } from "../data/services";
import ScrollReveal from "../components/ScrollReveal";

const iconMap = {
  Megaphone: Megaphone,
  Video: Video,
  MousePointerClick: MousePointerClick,
  Mail: Mail,
  LineChart: LineChart,
};

const colorMap = {
  indigo: { bg: "bg-indigo-100 dark:bg-indigo-500/15", text: "text-indigo-600 dark:text-indigo-400" },
  rose: { bg: "bg-rose-100 dark:bg-rose-500/15", text: "text-rose-600 dark:text-rose-400" },
  emerald: { bg: "bg-emerald-100 dark:bg-emerald-500/15", text: "text-emerald-600 dark:text-emerald-400" },
  blue: { bg: "bg-blue-100 dark:bg-blue-500/15", text: "text-blue-600 dark:text-blue-400" },
  amber: { bg: "bg-amber-100 dark:bg-amber-500/15", text: "text-amber-600 dark:text-amber-400" },
};

const ServicePage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <section className="pt-40 pb-24 min-h-screen text-center px-4">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
          Service not found
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

  const Icon = iconMap[service.icon];
  const colors = colorMap[service.color];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-16 lg:pt-44 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-125 h-125 bg-blue-400 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[140px] opacity-20"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to services
          </Link>

          <ScrollReveal animation="fade-left">
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${colors.bg} shadow-sm`}>
              <Icon className={`w-8 h-8 ${colors.text}`} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-3xl">
              {service.tagline}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Cover Image */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-scale">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={service.image} alt={service.title} className="w-full h-72 md:h-96 object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {service.metrics.map((metric, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 rounded-xl p-6 text-center shadow-sm">
                  <p className={`text-3xl md:text-4xl font-black ${colors.text} mb-2`}>{metric.value}</p>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">{metric.label}</p>
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
                What We Do
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {service.longDescription}
              </p>
            </div>
          </ScrollReveal>

          {/* Process */}
          <ScrollReveal animation="fade-up">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">
                Our Process
              </h2>
              <div className="space-y-6">
                {service.process.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className={`w-6 h-6 ${colors.text} shrink-0 mt-0.5`} />
                    <div>
                      <h4 className="font-black text-slate-900 dark:text-white mb-1">{step.title}</h4>
                      <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal animation="fade-scale">
            <div className="bg-linear-to-br from-indigo-600 to-blue-700 rounded-xl p-8 md:p-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-black mb-2">Ready to get started?</h3>
                <p className="text-indigo-100 font-medium max-w-md">
                  Book a free strategy call and we'll show you how we can help scale your brand.
                </p>
              </div>
              <Link
                to="/contact"
                className="shrink-0 bg-white text-indigo-600 font-bold py-3.5 px-7 rounded-lg shadow-lg hover:bg-indigo-50 transition-colors inline-flex items-center gap-2"
              >
                Book a Call <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  );
};

export default ServicePage;
