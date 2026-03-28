import Header from "@/components/Header";
import FortuneDrawer from "@/components/FortuneDrawer";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollAnimate from "@/components/ScrollAnimate";
import { Card, CardContent } from "@/components/ui/card";
import { faqData } from "@/data/faq";

const webAppSchema = {
  "@context": "https://schema.org", "@type": "WebApplication",
  name: "Daily Oracle", url: "https://fortune.toolboxlite.com",
  description: "Free daily fortune drawing tool. Get personalized daily readings for career, love, wealth, and health with beautiful animations. Inspired by traditional omikuji.",
  applicationCategory: "EntertainmentApplication", operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};
const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};
const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo",
  name: "How to Draw Your Daily Fortune",
  description: "Draw a personalized daily fortune reading using Daily Oracle.",
  step: [
    { "@type": "HowToStep", name: "Visit Daily Oracle", text: "Open fortune.toolboxlite.com in your browser." },
    { "@type": "HowToStep", name: "Tap the fortune card", text: "Click or tap the glowing fortune card to begin the drawing ritual." },
    { "@type": "HowToStep", name: "Read your fortune", text: "Your personalized daily reading appears with career, love, wealth, and health insights. Share with friends!" },
  ],
  tool: { "@type": "HowToTool", name: "Daily Oracle — Free Fortune Drawing" },
};

export default function Home() {
  return (
    <>
      <Header />
      <ScrollAnimate />
      <main>
        {/* Hero */}
        <section className="px-5 pt-14 pb-4 sm:px-8 sm:pt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] tracking-[0.3em] uppercase text-brand font-medium mb-5 animate-fade-in stagger-1">
              Inspired by Japanese Omikuji &amp; Chinese Fortune Sticks
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.15] tracking-tight animate-fade-in-up stagger-2">
              Draw Your
              <br />
              <span className="text-brand">Daily Fortune</span>
            </h1>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg leading-relaxed max-w-xl mx-auto animate-fade-in-up stagger-3">
              Tap the card to reveal today&apos;s personalized reading.
              Career, love, wealth, and health — refreshed every day.
            </p>
            <div className="mt-8 flex justify-center animate-fade-in stagger-4">
              <div className="ornament w-48">
                <span className="text-brand text-xs">✦</span>
              </div>
            </div>
          </div>
        </section>

        <FortuneDrawer />

        {/* Features */}
        <section className="px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <p className="text-[11px] tracking-[0.3em] uppercase text-brand font-medium mb-3 scroll-animate">Features</p>
              <h2 className="text-3xl font-[family-name:var(--font-heading)] tracking-tight scroll-animate">
                Why People Love Daily Oracle
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: "🎴", title: "Ritual Experience", desc: "Beautiful card-flip animation creates a mindful moment in your busy day. Each draw feels special and intentional." },
                { icon: "📊", title: "5 Life Dimensions", desc: "Get insights across career, love, wealth, health, and overall fortune. Each dimension offers unique guidance." },
                { icon: "🔄", title: "Daily Refresh", desc: "A new fortune every day, determined by the date. Same fortune all day — come back tomorrow for a fresh reading." },
                { icon: "🌏", title: "Bilingual", desc: "Full English and Chinese support. Switch between languages anytime. Fortune readings crafted in both languages." },
              ].map((f, i) => (
                <Card key={f.title} className="card-hover scroll-animate text-center p-6 border-border/60" style={{ transitionDelay: `${i * 80}ms` }}>
                  <CardContent className="p-0">
                    <div className="mb-3 text-2xl">{f.icon}</div>
                    <h3 className="mb-2 text-sm font-semibold font-[family-name:var(--font-heading)] text-foreground">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Fortune Levels */}
        <section className="px-5 py-16 sm:px-8 sm:py-20 section-warm">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-10">
              <p className="text-[11px] tracking-[0.3em] uppercase text-brand font-medium mb-3 scroll-animate">The Five Levels</p>
              <h2 className="text-3xl font-[family-name:var(--font-heading)] tracking-tight scroll-animate">
                Fortune Levels Explained
              </h2>
              <p className="text-muted-foreground mt-3 text-sm scroll-animate">
                Inspired by the traditional Japanese omikuji fortune system
              </p>
            </div>
            <div className="space-y-3">
              {[
                { emoji: "🌟", en: "Great Fortune (大吉)", desc: "The best possible fortune. Everything aligns perfectly — career success, romantic bliss, financial windfalls, and vibrant health." },
                { emoji: "✨", en: "Good Fortune (中吉)", desc: "A warm, favorable day with positive momentum. Good things happen to those who act. Steady progress and pleasant surprises." },
                { emoji: "🍀", en: "Fair Fortune (小吉)", desc: "A gentle, balanced day. Small blessings are scattered throughout. Not dramatic, but quietly satisfying." },
                { emoji: "🌙", en: "Modest Fortune (末吉)", desc: "A day with hidden lessons. Minor challenges build character and resilience. Growth happens beneath the surface." },
                { emoji: "🌊", en: "Challenging Day (凶)", desc: "A day to exercise caution and self-care. Storms don't last forever. Rest, reflect, and conserve energy." },
              ].map((l, i) => (
                <div
                  key={l.en}
                  className="flex gap-4 rounded-lg border border-border/60 bg-background p-5 card-hover scroll-animate"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <span className="text-xl shrink-0 mt-0.5">{l.emoji}</span>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-sm text-foreground">{l.en}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{l.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQ />

        {/* About */}
        <section className="px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-2xl scroll-animate">
            <div className="text-center mb-8">
              <p className="text-[11px] tracking-[0.3em] uppercase text-brand font-medium mb-3">About</p>
              <h2 className="text-3xl font-[family-name:var(--font-heading)] tracking-tight">About Daily Oracle</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base text-left sm:text-center">
              <p>
                <strong className="text-foreground font-medium">Daily Oracle</strong> is a modern take on the ancient art of fortune drawing. Inspired by the Japanese <em>omikuji</em> tradition — where visitors to shrines draw paper fortunes — and Chinese temple fortune sticks, Daily Oracle brings this mindful ritual to your browser.
              </p>
              <p>
                Each day, you receive a unique fortune reading across five life dimensions: <strong className="text-foreground font-medium">overall fortune, career, love, wealth, and health</strong>. The fortune is determined by today&apos;s date, ensuring consistency throughout the day while refreshing at midnight.
              </p>
              <p>
                The beautiful <strong className="text-foreground font-medium">card-flip animation</strong> creates a moment of anticipation — a brief pause in your day to reflect on what lies ahead. Available in both <strong className="text-foreground font-medium">English and Chinese</strong>, Daily Oracle bridges Eastern wisdom traditions with modern web design.
              </p>
              <p>
                Daily Oracle runs 100% in your browser with <strong className="text-foreground font-medium">zero data collection</strong>. No accounts, no tracking, no server calls — just a beautiful, daily fortune experience.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
    </>
  );
}
