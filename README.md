# Remotion Templates

Video templates for the Disruptors Media team. Make videos with code using free AI tools.

## Quick Start

1. Install Node.js from https://nodejs.org (LTS version)
2. Clone this repo: `git clone <repo-url>`
3. Install dependencies: `npm install`
4. Launch the preview: `npm start`
5. Open your AI tool and start editing

## Templates Included

- **IntroVideo** — 15 second branded intro with logo, tagline, and smooth animations
- **BulletPoints** — 30 second presentation with animated bullet points
- **QuoteCard** — 10 second quote card with fade in text and branded footer
- **SocialPromo** — 30 second social media promo with multiple scenes

## Rendering

```
npx remotion render src/index.tsx IntroVideo out/intro.mp4
npx remotion render src/index.tsx BulletPoints out/bullets.mp4
npx remotion render src/index.tsx QuoteCard out/quote.mp4
npx remotion render src/index.tsx SocialPromo out/promo.mp4
```

Change the resolution for different platforms:

```
--width=1920 --height=1080   (YouTube 16:9)
--width=1080 --height=1920   (Reels/TikTok 9:16)
--width=1080 --height=1080   (Instagram Square)
```

## Full Guide

See the complete step by step guide at: https://remotion-guide.vercel.app
