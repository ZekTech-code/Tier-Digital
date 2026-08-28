import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  Handshake,
  LineChart,
  Target,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Results over vanity",
    description:
      "We report the numbers that hit your bank account, not screenshots of in-platform dashboards.",
    color: "bg-indigo-100 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400",
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    title: "Partners, not vendors",
    description:
      "We win when you win. That's why our clients stay an average of 2.5 years with us.",
    color: "bg-emerald-100 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Radical transparency",
    description:
      "Every dollar tracked, every decision explained. You'll always know exactly what we're doing and why.",
    color: "bg-blue-100 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400",
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Compounding learning",
    description:
      "Insights from every account make every client smarter. Your campaign benefits from everything we've ever tested.",
    color: "bg-amber-100 dark:bg-amber-500/15 text-amber-600 dark:text-amber-400",
  },
];

const team = [
  { name: "David Okafor", role: "Head of Performance", image: "https://i.pravatar.cc/150?img=12" },
  { name: "Amara Bello", role: "Creative Director", image: "https://i.pravatar.cc/150?img=47" },
  { name: "Priya Nair", role: "Analytics Lead", image: "https://i.pravatar.cc/150?img=32" },
  { name: "Tunde Adeyemi", role: "Client Partner", image: "https://i.pravatar.cc/150?img=11" },
];

const About = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="about">
      <div className="absolute top-0 left-1/3 w-125 h-125 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-[140px] opacity-30 dark:opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <ScrollReveal animation="fade-left">
            <div>
              <h2 className="text-sm font-black text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-4">
                About Us
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-8 leading-tight">
                A small team obsessed with{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500">
                  one thing: your growth
                </span>
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-6">
                Tier Digital was founded in 2021 by media buyers who were tired of
                agencies hiding behind impressions and reach. We started with a
                simple promise: treat every client's budget like our own money,
                and let the results speak.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-10">
                Today we manage over $12M in annual ad spend across e-commerce,
                SaaS, and consumer apps — and that promise hasn't changed.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { value: "$30M+", label: "Client revenue driven" },
                  { value: "40+", label: "Brands scaled" },
                  { value: "94%", label: "Client retention" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl md:text-3xl font-black text-indigo-600 dark:text-indigo-400">
                      {stat.value}
                    </p>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-7 rounded-lg shadow-lg shadow-indigo-600/25 transition-all hover:-translate-y-0.5"
              >
                Meet us on a call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Team */}
          <ScrollReveal animation="fade-right">
            <div className="grid sm:grid-cols-2 gap-5">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="group bg-white dark:bg-slate-900 rounded-xl p-7 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative w-20 h-20 mx-auto mb-5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover ring-4 ring-indigo-50 dark:ring-indigo-500/20 group-hover:ring-indigo-100 dark:group-hover:ring-indigo-500/40 transition-all"
                    />
                  </div>
                  <h4 className="font-black text-slate-900 dark:text-white">
                    {member.name}
                  </h4>
                  <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mt-1">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Values */}
        <ScrollReveal animation="fade-up">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white dark:bg-slate-900 rounded-xl p-7 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className={`w-13 h-13 rounded-lg flex items-center justify-center mb-6 ${value.color}`}>
                  {value.icon}
                </div>
                <h4 className="font-black text-slate-900 dark:text-white mb-2.5">
                  {value.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
