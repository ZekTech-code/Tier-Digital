import React, { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw, RotateCw, Volume2, VolumeX } from "lucide-react";

const formatTime = (secs) => {
  if (!Number.isFinite(secs)) return "0:00";
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const AudioPlayer = ({
  src,
  isPlaying,
  onTogglePlay,
  onEnded,
  compact = false,
}) => {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Sync external play state with the audio element
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play().catch(() => setError(true));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = muted;
    }
  }, [volume, muted]);

  const handleTimeUpdate = () => setCurrentTime(audioRef.current.currentTime);

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
    setLoading(false);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    audio.currentTime = ratio * duration;
    setCurrentTime(audio.currentTime);
  };

  const skip = (seconds) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(
      Math.max(audio.currentTime + seconds, 0),
      duration || audio.duration || 0
    );
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="w-full">
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onCanPlay={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
        onEnded={onEnded}
      />

      {/* Progress bar */}
      <div
        onClick={handleSeek}
        className={`group relative h-2 rounded-full cursor-pointer transition-colors ${
          error ? "bg-rose-200 dark:bg-rose-900/40" : "bg-slate-200 dark:bg-slate-700"
        }`}
        role="slider"
        aria-label="Seek"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
      >
        <div
          className="absolute inset-y-0 left-0 bg-linear-to-r from-indigo-500 to-blue-400 rounded-full pointer-events-none"
          style={{ width: `${progress}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md border border-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{ left: `calc(${progress}% - 7px)` }}
        />
      </div>

      {/* Controls row */}
      <div className="flex items-center gap-3 mt-3 overflow-hidden">
        <button
          onClick={onTogglePlay}
          disabled={error}
          aria-label={isPlaying ? "Pause" : "Play"}
          className={`shrink-0 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
            compact ? "w-11 h-11" : "w-13 h-13"
          } ${isPlaying ? "bg-indigo-500" : "bg-indigo-600 hover:bg-indigo-500"}`}
        >
          {loading && !error ? (
            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
          ) : isPlaying ? (
            <Pause className={`${compact ? "w-5 h-5" : "w-6 h-6"} fill-current`} />
          ) : (
            <Play className={`${compact ? "w-5 h-5" : "w-6 h-6"} fill-current ml-0.5`} />
          )}
        </button>

        {!compact && (
          <>
            <button
              onClick={() => skip(-15)}
              aria-label="Back 15 seconds"
              className="text-slate-400 hover:text-indigo-500 dark:text-slate-500 dark:hover:text-indigo-400 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4.5 h-4.5" />
            </button>
            <button
              onClick={() => skip(15)}
              aria-label="Forward 15 seconds"
              className="text-slate-400 hover:text-indigo-500 dark:text-slate-500 dark:hover:text-indigo-400 transition-colors cursor-pointer"
            >
              <RotateCw className="w-4.5 h-4.5" />
            </button>
          </>
        )}

        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tabular-nums shrink-0">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        {error && (
          <span className="text-xs font-bold text-rose-500 truncate">
            Audio unavailable
          </span>
        )}

        <div className="ml-auto flex items-center gap-2 shrink-0 min-w-0">
          <button
            onClick={() => setMuted(!muted)}
            aria-label={muted ? "Unmute" : "Mute"}
            className="text-slate-400 hover:text-indigo-500 dark:text-slate-500 dark:hover:text-indigo-400 transition-colors cursor-pointer shrink-0"
          >
            {muted || volume === 0 ? (
              <VolumeX className="w-4.5 h-4.5" />
            ) : (
              <Volume2 className="w-4.5 h-4.5" />
            )}
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={muted ? 0 : volume}
            onChange={(e) => {
              setVolume(parseFloat(e.target.value));
              setMuted(false);
            }}
            aria-label="Volume"
            className="w-14 sm:w-20 h-1 accent-indigo-500 cursor-pointer min-w-0"
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
