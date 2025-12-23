# Installation Guide - Sammunat LLC Interactive Landing Page

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Dependencies Installed

### Core Framework
- **Next.js 14** - React framework with App Router
- **React 18** - Latest React with concurrent features
- **TypeScript** - Type safety and better development experience

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Autoprefixer** - CSS vendor prefixing
- **PostCSS** - CSS processing

### Animation Libraries
- **Framer Motion** - React animation library
- **GSAP** - Professional animation library
- **Lenis** - Smooth scrolling library
- **@barba/core** - Page transition library
- **@barba/css** - CSS transitions for Barba

### 3D Graphics
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber

### Icons
- **Lucide React** - Beautiful, customizable icons

## 🎯 Features Overview

### Interactive Elements
- ✅ 3D Particle Background
- ✅ Magnetic Buttons
- ✅ Custom Cursor
- ✅ Glitch Text Effects
- ✅ Floating Icons
- ✅ Scroll Progress Indicators

### Animations
- ✅ Barba.js Page Transitions
- ✅ Smooth Scrolling with Lenis
- ✅ GSAP Micro-interactions
- ✅ Framer Motion Components
- ✅ Loading Screen Animation
- ✅ Parallax Effects

### Performance
- ✅ Next.js 14 App Router
- ✅ TypeScript for type safety
- ✅ Optimized animations (60fps)
- ✅ Responsive design
- ✅ SEO optimized

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  'royal-blue': '#0f172a',
  'teal': '#14b8a6',
  'teal-light': '#5eead4',
}
```

### Animations
Modify animation settings in individual components:
- `MagneticButton.tsx` - Magnetic attraction strength
- `GlitchText.tsx` - Glitch effect timing
- `InteractiveBackground.tsx` - Particle system settings

### Content
Update content in component files:
- `Hero.tsx` - Main headline and CTA
- `Services.tsx` - Service offerings
- `Footer.tsx` - Contact information

## 🚨 Troubleshooting

### Common Issues

1. **Module not found errors**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Animation performance issues**
   - Check browser hardware acceleration
   - Reduce particle count in `InteractiveBackground.tsx`

3. **Build errors**
   ```bash
   npm run build
   ```
   Check console for specific error messages

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📱 Mobile Optimization

The landing page is fully responsive with:
- Touch-optimized interactions
- Reduced animations on mobile
- Custom cursor disabled on touch devices
- Optimized performance for mobile browsers

## 🎯 Performance Tips

1. **Reduce particle count** for lower-end devices
2. **Disable complex animations** on mobile
3. **Use `will-change` CSS property** sparingly
4. **Optimize images** with Next.js Image component
5. **Lazy load** non-critical components

## 🔒 Production Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
```bash
npm run build
npm start
```

## 📞 Support

For technical support or customization requests:
- Email: hello@sammunat.com
- Documentation: Check component files for inline comments
- Issues: Review browser console for error messages

---

**Note**: This landing page uses cutting-edge web technologies. Ensure your target audience uses modern browsers for the best experience.