import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t border-amber-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8 text-sm text-gray-500 sm:flex-row sm:justify-between sm:px-6">
        <p className="font-[family-name:var(--font-heading)]">&copy; {new Date().getFullYear()} Daily Oracle. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/" className="transition-colors hover:text-amber-600">Home</Link>
          <Link href="/blog" className="transition-colors hover:text-amber-600">Blog</Link>
          <Link href="/privacy" className="transition-colors hover:text-amber-600">Privacy</Link>
          <Link href="/terms" className="transition-colors hover:text-amber-600">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
