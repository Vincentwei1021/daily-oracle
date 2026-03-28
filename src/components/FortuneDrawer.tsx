"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { getDailyFortune, getTodayDateStr, LEVEL_LABELS, type Fortune } from "@/data/fortunes";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, RotateCcw } from "lucide-react";
import { toast } from "sonner";

type Lang = "en" | "zh";

export default function FortuneDrawer() {
  const [fortune, setFortune] = useState<Fortune | null>(null);
  const [phase, setPhase] = useState<"idle" | "drawing" | "reveal">("idle");
  const [lang, setLang] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
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
    ? `${level?.emoji} ${lang === "en" ? level?.en : level?.zh} — ${t.overall}\n\n🔮 Draw your fortune: fortune.toolboxlite.com`
    : "";

  const handleShare = async () => {
    if (navigator.share) {
      try { await navigator.share({ title: "Daily Oracle", text: shareText, url: "https://fortune.toolboxlite.com" }); } catch {}
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        toast.success(lang === "en" ? "Copied to clipboard!" : "已复制到剪贴板!");
      } catch {}
    }
  };

  if (!mounted) return <section id="draw" className="px-4 py-16 sm:px-6"><div className="mx-auto max-w-lg h-80" /></section>;

  return (
    <section id="draw" className="px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-lg">
        {/* Language toggle */}
        <div className="mb-8 flex justify-center">
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-brand/40 hover:text-foreground min-h-[44px]"
          >
            <span className="text-xs tracking-widest uppercase">
              {lang === "en" ? "中文" : "English"}
            </span>
          </button>
        </div>

        {/* IDLE: Tarot draw card */}
        {phase === "idle" && (
          <div className="flex flex-col items-center animate-fade-in">
            <div className="animate-float mb-10">
              <button
                onClick={draw}
                className="group relative w-52 h-72 rounded-lg fortune-card-bg shadow-2xl flex items-center justify-center cursor-pointer animate-glow transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                {/* Ornate inner border */}
                <div className="absolute inset-[8px] rounded-md border border-amber-300/30" />
                <div className="absolute inset-[12px] rounded border border-amber-300/15" />

                {/* Corner ornaments */}
                <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-amber-300/40" />
                <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-amber-300/40" />
                <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-amber-300/40" />
                <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-amber-300/40" />

                {/* Central content */}
                <div className="text-center relative z-10">
                  <div className="text-amber-100/80 text-xs tracking-[0.3em] uppercase mb-3 font-medium">
                    {lang === "en" ? "Reveal" : "揭示"}
                  </div>
                  <div className="w-12 h-px bg-amber-300/30 mx-auto mb-4" />
                  <div className="font-[family-name:var(--font-heading)] text-amber-50 text-2xl mb-4">
                    {lang === "en" ? "Your" : "你的"}
                    <br />
                    {lang === "en" ? "Fortune" : "运势"}
                  </div>
                  <div className="w-12 h-px bg-amber-300/30 mx-auto mb-3" />
                  <div className="text-amber-200/60 text-xs tracking-[0.2em] uppercase">
                    {lang === "en" ? "Tap to draw" : "点击抽签"}
                  </div>
                </div>

                {/* Subtle sparkle accents */}
                <div className="absolute top-6 right-6 text-amber-200/40 text-sm animate-sparkle">✦</div>
                <div className="absolute bottom-6 left-6 text-amber-200/40 text-sm animate-sparkle" style={{ animationDelay: "0.7s" }}>✦</div>
                <div className="absolute top-1/3 left-5 text-amber-200/30 text-xs animate-sparkle" style={{ animationDelay: "1.4s" }}>✧</div>
              </button>
            </div>
            <p className="text-muted-foreground text-center text-sm">
              {lang === "en" ? "Tap the card to reveal today's fortune" : "点击卡牌揭示今日运势"}
            </p>
            <p className="text-xs text-muted-foreground/50 mt-2">
              {lang === "en" ? "Your fortune refreshes daily at midnight" : "运势每日午夜刷新"}
            </p>
          </div>
        )}

        {/* DRAWING: Animation */}
        {phase === "drawing" && (
          <div className="flex flex-col items-center">
            <div className="w-52 h-72 rounded-lg fortune-card-bg shadow-2xl flex items-center justify-center animate-flip">
              <div className="animate-shimmer w-full h-full rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="font-[family-name:var(--font-heading)] text-amber-50/80 text-xl">
                    ✦ ✦ ✦
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-8 text-brand font-medium animate-pulse text-sm tracking-wide">
              {lang === "en" ? "The oracle speaks..." : "神谕降临..."}
            </p>
          </div>
        )}

        {/* REVEAL: Fortune card */}
        {phase === "reveal" && fortune && t && level && (
          <div className="animate-scale-in" ref={cardRef}>
            <Card className="rounded-lg overflow-hidden p-0 gap-0 border-brand/20 shadow-lg">
              {/* Header — fortune level */}
              <div className="fortune-card-bg px-6 py-6 text-center relative">
                {/* Inner decoration */}
                <div className="absolute inset-x-4 top-3 bottom-3 border border-amber-300/20 rounded" />
                <p className="text-amber-100/60 text-[11px] tracking-[0.25em] uppercase mb-2 relative z-10">
                  {lang === "en" ? "Today's Fortune" : "今日运势"} — {getTodayDateStr()}
                </p>
                <div className="flex items-center justify-center gap-3 relative z-10">
                  <span className="text-amber-200/50 text-sm">✦</span>
                  <h2 className="text-2xl font-[family-name:var(--font-heading)] text-amber-50 tracking-wide">
                    {lang === "en" ? level.en : level.zh}
                  </h2>
                  <span className="text-amber-200/50 text-sm">✦</span>
                </div>
              </div>

              {/* Overall quote */}
              <div className="px-6 py-5 border-b border-border">
                <p className="text-center text-base leading-relaxed italic text-card-foreground font-[family-name:var(--font-heading)]">
                  &ldquo;{t.overall}&rdquo;
                </p>
              </div>

              {/* Category grid */}
              <div className="grid grid-cols-2 gap-0">
                {([
                  { icon: "💼", label: lang === "en" ? "Career" : "事业", text: t.career },
                  { icon: "❤️", label: lang === "en" ? "Love" : "爱情", text: t.love },
                  { icon: "💰", label: lang === "en" ? "Wealth" : "财运", text: t.wealth },
                  { icon: "🏥", label: lang === "en" ? "Health" : "健康", text: t.health },
                ] as const).map((cat, i) => (
                  <div
                    key={cat.label}
                    className={`px-5 py-4 animate-fade-in-up ${i < 2 ? "border-b border-border" : ""} ${i % 2 === 0 ? "border-r border-border" : ""}`}
                    style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-base">{cat.icon}</span>
                      <span className="text-[11px] font-semibold text-brand uppercase tracking-wider">{cat.label}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cat.text}</p>
                  </div>
                ))}
              </div>

              {/* Lucky section */}
              <div className="px-6 py-3.5 bg-brand/5 text-center border-t border-border">
                <span className="text-[11px] font-semibold text-brand tracking-wider uppercase">
                  {lang === "en" ? "Lucky" : "幸运"}:
                </span>
                <span className="text-sm text-card-foreground ml-2">{t.lucky}</span>
              </div>
            </Card>

            {/* Action buttons */}
            <div className="mt-6 flex justify-center gap-3">
              <Button onClick={handleShare} className="rounded-full bg-brand text-primary-foreground hover:bg-brand-hover px-6 min-h-[44px]">
                <Share2 className="mr-2 h-4 w-4" />
                {lang === "en" ? "Share" : "分享"}
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-6 min-h-[44px]"
                onClick={() => { setPhase("idle"); setFortune(null); localStorage.removeItem("oracle_date"); }}
              >
                <RotateCcw className="mr-2 h-4 w-4" />
                {lang === "en" ? "Draw Again" : "重新抽签"}
              </Button>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground/60">
              {lang === "en" ? "Same fortune all day — refreshes at midnight" : "同一签文全天有效 — 午夜刷新"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
