# Deployment Guide - Sammunat LLC Landing Page

## 🚀 Deploy to Vercel

### Method 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy from project directory**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? `Y`
   - Which scope? Select your account
   - Link to existing project? `N`
   - Project name: `sammunat-landing` (or your preferred name)
   - Directory: `./` (current directory)

5. **Production deployment**
   ```bash
   vercel --prod
   ```

### Method 2: Deploy via Vercel Dashboard

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Sammunat LLC landing page"
   git branch -M main
   git remote add origin https://github.com/yourusername/sammunat-landing.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure project settings (see below)
   - Click "Deploy"

## ⚙️ Vercel Project Configuration

### Environment Variables
Add these in Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME=Sammunat LLC
NEXT_PUBLIC_SITE_DESCRIPTION=IT Services & Digital Growth Consultancy
NEXT_PUBLIC_CONTACT_EMAIL=hello@sammunat.com
NEXT_PUBLIC_CONTACT_PHONE=+1 (555) 123-4567
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/sammunat
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/sammunat
NEXT_PUBLIC_WHATSAPP_URL=https://whatsapp.com/channel/sammunat
```

### Build Settings
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

## 📁 Files Created for Deployment

### Core Configuration
- `vercel.json` - Vercel deployment configuration
- `.env.example` - Environment variables template
- `.env.local` - Local environment variables

### SEO & PWA
- `public/robots.txt` - Search engine crawling rules
- `public/sitemap.xml` - Site structure for search engines
- `public/manifest.json` - Progressive Web App manifest
- `public/favicon.ico` - Website icon (placeholder)

### Enhanced Metadata
- Updated `app/layout.tsx` with comprehensive SEO metadata
- Open Graph tags for social media sharing
- Twitter Card optimization
- Google verification setup

## 🔧 Pre-Deployment Checklist

### 1. Update Content
- [ ] Replace placeholder contact information
- [ ] Update social media links
- [ ] Add real company logo/favicon
- [ ] Review and customize all text content

### 2. SEO Optimization
- [ ] Update `robots.txt` with your domain
- [ ] Update `sitemap.xml` with your domain
- [ ] Add Google Analytics ID (optional)
- [ ] Add Google Search Console verification

### 3. Performance
- [ ] Optimize images (add to `public/` folder)
- [ ] Test build locally: `npm run build`
- [ ] Check for console errors

### 4. Security
- [ ] Review environment variables
- [ ] Ensure no sensitive data in code
- [ ] Test all forms and interactions

## 🌐 Custom Domain Setup

### 1. Add Domain in Vercel
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

### 2. Update Environment Variables
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 3. Update SEO Files
- Update `robots.txt` with new domain
- Update `sitemap.xml` with new domain
- Update social media meta tags

## 📊 Post-Deployment

### Analytics Setup (Optional)
1. **Google Analytics**
   - Create GA4 property
   - Add tracking ID to environment variables
   - Update layout.tsx with tracking code

2. **Google Search Console**
   - Add and verify your domain
   - Submit sitemap
   - Monitor search performance

### Performance Monitoring
- Use Vercel Analytics (built-in)
- Monitor Core Web Vitals
- Check Lighthouse scores

## 🚨 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   npm run build
   ```
   Check console for specific errors

2. **Environment Variables**
   - Ensure all required variables are set in Vercel
   - Redeploy after adding new variables

3. **Domain Issues**
   - Check DNS propagation
   - Verify SSL certificate status

4. **Performance Issues**
   - Optimize images
   - Check bundle size
   - Review animation performance

## 📞 Support

For deployment issues:
- Check Vercel documentation
- Review build logs in Vercel dashboard
- Test locally before deploying

---

**Ready to Deploy!** 🚀

Your Sammunat LLC landing page is now configured for seamless Vercel deployment with optimized performance, SEO, and security settings.