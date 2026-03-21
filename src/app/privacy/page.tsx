import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Privacy Policy | Daily Oracle", description: "Daily Oracle privacy policy. 100% client-side — no data collected.", robots: { index: true, follow: true } };

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight font-[family-name:var(--font-heading)]">Privacy Policy</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: March 15, 2026</p>
          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_strong]:text-foreground [&_a]:text-brand [&_a]:hover:underline">
            <h2>Your Data Stays on Your Device</h2>
            <p>Daily Oracle is a <strong>100% client-side tool</strong>. All fortune generation happens entirely in your web browser using JavaScript. No personal data is sent to our servers.</p>
            <h2>No Data Collection</h2>
            <p>We do not collect, store, or transmit any personal information. No cookies for tracking, no accounts required. Your fortune is generated locally using the current date.</p>
            <h2>Local Storage</h2>
            <p>We use browser localStorage to remember: (1) today&apos;s fortune draw status (resets daily), and (2) your language preference. This data never leaves your device.</p>
            <h2>Analytics</h2>
            <p>We may use privacy-friendly analytics for general traffic patterns. No personal information collected.</p>
            <h2>Advertising</h2>
            <p>We display advertisements through Google AdSense. These services may use cookies to serve relevant ads. Opt out at <a href="https://adssettings.google.com" rel="noopener noreferrer" target="_blank">Google Ad Settings</a>.</p>
            <h2>Contact</h2>
            <p>Questions? privacy@toolboxlite.com.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
