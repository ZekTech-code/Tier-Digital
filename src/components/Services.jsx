import React from "react";
import { Link } from "react-router-dom";
import {
  Megaphone,
  Video,
  MousePointerClick,
  Mail,
  LineChart,
  ArrowRight
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const serviceSlugs = [
  "paid-social-advertising",
  "ugc-creative-studio",
  "conversion-rate-optimization",
  "email-sms-marketing",
  "advanced-analytics",
];

const Services = () => {
  const services = [
    {
      title: "Paid Social Advertising",
      description: "Data-backed Facebook, Instagram, and TikTok ads designed to scale your revenue with precision targeting.",
      icon: <Megaphone className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      color: "bg-indigo-100 dark:bg-indigo-500/15",
      slug: serviceSlugs[0],
    },
    {
      title: "UGC & Creative Studio",
      description: "Scroll-stopping video and image creatives optimized specifically for social platform algorithms.",
      icon: <Video className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
      color: "bg-rose-100 dark:bg-rose-500/15",
      slug: serviceSlugs[1],
    },
    {
      title: "Rate Optimization",
      description: "We optimize your landing pages to ensure the traffic we drive actually converts into paying customers.",
      icon: <MousePointerClick className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
      color: "bg-emerald-100 dark:bg-emerald-500/15",
      slug: serviceSlugs[2],
    },
    {
      title: "Email & SMS Marketing",
      description: "Maximize lifetime value through highly targeted automated email flows and SMS campaigns.",
      icon: <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      color: "bg-blue-100 dark:bg-blue-500/15",
      slug: serviceSlugs[3],
    },
    {
      title: "Advanced Analytics",
      description: "Full-funnel attribution and dashboarding so you know exactly where every single dollar is going.",
      icon: <LineChart className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
      color: "bg-amber-100 dark:bg-amber-500/15",
      slug: serviceSlugs[4],
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <ScrollReveal animation="fade-left">
          <div className="max-w-3xl mb-20">
            <h2 className="text-sm font-black text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
              Everything you need to{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400">dominate your market</span>
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 font-medium pt-2">
              We don't just run ads. We provide an end-to-end growth ecosystem designed to scale your brand profitably.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              to={`/services/${service.slug}`}
              key={index}
              className="group relative bg-white dark:bg-slate-900 rounded-xl p-8 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden flex flex-col"
            >
              <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-8 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 ${service.color} shadow-sm`}>
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h4>
              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-10 grow">
                {service.description}
              </p>

              <div className="mt-auto flex items-center text-indigo-600 dark:text-indigo-400 font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Learn more <ArrowRight className="w-5 h-5 ml-2" />
              </div>
            </Link>
          ))}

          {/* Special CTA Card to fill the 6th spot */}
          <div className="relative bg-linear-to-br from-indigo-600 to-blue-700 rounded-xl p-8 text-white overflow-hidden flex flex-col justify-center items-start group cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-indigo-600/30 transition-all duration-300 hover:-translate-y-1">
             {/* Background glow effect inside card */}
             <div className="absolute -top-24 -right-24 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

             <h4 className="text-3xl font-black mb-4 relative z-10 leading-tight">Ready to scale?</h4>
             <p className="text-indigo-100 mb-10 max-w-sm relative z-10 font-medium text-lg">
               Book a free strategy session to see how much revenue you're leaving on the table.
             </p>
             <Link
               to="/contact"
               className="bg-white text-indigo-600 font-bold py-3.5 px-6 rounded-lg shadow-lg flex items-center gap-2 hover:bg-indigo-50 transition-colors relative z-10 w-full sm:w-auto justify-center group-hover:shadow-indigo-900/20">
               Get Your Free Audit
               <ArrowRight className="w-5 h-5 ml-1" />
             </Link>
          </div>

        </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
