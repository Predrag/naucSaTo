# Náuka Portál

Bezplatné vzdelávacie materiály z fyziky, matematiky a chémie pre žiakov ZŠ a SŠ na Slovensku.

**Live:** https://naukaportal.netlify.app

---

## Lokálny vývoj

```bash
# Inštalácia závislostí
npm install

# Spustenie dev servera (http://localhost:3000)
npm run dev

# Build na produkciu
npm run build

# Lokálny náhľad production buildu
npm run preview
```

---

## Testy

```bash
# Unit testy (Vitest)
npm run test:unit

# E2E testy (Playwright)
npm run test:e2e

# E2E testy s UI
npm run test:e2e:ui
```

---

## Nasadenie na Netlify

### 1. Prvé nasadenie

1. Pushni kód na GitHub (ak ešte nie je)
2. Prihlás sa na [netlify.com](https://netlify.com)
3. Klikni **Add new site → Import an existing project**
4. Vyber **GitHub** a autorizuj Netlify
5. Vyber repozitár `naukaportal` (alebo jeho aktuálny názov)
6. Netlify automaticky rozpozná `netlify.toml` — build settings sa nastavia samy
7. V sekcii **Environment variables** pridaj:
   ```
   NUXT_PUBLIC_SITE_URL = https://naukaportal.netlify.app
   ```
8. Klikni **Deploy site**

> ⏱ Build trvá cca 2–4 minúty.

### 2. Automatické nasadenie (CI/CD)

Po prepojení s GitHubom Netlify automaticky:
- nasadí každý `push` na `master`/`main` vetvu
- vytvorí náhľad (Deploy Preview) pre každý Pull Request

### 3. Manuálne opätovné nasadenie

V Netlify dashboarde: **Deploys → Trigger deploy → Deploy site**

### 4. Vlastná doména (voliteľné)

1. Netlify dashboard → **Domain management → Add domain**
2. Zadaj svoju doménu (napr. `naukaportál.sk`)
3. Nastav DNS záznamy u svojho registrátora:
   ```
   CNAME  www   naukaportal.netlify.app
   A      @     75.2.60.5
   ```
4. Netlify automaticky vydá SSL certifikát (Let's Encrypt)
5. Aktualizuj `NUXT_PUBLIC_SITE_URL` a `public/robots.txt` na novú doménu

---

## Indexovanie na Google (SEO)

### 1. Overenie vlastníctva stránky

1. Choď na [Google Search Console](https://search.google.com/search-console)
2. Klikni **Add property** → **URL prefix**
3. Zadaj `https://naukaportal.netlify.app`
4. Zvol spôsob overenia — najjednoduchší je **HTML tag**:
   - Skopíruj meta tag napr. `<meta name="google-site-verification" content="ABC123" />`
   - Pridaj ho do `app/app.vue` do `useHead()`:
     ```ts
     useHead({
       meta: [
         { name: 'google-site-verification', content: 'ABC123' }
       ]
     })
     ```
   - Deployni zmenu na Netlify
   - V Search Console klikni **Verify**

### 2. Odovzdanie sitemapy

1. Po overení vlastníctva choď do **Sitemaps** (ľavý panel)
2. Zadaj URL sitemapy: `https://naukaportal.netlify.app/sitemap.xml`
3. Klikni **Submit**

> Google začne indexovať stránky do 1–7 dní. Sleduj postup v sekcii **Coverage**.

### 3. Prvá kontrola indexovania

- Do Googlu zadaj: `site:naukaportal.netlify.app`
- Ak vidíš výsledky, Google stránku indexoval
- Ak nie, počkaj niekoľko dní alebo v Search Console klikni **Request indexing** na konkrétnych stránkach

### 4. Bing / DuckDuckGo (voliteľné)

- **Bing Webmaster Tools:** https://www.bing.com/webmasters
- Postup je podobný ako Google Search Console

---

## Štruktúra projektu

```
app/
  pages/fyzika/        # Fyzika — stránky a podsekcie
    mechanika/         # Kinematika, Newtonove zákony, ...
    molekulova-fyzika/ # Ideálny plyn, skupenstvá, ...
    elektricky-prud/   # Ohm, rezistory, výkon, ...
    magneticke-pole/   # Indukcia, generátor, ...
    optika/            # Odraz, lom, šošovky, ...
    atomova-fyzika/    # Rádioaktivita, jadrová energia, ...
    osobnosti/         # Newton, Joule, Petzval, ...
  components/          # Zdieľané komponenty (MathFormula, SearchModal, ...)
  layouts/             # Default layout (navbar + footer)
  utils/               # searchIndex.ts, converter.ts
tests/
  e2e/                 # Playwright testy
  unit/                # Vitest testy
public/
  robots.txt           # Pre web crawlery
netlify.toml           # Konfigurácia Netlify deploymentu
```

---

## Technológie

| Technológia | Účel |
|---|---|
| [Nuxt 4](https://nuxt.com) | SSR framework (Vue 3) |
| [Tailwind CSS](https://tailwindcss.com) | Štýlovanie |
| [KaTeX](https://katex.org) | Renderovanie matematických vzorcov |
| [Fuse.js](https://fusejs.io) | Fulltextové vyhľadávanie |
| [Playwright](https://playwright.dev) | E2E testy |
| [Vitest](https://vitest.dev) | Unit testy |
| [Netlify](https://netlify.com) | Hosting a CI/CD |
