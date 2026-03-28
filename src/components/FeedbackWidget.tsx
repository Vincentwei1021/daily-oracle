"use client";
import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message.trim(), email: email.trim() || undefined, url: window.location.href, timestamp: new Date().toISOString() }),
      });
      if (res.ok) {
        setStatus("success");
        setTimeout(() => { setOpen(false); setStatus("idle"); setMessage(""); setEmail(""); }, 2000);
      } else { setStatus("error"); }
    } catch { setStatus("error"); }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Send feedback"
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-primary-foreground shadow-lg transition-all duration-200 hover:scale-110 hover:bg-brand-hover"
      >
        {open ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
      </button>

      {/* Modal */}
      {open && (
        <Card className="fixed bottom-20 right-5 z-50 w-80 animate-fade-in p-5 shadow-2xl border-border/60">
          {status === "success" ? (
            <div className="text-center py-4">
              <p className="font-[family-name:var(--font-heading)] text-lg mb-1">Thank you</p>
              <p className="text-sm text-muted-foreground">We&apos;ll review your feedback.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="font-[family-name:var(--font-heading)] text-sm mb-3">Send Feedback</h3>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="What's on your mind?"
                rows={3}
                required
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm placeholder-muted-foreground outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 resize-none transition-colors"
              />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email (optional, for replies)"
                className="mt-2 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm placeholder-muted-foreground outline-none focus:border-brand focus:ring-1 focus:ring-brand/30 transition-colors"
              />
              {status === "error" && <p className="mt-2 text-xs text-destructive">Something went wrong. Try again.</p>}
              <Button
                type="submit"
                disabled={status === "loading" || !message.trim()}
                className="mt-3 w-full rounded-lg bg-brand text-primary-foreground hover:bg-brand-hover"
              >
                {status === "loading" ? "Sending..." : "Send Feedback"}
              </Button>
            </form>
          )}
        </Card>
      )}
    </>
  );
}
