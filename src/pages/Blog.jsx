import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import { blogPosts, postCategories } from "../data/blogPosts";

const authorColors = {
  "David Okafor": "from-indigo-500 to-blue-600",
  "Amara Bello": "from-purple-500 to-pink-500",
  "Priya Nair": "from-emerald-500 to-teal-500",
  "Tunde Adeyemi": "from-orange-500 to-amber-500",
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const featured = blogPosts.find((p) => p.featured) || blogPosts[0];
  const rest = activeCategory === "All" ? filtered : filtered.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <PageHeader
        eyebrow="The Tier Blog"
        description="Field notes from the front lines of paid social, frameworks, teardowns, and honest data from campaigns we run every day."
      />

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <Link
              to={`/blog/${featured.slug}`}
              className="group grid lg:grid-cols-2 gap-10 items-center bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
            >
            <div className="relative h-72 lg:h-full min-h-80 overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-5 left-5 px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                Featured
              </span>
            </div>
            <div className="p-8 lg:p-12">
              <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-5">
                <span className="text-indigo-600 dark:text-indigo-400">{featured.category}</span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="w-3.5 h-3.5" /> {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {featured.readTime}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {featured.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-8">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-linear-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white font-black text-sm">
                    {featured.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {featured.author}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {featured.authorRole}
                    </p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-sm font-bold text-indigo-600 dark:text-indigo-400">
                  Read article{" "}
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Filter + Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-wrap gap-3 mb-14">
            {postCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25"
                    : "bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-500/15 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className={`ml-1.5 text-xs ${activeCategory === cat ? "text-indigo-200" : "text-slate-400 dark:text-slate-500"}`}>
                    ({blogPosts.filter((p) => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed text-sm mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-200/70 dark:border-slate-700/60">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-full bg-linear-to-br ${authorColors[post.author] || "from-indigo-500 to-blue-600"} flex items-center justify-center text-white text-[11px] font-black shrink-0`}>
                        {post.author.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-700 dark:text-slate-200 leading-tight">{post.author}</p>
                        <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">{post.authorRole}</p>
                      </div>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-bold text-indigo-600 dark:text-indigo-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      Read <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          </ScrollReveal>

          {rest.length === 0 && (
            <p className="text-center text-slate-500 dark:text-slate-400 font-medium py-12">
              More articles in this category are on the way.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
