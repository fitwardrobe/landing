<div align="center">

<img src="assets/logo.png" alt="FitWardrobe Logo" width="120" height="120">

# FitWardrobe

### Your AI Styling Assistant That Knows What Fits You

[![Website](https://img.shields.io/badge/Website-fitwardrobe.me-1E2329?style=flat-square)](https://fitwardrobe.me)
[![License](https://img.shields.io/badge/License-Proprietary-B8925A?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Beta-orange?style=flat-square)]()
[![Version](https://img.shields.io/badge/Version-1.0.1-blue?style=flat-square)](https://github.com/fitwardrobe/fitwardrobe/releases)

[**Download App**](https://fitwardrobe.me/downloads/) • [**Live Demo**](https://fitwardrobe.me/demo.html) • [**Documentation**](https://fitwardrobe.me/docs/) • [**Support**](https://fitwardrobe.me/support.html)

</div>

---

## 📖 About This Repository

This is the **public-facing landing repository** for FitWardrobe. It contains:

- 🌐 Official website ([fitwardrobe.me](https://fitwardrobe.me))
- 📱 App download links and distribution
- 📄 Public documentation and guides
- 🎨 Marketing assets and media kit

> **Note:** The main application source code is maintained in a **private repository** for security and intellectual property protection. This repository serves as the public portal for users to learn about and download FitWardrobe.

---

## 🚀 What is FitWardrobe?

FitWardrobe is an **AI-powered personal styling assistant** that helps you:

- 📸 **Build a digital wardrobe** through natural conversation and photo uploads
- 🤖 **Get intelligent outfit suggestions** tailored to your body type, skin tone, and preferences
- 🧠 **Understand your style** with transparent AI reasoning for every recommendation
- 🔒 **Maintain complete privacy** with local-first data storage (your wardrobe never leaves your device)
- ⚡ **Work offline** with full functionality using on-device processing

### Core Features

| Feature                          | Description                                                                        | Status       |
| -------------------------------- | ---------------------------------------------------------------------------------- | ------------ |
| **AI Vision Analysis**           | Powered by Google Gemini 2.0 Flash - automatically tags clothing items from photos | ✅ Live      |
| **Smart Outfit Generation**      | Context-aware outfit creation for any occasion with explainable reasoning          | 🔧 Improving |
| **Conversational Interface**     | Chat with your AI stylist naturally - ask questions, get advice, generate outfits  | ✅ Live      |
| **Advanced Wardrobe Management** | Filter by category, color, season, formality level, custom tags                    | ✅ Live      |
| **Camera Integration**           | Capture wardrobe items directly from your device camera or gallery                 | ✅ Live      |
| **Privacy-First Architecture**   | IndexedDB + filesystem storage - your data stays on your device                    | ✅ Live      |
| **Export/Import**                | Full data portability - download your entire wardrobe as JSON                      | ✅ Live      |
| **Offline Capability**           | Full functionality without internet (AI features require connection)               | ✅ Live      |
| **Multi-Platform**               | Progressive Web App + Native Android (iOS Q2 2026)                                 | ✅ Live      |

---

## 🎯 Why FitWardrobe?

### The Problem We Solve

- **"I have nothing to wear"** → You have 100+ items but can't visualize combinations
- **"What should I wear today?"** → Get AI-powered outfit suggestions for any occasion
- **"Does this match?"** → Receive instant style guidance with clear reasoning
- **"Where is my black blazer?"** → Find any item instantly with smart search

### What Makes Us Different

**FitWardrobe is the only wardrobe app that combines:**

✨ **AI-Powered Intelligence**

- Google Gemini 2.0 for advanced clothing analysis
- Context-aware outfit suggestions (occasion, weather, style)
- Explainable AI that tells you _why_ an outfit works

🔒 **True Privacy**

- Your wardrobe data NEVER leaves your device
- No cloud storage of personal items or photos
- Identity-only authentication (we don't even know what you own)

🆓 **Completely Free**

- No subscriptions, no ads, no premium tiers
- Full AI features available to everyone
- Open development, community-driven

📱 **Works Everywhere**

- Native Android app + Progressive Web App
- Full offline functionality
- iOS coming Q2 2026

🎨 **Fashion-Forward**

- Modern, intuitive interface
- Built by fashion enthusiasts for fashion lovers
- Constantly improving based on user feedback

---

## 📱 Download & Installation

### Android

**Direct APK Download:**

```bash
https://fitwardrobe.me/downloads/fitwardrobe.apk
```

**System Requirements:**

- Android 7.0 (Nougat) or higher
- 115 MB free storage (APK size: 114.9 MB)
- Camera permission (for wardrobe photos)
- Internet connection (for AI features)

**Installation Steps:**

1. Download the APK from the link above
2. Enable "Install from Unknown Sources" in Settings → Security/Privacy
3. Open the downloaded APK file from your notifications or File Manager
4. Tap "Install" and wait for completion
5. Launch FitWardrobe and create your account

> **🧪 Beta Testing Phase:** This is a beta build for testing and feedback. Play Store submission planned after gathering 100+ beta testers and achieving production-level stability.

### Progressive Web App (All Platforms)

**Access via browser:**

```
https://fitwardrobe-v1.vercel.app
```

**Compatible Browsers:**

- Chrome/Edge (recommended)
- Safari (iOS/macOS)
- Firefox
- Brave

**Install PWA:**

1. Visit [fitwardrobe-v1.vercel.app](https://fitwardrobe-v1.vercel.app)
2. Click "Add to Home Screen" (mobile) or "Install" (desktop)
3. Launch like a native app

### iOS (Coming Q2 2026)

📅 **Expected:** April - June 2026  
🍎 **App Store:** Native iOS app currently in development

Android beta testing helps us fix bugs before iOS launch. Join the journey!

[Notify me when iOS is ready →](mailto:fitwardrobee@gmail.com?subject=iOS%20Waitlist)

---

## 🏗️ Technology Stack

While the source code is private, we're transparent about our technology choices:

### Frontend

- **Framework:** React 18 + TypeScript
- **UI Library:** Tailwind CSS + Custom components
- **State Management:** React Context + hooks
- **Mobile Framework:** Capacitor 6 (for native Android builds)

### AI & Machine Learning

- **Vision AI:** Google Gemini 2.0 Flash (clothing analysis & tagging)
- **Processing:** Cloud-based AI with local fallback for offline features

### Data & Storage

- **Primary Storage:** IndexedDB (browser database for wardrobe data)
- **Image Storage:** Capacitor Filesystem API (native), Blobs (web)
- **Authentication:** Supabase Auth (identity-only, no wardrobe data stored)
- **Backup:** Manual JSON export/import

### Infrastructure

- **Web Hosting:** Vercel (PWA deployment)
- **Landing Page:** GitHub Pages (fitwardrobe.me)
- **Domain:** Namecheap
- **SSL:** Automatic HTTPS via Let's Encrypt

### Development Tools

- **Language:** TypeScript (strict mode)
- **Package Manager:** npm
- **Version Control:** Git + GitHub (private source, public landing)

### Future Considerations

- 🤔 **Custom AI Model:** Evaluating training a specialized fashion LLM for better personalization
- 🤔 **Analytics:** Considering privacy-focused analytics (Plausible or similar)
- 🤔 **Error Tracking:** May add Sentry for production error monitoring

---

## 🎨 Design System

FitWardrobe follows a carefully crafted design language:

### Visual Identity

- **Primary Color:** Deep Slate `#1E2329` - Professional, sophisticated
- **Background:** Warm Ivory `#F5F3EF` - Comfortable, fashion-appropriate
- **Accent:** Warm Gold `#B8925A` - Premium touch (used sparingly)

### Typography

- **Primary Font:** Sora (Google Fonts) - Modern, geometric sans-serif
- **Weights:** Regular (400), Medium (500)
- **Letter Spacing:** +75 (slightly expanded for sophistication)

### Logo

- Geometric "Framed F" mark
- Negative space construction
- Sharp corners for precision
- Scalable from 16px to any size

### UI Principles

- **Conversational:** Chat-first interface on mobile
- **Dashboard:** Multi-panel layout on desktop
- **Minimal:** No unnecessary decoration
- **Functional:** Every element serves a purpose
- **Accessible:** WCAG AA compliant (4.5:1 contrast)

---

## 📚 Documentation

### For Users

- 🚀 **[Getting Started](https://github.com/fitwardrobe/landing/wiki/Getting-Started)** - First-time setup guide _(Coming Soon)_
- 📖 **[User Guide](https://github.com/fitwardrobe/landing/wiki/User-Guide)** - Complete feature walkthrough _(Coming Soon)_
- ❓ **[FAQ](https://github.com/fitwardrobe/landing/wiki/FAQ)** - Common questions answered _(Coming Soon)_

### Need Help?

- 📧 **Email Support:** fitwardrobee@gmail.com
- 🐛 **Bug Reports:** [GitHub Issues](https://github.com/fitwardrobe/landing/issues)
- 💡 **Feature Requests:** [GitHub Discussions](https://github.com/fitwardrobe/landing/discussions)

### Community (Coming Soon)

- 💬 **Discord Server** - Chat with other users
- 🐦 **Twitter** - Latest updates and tips
- 📷 **Instagram** - Style inspiration and app showcases

> **Note:** We're in beta testing phase. Documentation is being created based on user questions and feedback. Have a question? Email us!

---

## 🗺️ Roadmap

### ✅ Current (v1.0.1 - Beta Testing)

- [x] AI clothing analysis (Gemini Vision)
- [x] Wardrobe management & filters
- [x] Camera capture integration
- [x] Export/import functionality
- [x] Android APK + PWA
- [x] Privacy-first local storage

### 🚧 In Progress (v1.1 - Beta Refinement)

- [ ] Error tracking & monitoring (Sentry)
- [ ] Performance optimizations (app size reduction)
- [ ] Bug fixes based on beta feedback
- [ ] UI/UX refinements
- [ ] Enhanced error handling
- [ ] Gather 100+ beta testers

### 📅 Coming Soon (v1.2 - Stability Release)

- [ ] All critical bugs fixed (<1% crash rate)
- [ ] Legal documents reviewed
- [ ] Comprehensive testing complete
- [ ] Prepare for public launch
- [ ] Advanced search capabilities
- [ ] Outfit history tracking

### 🔮 Future (v2.0+)

- [ ] **Google Play Store launch** (after successful beta period)
- [ ] iOS native app
- [ ] Multi-language support (Spanish, Hindi, French)
- [ ] Optional cloud sync (encrypted)
- [ ] Social features (outfit sharing)
- [ ] Style analytics dashboard
- [ ] Custom-trained fashion AI model
- [ ] Sustainability tracking
- [ ] Professional stylist collaboration mode
- [ ] AR virtual try-on (experimental)

> **Timeline:** Play Store submission planned for Q2 2026, after gathering sufficient beta feedback and achieving production-level stability (<1% crash rate, 4.0+ user rating, 100+ successful beta testers).

[View detailed roadmap & vote on features →](https://github.com/fitwardrobe/landing/discussions)

---

## 👨‍💻 About the Developer

FitWardrobe is built by a **solo indie developer** passionate about making fashion accessible through technology.

### The Journey

- 🚀 Started as a personal project to solve my own wardrobe chaos
- 🤖 Integrated cutting-edge AI (Google Gemini) for smart suggestions
- 🔒 Prioritized privacy because I believe your data is yours
- 🆓 Made it free because fashion advice shouldn't be a luxury

### Development Philosophy

- **User-first:** Every feature is built based on real needs
- **Privacy-focused:** Local-first architecture, no data harvesting
- **Transparent:** Open about technology, honest about limitations
- **Community-driven:** Beta testing with real users, iterating fast

### Get Involved

- 🐛 **Beta Testing:** Help find bugs and improve the app
- 💡 **Feature Suggestions:** Share your ideas via email or GitHub
- 🌍 **Translations:** Help localize FitWardrobe for your language
- ⭐ **Spread the Word:** Share with friends who love fashion

**Want to contribute or just say hi?**  
📧 fitwardrobee@gmail.com

---

## 🔒 Privacy & Security

### Our Commitment

**Privacy-First Architecture:**

- 🔒 **Local Storage** - Your wardrobe data stays on your device
- 🚫 **No Tracking** - We don't track your behavior or sell data
- 🔐 **Encrypted Auth** - Supabase handles authentication securely
- 📤 **User Control** - Export your data anytime, delete your account instantly

### What We Store

| Data Type           | Location                    | Purpose                |
| ------------------- | --------------------------- | ---------------------- |
| **Email & User ID** | Supabase (cloud)            | Authentication only    |
| **Wardrobe Items**  | Your device (IndexedDB)     | App functionality      |
| **Clothing Images** | Your device (local storage) | Visual reference       |
| **Preferences**     | Your device (IndexedDB)     | Personalization        |
| **Outfit History**  | Your device (IndexedDB)     | Learning & improvement |

### What We DON'T Store

- ❌ Your clothing images (never uploaded to cloud)
- ❌ Your wardrobe items (local only)
- ❌ Your outfit combinations
- ❌ Your browsing/usage patterns
- ❌ Your personal measurements
- ❌ Any personally identifiable info beyond email

### Data Rights

- ✅ **Export** - Download everything as JSON
- ✅ **Delete** - Remove your account in one click
- ✅ **Portability** - Take your data to any app
- ✅ **Transparency** - See exactly what data exists

[Read full Privacy Policy →](https://fitwardrobe.me/privacy.html)

---

## 📄 License & Legal

### Software License

**Proprietary Software** - All Rights Reserved

The FitWardrobe application and its source code are proprietary and confidential. Unauthorized copying, modification, distribution, or reverse engineering is strictly prohibited.

### Open Source Components

FitWardrobe is built with open-source libraries. See [THIRD_PARTY_LICENSES.md](THIRD_PARTY_LICENSES.md) for complete attributions.

### Terms of Service

By using FitWardrobe, you agree to our [Terms of Service](https://fitwardrobe.me/terms.html).

### Content Policy

- User-generated content (wardrobe items) remains your property
- We don't claim ownership of your photos or data
- You retain all rights to your content

---

## 📞 Contact & Support

### Get Help

- 📧 **Email:** fitwardrobee@gmail.com
- 🐛 **Bug Reports:** [GitHub Issues](https://github.com/fitwardrobe/landing/issues)
- 💡 **Feature Ideas:** [GitHub Discussions](https://github.com/fitwardrobe/landing/discussions)

### Follow Development

- 🌐 **Website:** [fitwardrobe.me](https://fitwardrobe.me)
- 💻 **GitHub:** [@fitwardrobe](https://github.com/fitwardrobe)
- 📱 **Web App:** [fitwardrobe-v1.vercel.app](https://fitwardrobe-v1.vercel.app)

### Coming Soon

- 💬 Discord Community
- 🐦 Twitter Updates
- 📷 Instagram Inspiration

**Response Time:** Usually within 24-48 hours. Please be patient, this is a solo project! 🙏

---

## 🏆 Acknowledgments

### Technology Partners

- **Google AI** - Gemini 2.0 Flash for vision analysis
- **Supabase** - Authentication infrastructure
- **Vercel** - Web application hosting
- **GitHub** - Landing page hosting & version control

### Open Source Credits

FitWardrobe is built on the shoulders of giants. Key dependencies:

- React (Meta) - UI framework
- Next.js (Vercel) - Full-stack framework
- Tailwind CSS (Tailwind Labs) - Styling system
- Capacitor (Ionic) - Native mobile framework
- shadcn/ui (shadcn) - Component library

[Full attribution list →](THIRD_PARTY_LICENSES.md)

### Community

Thank you to our early adopters, beta testers, and everyone who provided feedback during development. You made FitWardrobe better.

---

## 📊 Repository Stats

This repository contains the **public-facing website** for FitWardrobe.

- 🌐 **Website:** [fitwardrobe.me](https://fitwardrobe.me)
- 📦 **Downloads:** Hosted via Git LFS
- 🚀 **Deployment:** GitHub Pages + custom domain
- 🔒 **HTTPS:** Enforced via GitHub
- 🌍 **CDN:** Global edge distribution

### Repository Structure

```
landing/
├── index.html              # Main landing page
├── downloads/              # APK distribution (Git LFS)
│   ├── fitwardrobe-latest.apk
│   └── versions/
├── assets/                 # Images, videos, media kit
│   ├── logo.svg
│   ├── screenshots/
│   ├── videos/
│   └── press-kit/
├── docs/                   # User documentation
│   ├── getting-started.md
│   ├── user-manual.md
│   └── faq.md
├── CNAME                   # Custom domain config
├── README.md               # This file
└── LICENSE                 # Software license
```

---

## 🎉 Join the FitWardrobe Community

### Stay Updated

- 📧 [Subscribe to Newsletter](https://fitwardrobe.me/newsletter) - Monthly updates
- 🐦 [Follow on Twitter](https://twitter.com/fitwardrobe) - Daily tips & news
- 📷 [Follow on Instagram](https://instagram.com/fitwardrobe.app) - Style inspiration
- 💬 [Join Discord](https://discord.gg/fitwardrobe) - Chat with community

### Get Involved

- ⭐ **Star this repo** - Show your support
- 🍴 **Fork & contribute** - Help improve documentation
- 🐛 **Report bugs** - Make FitWardrobe better
- 💡 **Share feedback** - Tell us what you need

---

<div align="center">

### Be Fashion-Forward, Not Overwhelmed

**FitWardrobe** - Your AI styling assistant for effortless style, every day.

[Download App](https://fitwardrobe.me/downloads) • [Visit Website](https://fitwardrobe.me) • [Join Discord](https://discord.gg/fitwardrobe)

---

© 2026 FitWardrobe. All Rights Reserved.

[![Website](https://img.shields.io/badge/Website-fitwardrobe.me-1E2329?style=flat-square)](https://fitwardrobe.me)
[![Discord](https://img.shields.io/badge/Discord-Join-5865F2?style=flat-square&logo=discord&logoColor=white)](https://discord.gg/fitwardrobe)
[![Twitter](https://img.shields.io/badge/Twitter-Follow-1DA1F2?style=flat-square&logo=twitter&logoColor=white)](https://twitter.com/fitwardrobe)
[![Email](https://img.shields.io/badge/Email-fitwardrobee%40gmail.com-B8925A?style=flat-square)](mailto:fitwardrobee@gmail.com)

</div>
