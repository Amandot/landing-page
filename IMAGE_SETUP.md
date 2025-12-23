# Image Setup Instructions

## 🖼️ Adding the Futuristic Cityscape Image

To complete the implementation of the futuristic cityscape image on your landing page, follow these steps:

### Step 1: Save the Image
1. **Save the image** you provided as `hero-bg.jpg` in the `public/` folder
2. **Replace** the placeholder file `public/hero-bg.jpg` with the actual image
3. **Recommended dimensions**: 1920x1080 or higher for best quality

### Step 2: Image Optimization (Optional but Recommended)
For better performance, you can:
1. **Compress the image** using tools like:
   - [TinyPNG](https://tinypng.com/)
   - [ImageOptim](https://imageoptim.com/)
   - [Squoosh](https://squoosh.app/)

2. **Create multiple sizes** for responsive loading:
   - `hero-bg-mobile.jpg` (768px width)
   - `hero-bg-tablet.jpg` (1024px width)
   - `hero-bg-desktop.jpg` (1920px width)

### Step 3: Alternative Formats (Advanced)
For even better performance, consider creating WebP versions:
- `hero-bg.webp`
- `hero-bg-mobile.webp`
- `hero-bg-tablet.webp`

## 🎨 Where the Image is Used

The futuristic cityscape image is now implemented in:

### 1. **Hero Section Background**
- Location: `app/components/Hero.tsx`
- Usage: Full-screen background with overlay
- Effect: Creates an immersive entry point

### 2. **Tech Showcase Section**
- Location: `app/components/TechShowcase.tsx`
- Usage: Background for the technology features section
- Effect: Reinforces the futuristic theme

## 🎯 Visual Effects Applied

### Hero Section:
- **Background Image**: Full cover with center positioning
- **Overlay**: Semi-transparent royal blue for text readability
- **Backdrop Blur**: Subtle blur effect for depth

### Tech Showcase Section:
- **Background Image**: Same futuristic cityscape
- **Darker Overlay**: More opacity for better contrast
- **Glassmorphism Cards**: Transparent cards with backdrop blur
- **Animated Elements**: Floating dots and pulse effects

## 🔧 Customization Options

### Adjust Overlay Opacity
In `Hero.tsx`, modify the overlay:
```jsx
<div className="absolute inset-0 bg-royal-blue/60 backdrop-blur-[1px]"></div>
```
Change `/60` to `/40` for lighter overlay or `/80` for darker

### Change Background Position
Modify the background positioning:
```jsx
className="absolute inset-0 bg-cover bg-center bg-no-repeat"
```
- `bg-top` - Position at top
- `bg-bottom` - Position at bottom
- `bg-left` - Position at left

### Add Parallax Effect (Advanced)
For a parallax scrolling effect, you can modify the background attachment:
```css
background-attachment: fixed;
```

## 📱 Mobile Optimization

The image implementation includes:
- **Responsive sizing**: Automatically scales on all devices
- **Performance optimization**: Reduced animation delays on mobile
- **Touch-friendly**: All interactive elements work on touch devices

## 🚀 Performance Tips

1. **Preload the image** for faster loading:
   ```html
   <link rel="preload" href="/hero-bg.jpg" as="image">
   ```

2. **Use Next.js Image component** for automatic optimization:
   ```jsx
   import Image from 'next/image'
   ```

3. **Lazy load** for sections below the fold

## ✅ Final Result

Once you add the actual image file, your landing page will feature:
- **Stunning hero section** with the futuristic cityscape
- **Immersive tech showcase** section
- **Professional cyberpunk aesthetic**
- **Smooth animations** and effects
- **Fully responsive** design

The image perfectly complements Sammunat's technology-focused brand and creates a memorable first impression for visitors!