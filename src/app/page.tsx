import Header from "@/components/Header";
import FortuneDrawer from "@/components/FortuneDrawer";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { faqData } from "@/data/faq";

const webAppSchema = {
  "@context": "https://schema.org", "@type": "WebApplication",
  name: "Daily Oracle", url: "https://daily-oracle.vercel.app",
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
    { "@type": "HowToStep", name: "Visit Daily Oracle", text: "Open daily-oracle.vercel.app in your browser." },
    { "@type": "HowToStep", name: "Tap the fortune card", text: "Click or tap the glowing fortune card to begin the drawing ritual." },
    { "@type": "HowToStep", name: "Read your fortune", text: "Your personalized daily reading appears with career, love, wealth, and health insights. Share with friends!" },
  ],
  tool: { "@type": "HowToTool", name: "Daily Oracle — Free Fortune Drawing" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="px-4 pt-12 pb-2 sm:px-6 sm:pt-16">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <div className="mb-4 inline-block rounded-full bg-amber-100 px-4 py-1.5 text-sm font-semibold text-amber-700">
              🔮 Inspired by Japanese Omikuji & Chinese Fortune Sticks
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Draw Your<br />
              <span className="text-amber-600">Daily Fortune</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 sm:text-xl">
              Tap the card to reveal today&apos;s personalized reading. Career, love, wealth, and health — refreshed every day with beautiful ritual animations.
            </p>
          </div>
        </section>

        <FortuneDrawer />

        {/* Features */}
        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              Why People Love Daily Oracle
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: "🎴", title: "Ritual Experience", desc: "Beautiful card-flip animation creates a mindful moment in your busy day. Each draw feels special and intentional." },
                { icon: "📊", title: "5 Life Dimensions", desc: "Get insights across career, love, wealth, health, and overall fortune. Each dimension offers unique guidance for your day." },
                { icon: "🔄", title: "Daily Refresh", desc: "A new fortune every day, determined by the date. Same fortune all day long — come back tomorrow for a fresh reading." },
                { icon: "🌏", title: "Bilingual", desc: "Full English and Chinese support. Switch between languages anytime. Fortune readings crafted in both languages." },
              ].map((f) => (
                <div key={f.title} className="rounded-xl border border-amber-200 bg-white p-6 text-center shadow-sm">
                  <div className="mb-3 text-3xl">{f.icon}</div>
                  <h3 className="mb-2 text-base font-semibold text-gray-900">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fortune Levels */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 bg-white">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Fortune Levels Explained
            </h2>
            <p className="text-center text-gray-600 mb-8">Inspired by the traditional Japanese omikuji (おみくじ) fortune system</p>
            <div className="space-y-4">
              {[
                { emoji: "🌟", en: "Great Fortune (大吉)", desc: "The best possible fortune. Everything aligns perfectly — career success, romantic bliss, financial windfalls, and vibrant health. Seize the day!" },
                { emoji: "✨", en: "Good Fortune (中吉)", desc: "A warm, favorable day with positive momentum. Good things happen to those who act. Steady progress and pleasant surprises." },
                { emoji: "🍀", en: "Fair Fortune (小吉)", desc: "A gentle, balanced day. Small blessings are scattered throughout. Not dramatic, but quietly satisfying. Appreciate the little things." },
                { emoji: "🌙", en: "Modest Fortune (末吉)", desc: "A day with hidden lessons. Minor challenges build character and resilience. Growth happens beneath the surface." },
                { emoji: "🌊", en: "Challenging Day (凶)", desc: "A day to exercise caution and self-care. Storms don't last forever. Rest, reflect, and conserve energy for brighter days ahead." },
              ].map((l) => (
                <div key={l.en} className="flex gap-4 rounded-xl border border-amber-100 bg-amber-50/50 p-5">
                  <span className="text-2xl shrink-0">{l.emoji}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{l.en}</h3>
                    <p className="mt-1 text-sm text-gray-600">{l.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQ />

        {/* About */}
        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">About Daily Oracle</h2>
            <div className="mt-4 space-y-4 text-gray-600 leading-relaxed text-left sm:text-center">
              <p>
                <strong>Daily Oracle</strong> is a modern take on the ancient art of <strong>fortune drawing</strong>. Inspired by the Japanese <em>omikuji</em> (おみくじ) tradition — where visitors to shrines draw paper fortunes — and Chinese temple fortune sticks (<em>kau cim</em>), Daily Oracle brings this mindful ritual to your browser.
              </p>
              <p>
                Each day, you receive a unique fortune reading across five life dimensions: <strong>overall fortune, career, love, wealth, and health</strong>. The fortune is determined by today&apos;s date, ensuring consistency throughout the day while refreshing at midnight with a brand new reading.
              </p>
              <p>
                The beautiful <strong>card-flip animation</strong> creates a moment of anticipation and ritual — a brief pause in your day to reflect on what lies ahead. Available in both <strong>English and Chinese</strong>, Daily Oracle bridges Eastern wisdom traditions with modern web technology.
              </p>
              <p>
                Daily Oracle runs 100% in your browser with <strong>zero data collection</strong>. No accounts, no tracking, no server calls — just a beautiful, daily fortune experience. Bookmark it and make it part of your morning routine.
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
