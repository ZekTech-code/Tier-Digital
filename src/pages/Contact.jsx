import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Mail,
  MessageSquareText,
  Send,
} from "lucide-react";
import PageHeader from "../components/PageHeader";

const budgetOptions = [
  "Under $5k / month",
  "$5k – $15k / month",
  "$15k – $50k / month",
  "$50k – $150k / month",
  "$150k+ / month",
];

const serviceOptions = [
  "Paid Social Advertising",
  "UGC & Creative Studio",
  "Email & SMS Marketing",
  "Landing Page Optimization",
  "Analytics & Attribution",
];

const steps = [
  {
    title: "We reply within 24 hours",
    description:
      "A real human from our strategy team reads every message — no auto-responders.",
  },
  {
    title: "Free 30-minute strategy call",
    description:
      "We dig into your current numbers, goals, and where the biggest opportunities are hiding.",
  },
  {
    title: "You get a growth plan",
    description:
      "Whether we work together or not, you leave the call with actionable recommendations.",
  },
];

const Contact = () => {
  const [searchParams] = useSearchParams();
  const applyingRole = searchParams.get("role");

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    budget: "",
    services: [],
    message: applyingRole ? `I'd like to apply for the ${applyingRole} position.` : "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleService = (service) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Please enter a valid email";
    if (!form.message.trim()) newErrors.message = "Tell us a little about your project";
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setSubmitted(true);
  };

  const inputClass =
    "w-full bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl px-5 py-4 text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all";

  return (
    <>
      <PageHeader
        eyebrow={applyingRole ? "Join the team" : "Work With Us"}
        title={
          applyingRole ? (
            <>
              Apply for{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400">
                {applyingRole}
              </span>
            </>
          ) : (
            <>
              Let's build your{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-400">
                growth engine
              </span>
            </>
          )
        }
        description={
          applyingRole
            ? "Tell us about yourself and share your work. We review every application personally and respond within a week."
            : "Tell us where you are and where you want to be. We'll show you the gap — and exactly how we'd close it."
        }
      />

      <section className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 md:p-14 text-center h-full flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-emerald-50 dark:bg-emerald-500/15 flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4">
                  Message received{form.name ? `, ${form.name.split(" ")[0]}` : ""}!
                </h2>
                <p className="text-slate-600 dark:text-slate-300 font-medium max-w-md leading-relaxed mb-8">
                  Thanks for reaching out. Someone from our team will get back
                  to you at{" "}
                  <span className="font-bold text-slate-900 dark:text-white">{form.email}</span>{" "}
                  within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-indigo-600 dark:text-indigo-400 font-bold hover:text-indigo-800 transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-10"
              >
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">
                      Full name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Cooper"
                      className={inputClass}
                    />
                    {errors.name && (
                      <p className="text-sm text-rose-500 font-medium mt-1.5">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">
                      Work email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={inputClass}
                    />
                    {errors.email && (
                      <p className="text-sm text-rose-500 font-medium mt-1.5">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={form.website}
                      onChange={handleChange}
                      placeholder="https://acme.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                {!applyingRole && (
                  <>
                    <div className="mb-6">
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-3">
                        Monthly ad budget
                      </label>
                      <div className="flex flex-wrap gap-2.5">
                        {budgetOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setForm({ ...form, budget: option })}
                            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                              form.budget === option
                                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25"
                                : "bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-3">
                        What do you need help with?
                      </label>
                      <div className="flex flex-wrap gap-2.5">
                        {serviceOptions.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                              form.services.includes(service)
                                ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/25"
                                : "bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                            }`}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                <div className="mb-8">
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-200 mb-2">
                    {applyingRole ? "About you *" : "Your project *"}
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder={
                      applyingRole
                        ? "Tell us about your experience, links to your work…"
                        : "What are you selling, who are your customers, and what does growth look like right now?"
                    }
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-sm text-rose-500 font-medium mt-1.5">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-9 rounded-full shadow-lg shadow-indigo-600/25 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  {applyingRole ? "Submit application" : "Send message"}
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-2 space-y-6">
            <div className="bg-linear-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-white opacity-10 rounded-full blur-3xl"></div>
              <h3 className="text-xl font-black mb-6 relative z-10">
                What happens next
              </h3>
              <ol className="space-y-6 relative z-10">
                {steps.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-white/15 backdrop-blur border border-white/20 flex items-center justify-center font-black text-sm">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-bold">{step.title}</p>
                      <p className="text-indigo-100 text-sm font-medium leading-relaxed mt-1">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-8 space-y-5">
              <a
                href="mailto:hello@tierdigital.agency"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    Email us
                  </p>
                  <p className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors break-all">
                    hello@tierdigital.agency
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <CalendarClock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    Response time
                  </p>
                  <p className="font-bold text-slate-900 dark:text-white">Within 24 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                  <MessageSquareText className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    Prefer async?
                  </p>
                  <p className="font-bold text-slate-900 dark:text-white">We do too — Loom works</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 dark:bg-slate-800/80 border border-transparent dark:border-slate-700 rounded-3xl p-8 text-white">
              <p className="flex items-center gap-2 text-sm font-bold text-emerald-400 mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Currently onboarding
              </p>
              <p className="text-slate-300 font-medium leading-relaxed text-sm">
                We take on a limited number of new partners each quarter to keep
                results exceptional. Two spots remain for Q4 2026.
              </p>
              <ArrowRight className="w-5 h-5 text-slate-600 mt-5" />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Contact;
