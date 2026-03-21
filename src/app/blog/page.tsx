import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = { title: "Blog — Fortune & Luck Guides | Daily Oracle", description: "Articles on fortune telling traditions, luck rituals, and daily mindfulness practices.", alternates: { canonical: "/blog" } };

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
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl font-[family-name:var(--font-heading)]">Blog</h1>
          <p className="mt-2 text-muted-foreground">Articles on fortune telling traditions, luck, and daily mindfulness.</p>
          <div className="mt-10 space-y-6">
            {posts.map((post) => (
              <Card key={post.slug} className="card-hover p-6">
                <CardContent className="p-0">
                  <time className="text-xs font-medium text-muted-foreground">{post.date}</time>
                  <h2 className="mt-2 text-xl font-bold"><Link href={`/blog/${post.slug}`} className="hover:text-brand transition-colors">{post.title}</Link></h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-semibold text-brand hover:text-brand/80 transition-colors">Read more →</Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
