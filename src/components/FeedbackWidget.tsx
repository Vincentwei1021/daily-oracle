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
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-primary-foreground shadow-lg transition-transform hover:scale-110 hover:bg-brand/90"
      >
        {open ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
      </button>

      {/* Modal */}
      {open && (
        <Card className="fixed bottom-20 right-5 z-50 w-80 animate-fade-in p-5 shadow-2xl">
          {status === "success" ? (
            <div className="text-center py-4">
              <p className="text-2xl mb-2">🎉</p>
              <p className="font-semibold">Thanks!</p>
              <p className="text-sm text-muted-foreground">We&apos;ll review your feedback.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="text-sm font-bold mb-3">Send Feedback</h3>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="What's on your mind?"
                rows={3}
                required
                className="w-full rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm placeholder-muted-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring resize-none"
              />
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email (optional, for replies)"
                className="mt-2 w-full rounded-lg border border-border bg-muted/50 px-3 py-2 text-sm placeholder-muted-foreground outline-none focus:border-ring focus:ring-1 focus:ring-ring"
              />
              {status === "error" && <p className="mt-2 text-xs text-destructive">Something went wrong. Try again.</p>}
              <Button
                type="submit"
                disabled={status === "loading" || !message.trim()}
                className="mt-3 w-full rounded-lg bg-brand text-primary-foreground hover:bg-brand/90"
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
