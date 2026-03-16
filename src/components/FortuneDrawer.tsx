"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { getDailyFortune, getTodayDateStr, LEVEL_LABELS, type Fortune } from "@/data/fortunes";

type Lang = "en" | "zh";

export default function FortuneDrawer() {
  const [fortune, setFortune] = useState<Fortune | null>(null);
  const [phase, setPhase] = useState<"idle" | "drawing" | "reveal">("idle");
  const [lang, setLang] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    // Check if already drawn today
    const today = getTodayDateStr();
    const saved = localStorage.getItem("oracle_date");
    if (saved === today) {
      setFortune(getDailyFortune(today));
      setPhase("reveal");
    }
    const savedLang = localStorage.getItem("oracle_lang") as Lang;
    if (savedLang) setLang(savedLang);
  }, []);

  const draw = useCallback(() => {
    setPhase("drawing");
    const today = getTodayDateStr();
    setTimeout(() => {
      const f = getDailyFortune(today);
      setFortune(f);
      localStorage.setItem("oracle_date", today);
      setPhase("reveal");
    }, 1800);
  }, []);

  const toggleLang = () => {
    const next = lang === "en" ? "zh" : "en";
    setLang(next);
    localStorage.setItem("oracle_lang", next);
  };

  const t = fortune?.[lang];
  const level = fortune ? LEVEL_LABELS[fortune.level] : null;

  const shareText = fortune && t
    ? `${level?.emoji} ${lang === "en" ? level?.en : level?.zh} — ${t.overall}\n\n✨ Draw your fortune: daily-oracle.vercel.app`
    : "";

  const handleShare = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: "Daily Oracle", text: shareText, url: "https://daily-oracle.vercel.app" }); } catch {}
    } else {
      try { await navigator.clipboard.writeText(shareText); } catch {}
    }
  };

  if (!mounted) return <section id="draw" className="px-4 py-16 sm:px-6"><div className="mx-auto max-w-lg h-80" /></section>;

  return (
    <section id="draw" className="px-4 py-8 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-lg">
        {/* Language toggle */}
        <div className="mb-6 flex justify-center">
          <button onClick={toggleLang} className="rounded-full border border-amber-300 bg-white px-5 py-2.5 text-sm font-medium text-amber-700 transition-colors hover:bg-amber-50">
            {lang === "en" ? "🇨🇳 中文" : "🇺🇸 English"}
          </button>
        </div>

        {/* IDLE: Draw button */}
        {phase === "idle" && (
          <div className="flex flex-col items-center animate-fade-in">
            <div className="animate-float mb-8">
              <div className="relative w-48 h-64 rounded-2xl bg-gradient-to-b from-amber-600 to-amber-800 shadow-2xl flex items-center justify-center cursor-pointer animate-glow" onClick={draw}>
                <div className="absolute inset-2 rounded-xl border-2 border-amber-400/50" />
                <div className="text-center">
                  <div className="text-5xl mb-3">🔮</div>
                  <p className="text-amber-100 font-bold text-lg">
                    {lang === "en" ? "Draw" : "抽签"}
                  </p>
                </div>
                {/* Sparkles */}
                <div className="absolute -top-2 -right-2 text-2xl animate-sparkle">✨</div>
                <div className="absolute -bottom-1 -left-2 text-xl animate-sparkle" style={{ animationDelay: "0.5s" }}>⭐</div>
                <div className="absolute top-4 -left-3 text-lg animate-sparkle" style={{ animationDelay: "1s" }}>💫</div>
              </div>
            </div>
            <p className="text-gray-600 text-center">
              {lang === "en" ? "Tap the card to reveal today's fortune" : "点击卡牌揭示今日运势"}
            </p>
            <p className="text-xs text-gray-400 mt-2">
              {lang === "en" ? "Your fortune refreshes daily" : "运势每日刷新"}
            </p>
          </div>
        )}

        {/* DRAWING: Animation */}
        {phase === "drawing" && (
          <div className="flex flex-col items-center">
            <div className="w-48 h-64 rounded-2xl bg-gradient-to-b from-amber-600 to-amber-800 shadow-2xl flex items-center justify-center animate-flip">
              <div className="animate-shimmer w-full h-full rounded-2xl flex items-center justify-center">
                <div className="text-5xl">🔮</div>
              </div>
            </div>
            <p className="mt-6 text-amber-700 font-semibold animate-pulse">
              {lang === "en" ? "The oracle is speaking..." : "神谕正在降临..."}
            </p>
          </div>
        )}

        {/* REVEAL: Fortune card */}
        {phase === "reveal" && fortune && t && level && (
          <div className="animate-fade-in" ref={cardRef}>
            {/* Fortune Card */}
            <div className="rounded-3xl bg-gradient-to-b from-amber-50 to-white border-2 border-amber-200 shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 px-6 py-5 text-center">
                <p className="text-amber-100 text-xs tracking-widest uppercase mb-1">
                  {lang === "en" ? "Today's Fortune" : "今日运势"} — {getTodayDateStr()}
                </p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-3xl">{level.emoji}</span>
                  <h2 className="text-2xl font-bold text-white">
                    {lang === "en" ? level.en : level.zh}
                  </h2>
                  <span className="text-3xl">{level.emoji}</span>
                </div>
              </div>

              {/* Overall */}
              <div className="px-6 py-5 border-b border-amber-100">
                <p className="text-center text-lg font-medium text-gray-800 leading-relaxed italic">
                  &ldquo;{t.overall}&rdquo;
                </p>
              </div>

              {/* Categories */}
              <div className="grid grid-cols-2 gap-0">
                {[
                  { icon: "💼", label: lang === "en" ? "Career" : "事业", text: t.career },
                  { icon: "❤️", label: lang === "en" ? "Love" : "爱情", text: t.love },
                  { icon: "💰", label: lang === "en" ? "Wealth" : "财运", text: t.wealth },
                  { icon: "🏥", label: lang === "en" ? "Health" : "健康", text: t.health },
                ].map((cat, i) => (
                  <div key={cat.label} className={`px-5 py-4 ${i < 2 ? "border-b border-amber-100" : ""} ${i % 2 === 0 ? "border-r border-amber-100" : ""}`}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-lg">{cat.icon}</span>
                      <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">{cat.label}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{cat.text}</p>
                  </div>
                ))}
              </div>

              {/* Lucky */}
              <div className="px-6 py-4 bg-amber-50 text-center">
                <span className="text-xs font-semibold text-amber-600">
                  🍀 {lang === "en" ? "Lucky" : "幸运"}:
                </span>
                <span className="text-sm text-gray-700 ml-2">{t.lucky}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-6 flex justify-center gap-3">
              <button onClick={handleShare} className="rounded-full bg-amber-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-amber-700">
                📤 {lang === "en" ? "Share" : "分享"}
              </button>
              <button onClick={() => { setPhase("idle"); setFortune(null); localStorage.removeItem("oracle_date"); }} className="rounded-full border border-amber-300 bg-white px-6 py-2.5 text-sm font-semibold text-amber-700 transition-colors hover:bg-amber-50">
                🔄 {lang === "en" ? "Draw Again" : "重新抽签"}
              </button>
            </div>
            <p className="mt-3 text-center text-xs text-gray-400">
              {lang === "en" ? "Same fortune all day — refreshes at midnight" : "同一签文全天有效——午夜刷新"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
