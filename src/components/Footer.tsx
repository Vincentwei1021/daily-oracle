import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-4xl px-5 py-10 sm:px-8">
        {/* Top: logo + ornament */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="text-brand text-lg leading-none" aria-hidden="true">&#9672;</span>
            <span className="font-[family-name:var(--font-heading)] text-base text-foreground">Daily Oracle</span>
          </div>
          <p className="text-xs text-muted-foreground/60 text-center max-w-xs leading-relaxed">
            A modern take on the ancient art of fortune drawing. Mindful, beautiful, private.
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-center gap-1 mb-8">
          <Link href="/" className="rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:text-brand">Home</Link>
          <Link href="/blog" className="rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:text-brand">Blog</Link>
          <Link href="/privacy" className="rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:text-brand">Privacy</Link>
          <Link href="/terms" className="rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:text-brand">Terms</Link>
        </div>

        {/* Bottom */}
        <div className="ornament text-border mb-4">
          <span className="text-brand/40 text-xs">✦</span>
        </div>
        <p className="text-center text-xs text-muted-foreground/50">
          &copy; {new Date().getFullYear()} Daily Oracle. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
