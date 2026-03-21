import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-xl font-bold text-brand tracking-tight">
          🔮 Daily Oracle
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <Link href="/blog" className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-brand">
            Blog
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
