import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Terms of Service | Daily Oracle", description: "Daily Oracle terms of service.", robots: { index: true, follow: true } };

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Terms of Service</h1>
          <p className="mt-2 text-sm text-gray-400">Last updated: March 15, 2026</p>
          <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
            <h2 className="text-xl font-bold text-gray-900">Acceptance of Terms</h2>
            <p>By using Daily Oracle, you agree to these Terms. If you disagree, please do not use the Service.</p>
            <h2 className="text-xl font-bold text-gray-900">Description of Service</h2>
            <p>Daily Oracle provides free, browser-based daily fortune readings for entertainment purposes. All processing runs in your browser.</p>
            <h2 className="text-xl font-bold text-gray-900">Entertainment Only</h2>
            <p>Daily Oracle is designed for <strong>entertainment and positive reflection only</strong>. Fortune readings are randomly generated and should not be used as the basis for important life decisions, financial investments, medical choices, or any other significant actions.</p>
            <h2 className="text-xl font-bold text-gray-900">No Warranty</h2>
            <p>Provided &quot;as is&quot; without warranties of any kind. We make no claims about the accuracy or predictive ability of fortune readings.</p>
            <h2 className="text-xl font-bold text-gray-900">Limitation of Liability</h2>
            <p>We are not liable for any damages arising from your use of the Service or reliance on fortune readings.</p>
            <h2 className="text-xl font-bold text-gray-900">Changes</h2>
            <p>We may update these terms. Continued use constitutes acceptance.</p>
            <h2 className="text-xl font-bold text-gray-900">Contact</h2>
            <p>Questions? legal@toolboxlite.com.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
