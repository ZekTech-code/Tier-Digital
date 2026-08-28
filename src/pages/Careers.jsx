import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Globe,
  Heart,
  MapPin,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { teamMembers, hiringSteps } from "../data/jobs";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import { benefits, openings } from "../data/jobs";

const Careers = () => {
  const [openJob, setOpenJob] = useState(null);
  const [department, setDepartment] = useState("All");

  const departments = ["All", ...new Set(openings.map((j) => j.department))];
  const filtered =
    department === "All"
      ? openings
      : openings.filter((j) => j.department === department);

  const iconMap = {
    Globe,
    BookOpen,
    Award,
    Heart,
    Calendar,
    TrendingUp,
  };

  const colorMap = {
    indigo: {
      bg: "bg-indigo-50 dark:bg-indigo-500/15",
      text: "text-indigo-600 dark:text-indigo-400",
      hover: "hover:border-indigo-200 dark:hover:border-indigo-500/40",
    },
    blue: {
      bg: "bg-blue-50 dark:bg-blue-500/15",
      text: "text-blue-600 dark:text-blue-400",
      hover: "hover:border-blue-200 dark:hover:border-blue-500/40",
    },
    emerald: {
      bg: "bg-emerald-50 dark:bg-emerald-500/15",
      text: "text-emerald-600 dark:text-emerald-400",
      hover: "hover:border-emerald-200 dark:hover:border-emerald-500/40",
    },
    rose: {
      bg: "bg-rose-50 dark:bg-rose-500/15",
      text: "text-rose-600 dark:text-rose-400",
      hover: "hover:border-rose-200 dark:hover:border-rose-500/40",
    },
    amber: {
      bg: "bg-amber-50 dark:bg-amber-500/15",
      text: "text-amber-600 dark:text-amber-400",
      hover: "hover:border-amber-200 dark:hover:border-amber-500/40",
    },
    purple: {
      bg: "bg-purple-50 dark:bg-purple-500/15",
      text: "text-purple-600 dark:text-purple-400",
      hover: "hover:border-purple-200 dark:hover:border-purple-500/40",
    },
  };

  return (
    <>
        <PageHeader
          eyebrow="Careers at Tier"
          description="We're a small, senior team building the growth agency we always wished existed. No bureaucracy, no busywork, just sharp people solving real problems for ambitious brands."
        >
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {[
            { value: "100%", label: "Remote-first" },
            { value: "12", label: "Team members" },
            { value: "$30M+", label: "Client revenue driven" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-black text-indigo-600 dark:text-indigo-400">{stat.value}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </PageHeader>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-left">
            <div className="max-w-2xl mb-16">
              <h2 className="text-sm font-black text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-4">
                Why Tier
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Built for people who like to{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400">
                  ship and grow
                </span>
              </h3>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => {
              const Icon = iconMap[benefit.icon];
              const colors = colorMap[benefit.color];
              return (
                <div
                  key={benefit.title}
                  className={`bg-white dark:bg-slate-900 rounded-xl p-7 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up opacity-0 animate-delay-${(i % 4) * 100}`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${colors.bg}`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h4 className="font-black text-slate-900 dark:text-white mb-2.5 text-lg">
                    {benefit.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Life at Tier */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-right">
            <div className="max-w-2xl mb-16">
              <h2 className="text-sm font-black text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-4">
                Life at Tier
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Hear from the{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400">
                  people who build it
                </span>
              </h3>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div
                key={member.name}
                className={`bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in-up opacity-0 animate-delay-${(i + 1) * 100}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-black text-slate-900 dark:text-white">
                      {member.name}
                    </h4>
                    <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                      {member.role}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed text-sm italic pl-4 border-l-2 border-indigo-200 dark:border-indigo-800">
                    &ldquo;{member.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-20" id="openings">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-left">
            <div className="max-w-2xl mb-12">
              <h2 className="text-sm font-black text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-4">
                Open Positions
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                {openings.length} roles open right now
              </h3>
            </div>
          </ScrollReveal>

          {/* Department filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {departments.map((dept) => {
              const count = dept === "All" ? openings.length : openings.filter((j) => j.department === dept).length;
              return (
                <button
                  key={dept}
                  onClick={() => setDepartment(dept)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    department === dept
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25"
                      : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-500/15 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700"
                  }`}
                >
                  {dept}
                  <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    department === dept
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="space-y-4">
            {filtered.map((job) => {
              const isOpen = openJob === job.id;
              return (
                <div
                  key={job.id}
                  className={`bg-white dark:bg-slate-900 rounded-xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "shadow-xl shadow-indigo-500/10 ring-1 ring-indigo-200 dark:ring-indigo-500/30"
                      : "shadow-sm hover:shadow-md"
                  }`}
                >
                  <button
                    onClick={() => setOpenJob(isOpen ? null : job.id)}
                    className="w-full flex items-center gap-5 p-6 md:p-7 text-left cursor-pointer"
                  >
                    <div
                      className={`w-12 h-12 shrink-0 rounded-lg flex items-center justify-center transition-colors ${
                        isOpen
                          ? "bg-indigo-600 text-white"
                          : "bg-indigo-50 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400"
                      }`}
                    >
                      <Briefcase className="w-6 h-6" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-lg md:text-xl font-black transition-colors ${
                          isOpen
                            ? "text-indigo-600 dark:text-indigo-400"
                            : "text-slate-900 dark:text-white"
                        }`}
                      >
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-2 text-sm font-bold text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-indigo-400" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4 text-indigo-400" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Wallet className="w-4 h-4 text-indigo-400" />
                          {job.salary}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? "bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rotate-180"
                          : "bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500"
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 md:px-7 pb-8 pt-1">
                        <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-8">
                          {job.summary}
                        </p>

                        <div className="grid md:grid-cols-2 gap-10">
                          <div>
                            <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white mb-4">
                              What you'll do
                            </h4>
                            <ul className="space-y-3">
                              {job.responsibilities.map((item) => (
                                <li
                                  key={item}
                                  className="flex gap-3 text-slate-600 dark:text-slate-300 font-medium text-sm leading-relaxed"
                                >
                                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white mb-4">
                              What you bring
                            </h4>
                            <ul className="space-y-3">
                              {job.requirements.map((item) => (
                                <li
                                  key={item}
                                  className="flex gap-3 text-slate-600 dark:text-slate-300 font-medium text-sm leading-relaxed"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <Link
                          to={`/contact?role=${encodeURIComponent(job.title)}`}
                          className="mt-9 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-7 rounded-lg shadow-lg shadow-indigo-600/25 transition-all hover:-translate-y-0.5"
                        >
                          Apply for this role{" "}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* General application */}
          <div className="mt-14 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/50 dark:to-blue-950/50 rounded-xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2">
                  Don't see your role?
                </h3>
                <p className="text-slate-600 dark:text-slate-300 font-medium max-w-lg">
                  We hire exceptional people before we have job descriptions for
                  them. If you're great at what you do, introduce yourself, we'll
                  find a place for someone extraordinary.
                </p>
              </div>
              <Link
                to="/contact"
                className="shrink-0 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-7 rounded-lg shadow-lg shadow-indigo-600/25 transition-all hover:-translate-y-0.5"
              >
                Send an open application <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Hire */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-right">
            <div className="max-w-2xl mb-16">
              <h2 className="text-sm font-black text-indigo-600 dark:text-indigo-400 tracking-widest uppercase mb-4">
                How We Hire
              </h2>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Our process is{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400">
                  transparent and fast
                </span>
              </h3>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200 dark:bg-slate-700" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {hiringSteps.map((step, i) => (
                <div key={step.step} className={`relative animate-fade-in-up opacity-0 animate-delay-${(i + 1) * 100}`}>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-black shadow-lg shadow-indigo-600/25 relative z-10">
                      {step.step}
                    </div>
                    <h4 className="font-black text-slate-900 dark:text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 font-medium text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Careers;
