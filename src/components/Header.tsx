import Link from "next/link";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-200/60 bg-amber-50/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link href="/" className="font-[family-name:var(--font-heading)] text-xl font-bold text-amber-700 tracking-tight">✨ Daily Oracle</Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <Link href="/#draw" className="rounded-lg px-3 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-amber-100 hover:text-amber-600">Draw</Link>
          <Link href="/#faq" className="rounded-lg px-3 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-amber-100 hover:text-amber-600">FAQ</Link>
          <Link href="/blog" className="rounded-lg px-3 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-amber-100 hover:text-amber-600">Blog</Link>
        </div>
      </nav>
    </header>
  );
}
