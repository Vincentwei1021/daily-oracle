import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Blog — Fortune & Luck Guides | Daily Oracle", description: "Articles on fortune telling traditions, luck rituals, and daily mindfulness practices." };

const posts = [
  { slug: "history-of-fortune-telling", title: "The Fascinating History of Fortune Drawing: From Ancient Temples to Your Screen", excerpt: "Explore the rich history of fortune drawing traditions from Japanese omikuji to Chinese kau cim, and how they've evolved into modern digital experiences.", date: "2026-03-12" },
  { slug: "daily-rituals-for-good-luck", title: "7 Daily Rituals That Attract Good Luck (Backed by Psychology)", excerpt: "Science-backed daily habits that improve your mindset, increase serendipity, and make you feel luckier. Spoiler: gratitude and intention-setting actually work.", date: "2026-03-10" },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blog</h1>
          <p className="mt-2 text-gray-600">Articles on fortune telling traditions, luck, and daily mindfulness.</p>
          <div className="mt-10 space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="rounded-xl border border-amber-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <time className="text-xs font-medium text-gray-400">{post.date}</time>
                <h2 className="mt-2 text-xl font-bold text-gray-900"><Link href={`/blog/${post.slug}`} className="hover:text-amber-600">{post.title}</Link></h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-semibold text-amber-600 hover:text-amber-700">Read more →</Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
