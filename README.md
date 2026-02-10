<div align="center">

<img src="assets/logo.png" alt="FitWardrobe Logo" width="120" height="120">

# FitWardrobe

### Your AI Personal Stylist — Privacy-First Wardrobe Manager

[![Website](https://img.shields.io/badge/Website-fitwardrobe.me-1E2329?style=flat-square)](https://fitwardrobe.me)
[![License](https://img.shields.io/badge/License-Proprietary-B8925A?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square)]()
[![Version](https://img.shields.io/badge/Version-1.0.1-blue?style=flat-square)](https://github.com/fitwardrobe/fitwardrobe/releases)

[**Try the Web App →**](https://fitwardrobe.vercel.app) &nbsp;·&nbsp; [**Download for Android →**](https://fitwardrobe.vercel.app/download/fitwardrobe.apk)

[Privacy](https://fitwardrobe.me/privacy.html) · [Terms](https://fitwardrobe.me/terms.html) · [Support](https://fitwardrobe.me/support.html) · [Security](https://fitwardrobe.me/security.html)

</div>

---

## About This Repository

This is the **public-facing landing page** for [FitWardrobe](https://fitwardrobe.me). It hosts the official website, download links, legal pages, and public documentation.

> **Note:** The application source code lives in a **private repository**. This repo serves as the public portal for users to learn about and download FitWardrobe.

---

## What is FitWardrobe?

FitWardrobe is an **AI-powered wardrobe management app** that helps you digitize your closet, get intelligent outfit suggestions, and maintain complete privacy over your data.

### The Problem

You have a full closet, but nothing to wear. Other wardrobe apps upload your photos to their servers. You shouldn't have to choose between smart styling and data privacy.

### The Solution

| Feature                     | Description                                                       | Status  |
| --------------------------- | ----------------------------------------------------------------- | ------- |
| **AI Vision Analysis**      | Google Gemini 2.0 Flash — auto-tags clothing from photos          | ✅ Live |
| **Smart Outfit Generation** | Context-aware outfits for any occasion with explainable reasoning | ✅ Live |
| **Conversational Stylist**  | Chat naturally — ask questions, get advice, build outfits         | ✅ Live |
| **Advanced Filtering**      | Search by category, color, season, formality, custom tags         | ✅ Live |
| **Camera Integration**      | Capture items directly from camera or gallery                     | ✅ Live |
| **Privacy-First Storage**   | IndexedDB + device filesystem — data never leaves your device     | ✅ Live |
| **Export / Import**         | Full data portability — download your wardrobe as JSON            | ✅ Live |
| **Offline Mode**            | Full functionality without internet (AI features need connection) | ✅ Live |
| **Multi-Platform**          | Android APK + Progressive Web App (iOS coming Q2 2026)            | ✅ Live |

---

## Why FitWardrobe?

<table>
<tr>
<td width="50%">

**Other Wardrobe Apps**

📱 Your Phone → ☁️ Their Servers → 🔓 Your Data Exposed

❌ Photos uploaded to cloud  
❌ Data used for ads/training  
❌ Requires subscriptions

</td>
<td width="50%">

**FitWardrobe**

📱 Your Phone → 💾 Your Device → 🔒 Stays Local

✅ Photos stay on your device  
✅ Zero data harvesting  
✅ Completely free, no ads

</td>
</tr>
</table>

---

## Download & Installation

### Android (APK)

|              |                                                                            |
| ------------ | -------------------------------------------------------------------------- |
| **Download** | [fitwardrobe.apk](https://fitwardrobe.vercel.app/download/fitwardrobe.apk) |
| **Version**  | 1.0.1                                                                      |
| **Size**     | 2.9 MB                                                                     |
| **Requires** | Android 8.0+                                                               |
| **Price**    | Free                                                                       |

<details>
<summary>🔒 Verify download integrity</summary>

**SHA-256:** `fcf36b5c837bbe1753f7231b55d08bfb854bfd05d7766e13b231d91075164224`

</details>

**Install steps:**

1. Download the APK from the link above
2. If prompted, enable "Install from Unknown Sources" in Settings → Security
3. Open the downloaded file and tap Install
4. Launch FitWardrobe and sign in with Google

> **Why not Play Store?** We distribute directly to avoid mandatory tracking requirements. Play Store release is planned for v2.0.

### Web App (All Platforms)

Visit **[fitwardrobe.vercel.app](https://fitwardrobe.vercel.app)** — no installation needed.

Works on Chrome, Edge, Safari, Firefox, and Brave. You can also install it as a PWA: tap "Add to Home Screen" on mobile or "Install" on desktop.

### iOS

Coming Q2 2026 — [join the waitlist](mailto:fitwardrobee@gmail.com?subject=iOS%20Waitlist).

---

## Technology Stack

### Application

| Layer             | Technology                                           |
| ----------------- | ---------------------------------------------------- |
| **Framework**     | React 18 + TypeScript                                |
| **Build Tool**    | Vite                                                 |
| **Styling**       | Vanilla CSS with custom design tokens                |
| **Mobile**        | Capacitor 6 (native Android)                         |
| **AI Engine**     | Google Gemini 2.0 Flash                              |
| **Auth**          | Supabase (identity-only — no wardrobe data in cloud) |
| **Local Storage** | IndexedDB + Capacitor Filesystem API                 |

### Infrastructure

| Service          | Purpose                                                 |
| ---------------- | ------------------------------------------------------- |
| **Vercel**       | Web app hosting + APK distribution                      |
| **GitHub Pages** | Landing page ([fitwardrobe.me](https://fitwardrobe.me)) |
| **Supabase**     | Authentication infrastructure                           |
| **Cloudflare**   | DNS + SSL/TLS edge certificates                         |

---

## Design System

| Element           | Value                    | Notes                               |
| ----------------- | ------------------------ | ----------------------------------- |
| **Primary**       | `#1E2329` Deep Slate     | Professional, sophisticated         |
| **Background**    | `#F5F3EF` Warm Ivory     | Fashion-appropriate warmth          |
| **Accent**        | `#B8925A` Warm Gold      | Used sparingly for premium touch    |
| **Font**          | Inter + Playfair Display | Modern sans-serif + editorial serif |
| **Accessibility** | WCAG AA                  | 4.5:1 minimum contrast ratio        |

**UI Principles:** Conversational on mobile · Dashboard on desktop · Minimal · Functional · Accessible

---

## Privacy & Security

### Data Location Map

| Data            | Location                 | Purpose             |
| --------------- | ------------------------ | ------------------- |
| Email & User ID | Supabase (cloud)         | Authentication only |
| Wardrobe items  | Your device (IndexedDB)  | App functionality   |
| Clothing images | Your device (filesystem) | Visual reference    |
| Preferences     | Your device (IndexedDB)  | Personalization     |

### What We Don't Store

- ❌ Your clothing photos (never uploaded)
- ❌ Your wardrobe metadata
- ❌ Your outfit combinations
- ❌ Your browsing or usage patterns
- ❌ Any PII beyond your email

### Your Rights

- ✅ **Export** everything as JSON at any time
- ✅ **Delete** your account in one click
- ✅ **Portability** — your data, your choice

### Security Headers

This landing page and the web app enforce strict security:

- Content Security Policy (CSP)
- HTTP Strict Transport Security (HSTS)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Permissions-Policy (camera, mic, geolocation disabled)

[Full Privacy Policy →](https://fitwardrobe.me/privacy.html) · [Security Page →](https://fitwardrobe.me/security.html)

---

## Roadmap

### ✅ v1.0.1 — Live

- [x] AI clothing analysis (Gemini Vision)
- [x] Wardrobe management & advanced filters
- [x] Camera capture integration
- [x] Export/Import (JSON)
- [x] Android APK + PWA
- [x] Privacy-first local storage
- [x] Google Sign-In authentication

### 🚧 v1.1 — In Progress

- [ ] Performance optimizations
- [ ] UI/UX refinements
- [ ] Enhanced error handling
- [ ] Community feedback integration

### 📅 v1.2 — Planned

- [ ] Advanced search capabilities
- [ ] Outfit history tracking
- [ ] Comprehensive testing

### 🔮 v2.0+

- [ ] Google Play Store launch
- [ ] Native iOS app
- [ ] Multi-language support
- [ ] Optional encrypted cloud sync
- [ ] Style analytics dashboard
- [ ] AR virtual try-on (experimental)

> **Timeline:** Play Store submission planned for Q2 2026.

---

## Repository Structure

```
fitwardrobe-landing/
├── index.html              # Main landing page
├── privacy.html            # Privacy policy
├── terms.html              # Terms of service
├── cookies.html            # Cookie policy
├── security.html           # Security information
├── accessibility.html      # Accessibility statement
├── support.html            # Support page
├── css/
│   └── styles.css          # Landing page styles
├── js/
│   ├── script.js           # Main scripts
│   └── mobile-nav.js       # Mobile navigation
├── assets/                 # Logo, favicons, OG images
├── api/                    # Serverless functions (waitlist)
├── vercel.json             # Security headers & redirects
├── robots.txt              # SEO crawler config
├── sitemap.xml             # Sitemap for search engines
├── llms.txt                # LLM-readable site summary
├── CNAME                   # Custom domain (fitwardrobe.me)
├── PRD.md                  # Product requirements
├── TRD.md                  # Technical requirements
├── README.md               # This file
└── LICENSE                 # Software license
```

---

## About the Developer

Built by a **solo indie developer** passionate about making fashion accessible through technology.

- 🚀 Started as a personal project to solve wardrobe decision fatigue
- 🔒 Privacy-first because your data belongs to you
- 🆓 Free because fashion advice shouldn't be a luxury
- 🤖 AI-powered because manual tagging is tedious

---

## Contact & Support

| Channel          | Link                                                                         |
| ---------------- | ---------------------------------------------------------------------------- |
| 📧 Email         | [fitwardrobee@gmail.com](mailto:fitwardrobee@gmail.com)                      |
| 🐛 Bug Reports   | [GitHub Issues](https://github.com/fitwardrobe/fitwardrobe/issues)           |
| 💡 Feature Ideas | [GitHub Discussions](https://github.com/fitwardrobe/fitwardrobe/discussions) |
| 🌐 Website       | [fitwardrobe.me](https://fitwardrobe.me)                                     |
| 📱 Web App       | [fitwardrobe.vercel.app](https://fitwardrobe.vercel.app)                     |

**Response time:** Usually within 24–48 hours.

---

## License

**Proprietary Software** — All Rights Reserved. See [LICENSE](LICENSE) for details.

FitWardrobe uses open-source libraries. See [THIRD_PARTY_LICENSES.md](THIRD_PARTY_LICENSES.md) for attributions.

User-generated content (wardrobe items, photos) remains your property. We don't claim ownership of your data.

---

<div align="center">

**FitWardrobe** — Smart styling, zero privacy compromise.

[![Website](https://img.shields.io/badge/Website-fitwardrobe.me-1E2329?style=flat-square)](https://fitwardrobe.me)
[![Email](https://img.shields.io/badge/Email-fitwardrobee%40gmail.com-B8925A?style=flat-square)](mailto:fitwardrobee@gmail.com)

© 2026 FitWardrobe. All Rights Reserved.

</div>
