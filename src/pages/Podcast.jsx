import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CalendarDays,
  Clock,
  Headphones,
  Mic,
} from "lucide-react";
import { FaSpotify, FaApple, FaYoutube } from "react-icons/fa";
import AudioPlayer from "../components/AudioPlayer";
import PageHeader from "../components/PageHeader";
import ScrollReveal from "../components/ScrollReveal";
import { podcast, episodes } from "../data/podcastEpisodes";

const platformIcons = {
  Spotify: <FaSpotify className="w-5 h-5" />,
  "Apple Podcasts": <FaApple className="w-5 h-5" />,
  YouTube: <FaYoutube className="w-5 h-5" />,
};

const Podcast = () => {
  const [activeId, setActiveId] = useState(null);

  const latest = episodes[0];
  const rest = episodes.slice(1);

  const togglePlay = (id) =>
    setActiveId((current) => (current === id ? null : id));

  return (
    <>
      <PageHeader
        eyebrow="The Scale Sessions Podcast"
        description="Unfiltered conversations with founders and marketers who scaled past seven figures, the wins, the expensive mistakes, and the numbers behind both."
      >
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {podcast.platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-2.5 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg font-bold text-sm text-slate-700 dark:text-slate-200 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:-translate-y-0.5 transition-all"
            >
              {platformIcons[platform.name]}
              {platform.name}
            </a>
          ))}
        </div>
        <p className="mt-6 text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
          {podcast.schedule}
        </p>
      </PageHeader>

      {/* Latest Episode */}
      <section className="py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col sm:flex-row bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg">
            <div className="relative w-full sm:w-72 lg:w-80 shrink-0 h-48 sm:h-auto">
              <img src={latest.image} alt={latest.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-black/20"></div>
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-indigo-600 rounded-md shadow-lg">
                <Mic className="w-3 h-3 text-white" />
                <span className="text-white text-[11px] font-bold">Latest</span>
              </div>
            </div>
            <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between min-w-0">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">
                  <span>{latest.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                  <span>{latest.duration}</span>
                </div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white mb-1 leading-snug">{latest.title}</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{latest.guest} · {latest.guestRole}</p>
              </div>
              <div className="mt-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl p-3 border border-slate-100 dark:border-slate-700">
                <AudioPlayer src={latest.audio} isPlaying={activeId === latest.id} onTogglePlay={() => togglePlay(latest.id)} onEnded={() => setActiveId(null)} />
              </div>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Episode Archive */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-left">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                Episode archive
              </h2>
              <span className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400">
                <Headphones className="w-4 h-4" /> {episodes.length} episodes
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
          <div className="space-y-4">
            {rest.map((ep) => {
              const isActive = activeId === ep.id;
              return (
                <div
                  key={ep.id}
                  className={`group bg-white dark:bg-slate-900 rounded-xl p-6 md:p-7 transition-all duration-300 ${
                    isActive
                      ? "shadow-xl shadow-indigo-500/10 ring-1 ring-indigo-200 dark:ring-indigo-500/30"
                      : "shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                    <div className="w-14 h-14 shrink-0 overflow-hidden ring-2 ring-slate-100 dark:ring-slate-700">
                      <img
                        src={ep.image}
                        alt={ep.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">
                        <span>{ep.date}</span>
                        <span>{ep.duration}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-black text-slate-900 dark:text-white leading-snug mb-1.5">
                        {ep.title}
                      </h3>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {ep.guest} · {ep.guestRole}
                      </p>
                    </div>

                    <div className="flex sm:flex-col items-center gap-2 shrink-0">
                      {ep.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[11px] font-bold uppercase tracking-wide rounded-md whitespace-nowrap"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 font-medium leading-relaxed text-sm mt-5 pt-5 border-t border-slate-200/70 dark:border-slate-700/60">
                    {ep.description}
                  </p>

                  {/* Real inline player */}
                  <div className="mt-5">
                    <AudioPlayer
                      compact
                      src={ep.audio}
                      isPlaying={isActive}
                      onTogglePlay={() => togglePlay(ep.id)}
                      onEnded={() => setActiveId(null)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-scale">
          {/* Guest CTA */}
          <div className="mt-16 bg-linear-to-br from-indigo-600 to-blue-700 rounded-xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl"></div>
            <h3 className="text-2xl md:text-3xl font-black mb-3 relative z-10">
              Got a growth story to share?
            </h3>
            <p className="text-indigo-100 font-medium max-w-xl mx-auto mb-8 relative z-10">
              We're always looking for founders and operators who've built
              something interesting. Pitch yourself as a guest.
            </p>
            <Link
              to="/contact"
              className="relative z-10 inline-flex items-center gap-2 bg-white text-indigo-600 font-bold py-3.5 px-8 rounded-lg shadow-lg hover:bg-indigo-50 transition-colors"
            >
              Pitch a guest spot <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Podcast;
