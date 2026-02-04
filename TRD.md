# Technical Requirements Document (TRD) - FitWardrobe

**Version:** 1.0.1  
**Status:** Beta  
**Date:** February 5, 2026

---

## 1. System Architecture

FitWardrobe follows a **Local-First, AI-Augmented** architecture.

### 1.1. Core Philosophy

- **Data at Rest:** All sensitive user data (photos, item metadata, outfit history) resides exclusively in the user's local storage.
- **Processing:** Heavy lifting (AI Vision/Text) is performed via external APIs (Google Gemini), but inputs are ephemeral and results are stored locally.
- **Identity:** Cloud is used only for authentication and basic profile metadata.

## 2. Technology Stack

### 2.1. Frontend

- **Framework:** React 18 with TypeScript.
- **Build Tool:** Vite (for fast HMR and optimized builds).
- **Styling:** Vanilla CSS with custom design tokens for a premium aesthetic.
- **Mobile Wrapper:** Capacitor 6 (targeting Android for Beta).

### 2.2. Backend & Services

- **Authentication:** Supabase (PostgreSQL + Gotrust) for secure email/magic-link login.
- **Serverless:** Vercel Functions (for API proxying and waitlist management).
- **Hosting:**
  - **Landing Page:** GitHub Pages (fitwardrobe.me).
  - **Application:** Vercel (fitwardrobe.vercel.app).

### 2.3. AI Intelligence

- **Vision & Reasoning:** Google Gemini 2.0 Flash API.
- **Integration:** In-memory processing (images are converted to base64, sent via HTTPS, and results are returned; images are NOT stored by FitWardrobe or Google).

## 3. Data Schema & Storage

### 3.1. Local Storage (IndexedDB)

- **Items:** `id`, `name`, `category`, `color`, `tags`, `imagePath`, `createdAt`.
- **Outfits:** `id`, `items[]`, `reasoning`, `occasion`, `rating`.
- **Settings:** `ui_theme`, `privacy_mode`, `ai_preferences`.

### 3.2. Image Storage

- **Native (Android):** Capacitor Filesystem API (stored in app's private data directory).
- **Web:** Browser Blobs or Base64 (cached in IndexedDB).

## 4. Security Measures

### 4.1. Privacy Controls

- **No Cloud Sync:** Wardrobe data is intentionally isolated from the cloud.
- **Ephemeral AI:** Images sent for analysis are processed in-memory and deleted immediately after the API call completes.
- **Security Headers:** Strict Content Security Policy (CSP), HSTS, and X-Frame-Options enforced.

### 4.2. File Integrity

- **APK Verification:** SHA-256 hash checks provided on the landing page for manual/automatic verification of download integrity.

## 5. API Design

### 5.1. Waitlist API (`/api/waitlist`)

- **Method:** `POST`
- **Purpose:** Captures lead interest for the iOS version.
- **Payload:** `{ email: string, device: 'iOS' }`

### 5.2. AI Proxy (Conceptual)

- **Method:** `POST`
- **Purpose:** Securely routes requests to Google Gemini without exposing API keys.

## 6. CI/CD & Infrastructure

- **Branch Management:**
  - `main`: Deployed to fitwardrobe.me (GitHub Pages).
  - `app-main` (internal): Deployed to fitwardrobe.vercel.app.
- **Deployment:** Automated via GitHub Actions and Vercel Integration.

## 7. Performance Requirements

- **TBT (Total Blocking Time):** < 300ms.
- **FCP (First Contentful Paint):** < 1.0s.
- **AI Latency:** Vision analysis results in < 3s.
- **Size:** APK size target < 10 MB (Currently 6.3 MB).
