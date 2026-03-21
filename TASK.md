# TASK: Design Upgrade — Daily Oracle (抽签)

## Objective
Transform from "themed toy" to a **premium fortune-telling experience** using shadcn/ui. Think: mystical yet modern — like a luxury tarot app meets Apple's design language. Warm amber/gold brand stays but refined.

## ⚠️ CRITICAL: Preserve All Functionality
- Fortune drawing: idle → drawing (animation) → reveal flow
- Card flip animation during drawing phase
- Fortune card with 5 dimensions (overall, career, love, wealth, health)
- Language toggle (EN/ZH) with localStorage persistence
- Daily fortune based on date (localStorage check)
- Share + Draw Again buttons
- FeedbackWidget, AdSense, SEO metadata, JSON-LD (WebApp + FAQ + HowTo)
- Blog pages (2 posts + listing), Privacy, Terms
- Existing components: Header, Footer, FAQ, FortuneDrawer

## Step 1: Install Dependencies

```bash
npx shadcn@latest init --defaults
npx shadcn@latest add button card badge separator accordion
npm install next-themes lucide-react
npx shadcn@latest add sonner
```

## Step 2: Design System

### Brand: Refined Gold/Amber
- Brand: oklch(0.68 0.16 70) — warm gold (not flat amber)
- Brand muted: brand / 10%
- Accent: deep amber for dark elements

### Color Palette (oklch)
Light mode:
- Background: warm cream oklch(0.99 0.005 80) — NOT harsh yellow #fffbeb
- Remove dot-grid background pattern (too busy)
- Cards: clean white
- Foreground: warm near-black

Dark mode:
- Background: deep warm black oklch(0.13 0.01 60)
- Cards: oklch(0.17 0.01 60) with subtle warm tint
- Gold brand brightened for contrast

### Typography
- Keep Plus Jakarta Sans headings + Inter body
- Fortune card: slightly larger text for readability
- Better line-height on fortune text

## Step 3: Component Redesign

### layout.tsx
- ThemeProvider + Toaster
- Keep AdSense exactly as-is
- Dark mode support

### Header
- Sticky, backdrop-blur, border-b
- Logo: "🔮 Daily Oracle" — text-brand font-heading
- Nav: Blog link + ThemeToggle
- Mobile: simple, no hamburger needed (few links)

### Hero (in page.tsx)
- Stagger fade-up: badge → h1 → subtitle
- "Draw Your Daily Fortune" with "Daily Fortune" in brand color
- Badge: "🔮 Inspired by Japanese Omikuji & Chinese Fortune Sticks" — brand-muted bg
- Remove current pill styling, use shadcn Badge

### FortuneDrawer — IDLE phase
- Fortune card: keep the mystical gradient card but refine it
  - Smoother gradients, better border radius (rounded-2xl)
  - 🔮 icon centered, "Draw" / "抽签" text below
  - Keep glow animation but more subtle
  - Keep sparkle decorations but tone down
  - Keep float animation
- "Tap the card to reveal" text below — text-muted-foreground

### FortuneDrawer — DRAWING phase
- Keep card flip animation (this is great)
- Keep shimmer effect
- "The oracle is speaking..." text — text-brand with pulse

### FortuneDrawer — REVEAL phase
- Fortune Card: upgrade to shadcn Card as outer wrapper
  - Header gradient: keep but smoother (from-brand via-brand/80 to-brand)
  - Overall quote: italic, text-lg, good line-height
  - Category grid: cleaner borders, better padding
  - Lucky section: brand-muted bg
- Action buttons: shadcn Button, brand color for Share, outline for Draw Again
- Smooth entrance animation (scale-in)
- Score would be nice animated

### Features grid (page.tsx)
- Use shadcn Card components
- 4 columns → hover shadow with brand tint
- Scroll-triggered fade-in

### Fortune Levels section
- Clean cards with brand accents
- Better visual hierarchy

### FAQ (FAQ.tsx)
- Use shadcn Accordion component
- Brand color on trigger hover

### Footer
- Minimal, border-t, brand color on hover

### Blog pages
- Update with new Header/Footer styling
- Brand color links

### FeedbackWidget
- Brand color button (gold/amber)
- Card-based modal

## Step 4: Dark Mode
- ThemeProvider + ThemeToggle
- Fortune card gradient: darker gold tones
- All text readable in both modes

## Step 5: Animations
- Hero: stagger fade-up (badge → title → subtitle)
- Fortune card idle: refined float + glow
- Drawing: keep flip + shimmer (already great)
- Reveal: scale-in card entrance
- Category grid: subtle stagger for each cell
- Features section: scroll-triggered fade-in
- Fortune levels: scroll-triggered stagger
- Cards hover: shadow + lift

## Step 6: Build
```bash
npm run build
```
