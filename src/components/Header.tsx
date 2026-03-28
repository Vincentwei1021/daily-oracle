import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-lg">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-brand to-transparent" />
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="text-brand text-xl leading-none" aria-hidden="true">&#9672;</span>
          <span className="font-[family-name:var(--font-heading)] text-lg text-foreground tracking-tight">
            Daily Oracle
          </span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <Link href="/blog" className="rounded-lg px-3 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-brand">
            Blog
          </Link>
          <ThemeToggle />
        </div>
      </nav>
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="h-px bg-border" />
      </div>
    </header>
  );
}
