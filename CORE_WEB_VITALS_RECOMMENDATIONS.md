# Core Web Vitals Optimization Guide

## Issues & Solutions

### 1. **LCP (Largest Contentful Paint)** — Medium Priority: ~3.5s (Target: <2.5s)

#### Problem Areas:
- Hero background image (`/HeroNewImage.webp`) not prioritized
- Custom fonts (@font-face) blocking render
- Multiple images loading sequentially

#### Fixes:

**A. Add `preload` hint for hero image in `index.html`:**
```html
<head>
  <!-- Preload critical images -->
  <link rel="preload" as="image" href="/HeroNewImage.webp" imagesrcset="/HeroNewImage.webp 2000w, /HeroNewImage-small.webp 1000w" imagesizes="100vw">
  
  <!-- Preload fonts with font-display: swap -->
  <link rel="preload" as="font" href="./src/fonts/gwyner-regular.ttf" type="font/ttf" crossorigin>
</head>
```

**B. Update `src/index.css` - Add `font-display: swap`:**
```css
@font-face {
  font-family: 'gwynerFont';
  src: url('./fonts/gwyner-regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;  /* Allow fallback font during load */
}
```

**C. Optimize hero image loading - `src/components/landing/HeroNew.jsx`:**
```jsx
<img
  src="/HeroNewImage.webp"
  alt="hero section background"
  className="absolute inset-0 w-full h-full object-cover"
  fetchPriority="high"
  loading="eager"
/>
```

**D. Add different image sizes for responsive loading:**
```jsx
<picture>
  <source media="(max-width: 768px)" srcSet="/HeroNewImage-mobile.webp">
  <img
    src="/HeroNewImage.webp"
    alt="hero section background"
    fetchPriority="high"
    className="absolute inset-0 w-full h-full object-cover"
  />
</picture>
```

---

### 2. **FID/INP (Interaction to Next Paint)** — High Priority: Currently ~120ms (Target: <100ms)

#### Problem Areas:
- AOS library initializes heavy animations on every page
- Scroll event listeners in Navbar (NO debouncing)
- Lenis smooth scroll processing every frame
- GSAP animations consuming main thread

#### Fixes:

**A. Debounce scroll handler in `src/components/Navbar.jsx`:**
```jsx
// Add this utility at top of file
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Update scroll handler
useEffect(() => {
  if (!isHome) {
    setIsScrolled(true);
    return;
  }

  const handleScroll = debounce(() => {
    setIsScrolled(window.scrollY > 200);
  }, 50); // Throttle to 50ms

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, [isHome]);
```

**B. Lazy initialize AOS - `src/App.jsx`:**
```jsx
// Instead of initializing on mount, initialize only on scroll
const [aosInitialized, setAosInitialized] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (!aosInitialized && window.scrollY > 100) {
      AOS.init({
        duration: 800,
        once: false,
        offset: 120,
      });
      setAosInitialized(true);
      window.removeEventListener('scroll', handleScroll);
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, [aosInitialized]);
```

**C. Make Lenis scroll passive:**
```jsx
// In relevant component where Lenis is used
const lenis = new Lenis({
  smooth: true,
  direction: 'vertical',
  gestureDirection: 'vertical',
  wheelMultiplier: 1,
  smoothWheel: true,
});

const raf = (time) => {
  lenis.raf(time);
  requestAnimationFrame(raf);
};

requestAnimationFrame(raf);

// Use passive listener
window.addEventListener('scroll', () => {}, { passive: true });
```

---

### 3. **CLS (Cumulative Layout Shift)** — Low Priority: ~0.08 (Target: <0.1 - good)

#### Problem Areas:
- Images without explicit dimensions (partner images, hero)
- Google Maps iframes without size constraints
- Diagonal stripe background in Contact page

#### Fixes:

**A. Add explicit dimensions to images - `src/pages/LeadershipsWithPhoto.jsx`:**
```jsx
<img
  src={partner.image}
  alt={`${partner.name} profile`}
  className="sm:w-48 w-[60%] h-auto rounded-xl object-cover"
  width={192}  // Add explicit dimensions
  height={192}
/>
```

**B. Constrain Google Maps iframes - `src/pages/Contact.jsx`:**
```jsx
<div className="w-full h-[200px] sm:h-[250px] md:h-[280px] rounded overflow-hidden shadow-lg">
  <iframe
    src={mapEmbed.props.src}
    width="100%"
    height="100%"
    style={{ border: 0, display: 'block' }}  // Add display: block
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
```

**C. Optimize diagonal stripes - use CSS `backdrop-filter` instead:**
```css
/* Instead of inline style in JSX, use efficient CSS */
.striped-background {
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 2px,
    #f3f4f6 2px,
    #f3f4f6 4px
  );
  will-change: background-image; /* Hint to GPU */
}
```

---

### 4. **Bundle Size & Code Splitting** — Medium Priority

#### Issues:
- All routes eagerly loaded
- Large libraries (GSAP, Lenis, AOS, Motion) loaded immediately
- No lazy loading for route components

#### Fixes:

**A. Update `src/App.jsx` - Route-based code splitting:**
```jsx
import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Static imports (needed immediately)
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Landing from './pages/Landing.jsx';

// Lazy load routes
const About = lazy(() => import('./pages/About.jsx'));
const Industries = lazy(() => import('./pages/Industries.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const LeadershipsWithPhoto = lazy(() => import('./pages/LeadershipsWithPhoto.jsx'));
const Accounting = lazy(() => import('./pages/ServicesPages/AccountingPage.jsx'));
const AuditAndAssurance = lazy(() => import('./pages/ServicesPages/AuditAndAssurancePage.jsx'));
const BusinessAdvisory = lazy(() => import('./pages/ServicesPages/BusinessAdvisoryPage.jsx'));
const ComplianceSupport = lazy(() => import('./pages/ServicesPages/ComplianceSupportPage.jsx'));
const DirectIndirectTax = lazy(() => import('./pages/ServicesPages/DirectIndirectTaxAdvisoryPage.jsx'));
const SpecializedServices = lazy(() => import('./pages/ServicesPages/SpecializedServicePage.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));
const Terms = lazy(() => import('./pages/Terms.jsx'));
const Disclamer = lazy(() => import('./pages/Disclamer.jsx'));

// Loading skeleton
const LoadingFallback = () => <div className="min-h-screen flex items-center justify-center">Loading...</div>;

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false, offset: 120 });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path="/about" element={<About />} />
          {/* ... other routes ... */}
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
```

**B. Update `vite.config.js` - Add chunk optimization:**
```js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'animations': ['gsap', 'aos', 'motion', 'lenis'],
          'ui': ['lucide-react', 'tailwindcss'],
        }
      }
    },
    chunkSizeWarningLimit: 600,
  },
  plugins: [
    react(),
    tailwindcss(),
    visualizer({ open: true, filename: 'stats.html' }),
  ]
});
```

---

### 5. **Image Optimization** — High Priority

#### Issues:
- WebP format good, but no fallbacks
- Partner images in LeadershipsWithPhoto not lazy loaded
- No picture elements for responsive images

#### Fixes:

**A. Create responsive images with webpack config:**
```js
// Add to vite.config.js or use separate build script
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

export const optimizeImages = async () => {
  await imagemin(['public/webp/**/*.webp'], {
    destination: 'public/webp',
    plugins: [imageminWebp({ quality: 75 })]
  });
};
```

**B. Lazy load partner images - `src/pages/LeadershipsWithPhoto.jsx`:**
```jsx
<img
  src={partner.image}
  alt={`${partner.name} profile`}
  className="sm:w-48 w-[60%] rounded-xl object-cover"
  loading="lazy"  // Key addition
  width={192}
  height={192}
/>
```

**C. Service page images:**
```jsx
<picture>
  <source type="image/webp" srcSet={serviceImage.webp} />
  <img 
    src={serviceImage.png}
    loading="lazy"
    decoding="async"
  />
</picture>
```

---

### 6. **CSS/Font Optimization** — Medium Priority

#### Fixes:

**A. Add `preconnect` for Google Fonts in `index.html`:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

**B. Font subsetting in `index.css`:**
```css
/* Only load Latin characters instead of full Unicode */
@font-face {
  font-family: 'Playfair Display';
  src: url('https://fonts.gstatic.com/s/playfairdisplay/...') format('woff2');
  font-display: swap;
  unicode-range: U+0000-U+00FF; /* Latin only */
}
```

---

## Summary Table

| Metric | Current | Target | Priority | Effort |
|--------|---------|--------|----------|--------|
| **LCP** | ~3.5s | <2.5s | HIGH | Medium |
| **FID/INP** | ~120ms | <100ms | HIGH | Medium |
| **CLS** | ~0.08 | <0.1 | LOW | Low |
| **Total JS** | ~250KB | ~180KB | MEDIUM | High |
| **Total CSS** | ~45KB | ~30KB | MEDIUM | Medium |

---

## Implementation Priority

1. **Phase 1 (Quick wins - 1-2 hours):**
   - Add preload hints for hero image
   - Fix font-display: swap
   - Add explicit image dimensions
   - Debounce scroll handlers

2. **Phase 2 (Medium effort - 3-4 hours):**
   - Implement route-based code splitting
   - Lazy load AOS initialization
   - Optimize image loading strategies
   - Add manualChunks in Vite

3. **Phase 3 (Advanced optimizations - 4-5 hours):**
   - Implement Image CDN
   - Service Workers for caching
   - WebP with fallbacks
   - Critical CSS extraction

---

## Testing Tools

- **PageSpeed Insights:** https://pagespeed.web.dev/
- **Web Vitals Extension:** Chrome Web Store
- **Lighthouse:** Built into Chrome DevTools
- **WebPageTest:** https://www.webpagetest.org/

Run tests after each phase to measure improvements.
