# Image Optimization Guide

## What Has Been Implemented ✅

### 1. **OptimizedImage Component** (`src/components/OptimizedImage.tsx`)
A custom React component that provides:
- **Lazy Loading**: Images load only when they enter the viewport (50px before)
- **Blur Placeholder**: Shows animated gradient while loading
- **Priority Loading**: Critical images (hero sections) load immediately
- **WebP Support**: Automatically attempts to use WebP format with fallback
- **Intersection Observer**: Efficient viewport detection
- **Smooth Transitions**: Fade-in effect when loaded

### 2. **Components Updated**
- ✅ `HeroSection.tsx` - Main carousel with optimized images
- ✅ `TourDetails.tsx` - Hero, tour cards, background, carousel images
- ✅ `AboutUs.tsx` - All page images
- ✅ `AmenitiesAndTips.tsx` - Hero section

### 3. **Image Preloading**
- Carousel images preload the next slide
- Prevents delay when transitioning between slides

## Usage

### Basic Usage
```tsx
import OptimizedImage from '../components/OptimizedImage';

<OptimizedImage
  src="/images/your-image.jpg"
  alt="Description"
  className="w-full h-64"
  priority={false}
  blur={true}
  objectFit="cover"
/>
```

### Props
- `src` (required): Image source path
- `alt` (required): Alt text for accessibility
- `className` (optional): Tailwind/CSS classes
- `priority` (optional): Load immediately (use for hero/above-fold images)
- `blur` (optional): Show blur placeholder while loading (default: true)
- `objectFit` (optional): CSS object-fit value (default: 'cover')
- `onLoad` (optional): Callback when image loads

## Additional Optimizations You Should Do

### 1. **Convert Images to WebP Format** 🔴 CRITICAL
WebP provides 25-35% better compression than JPEG/PNG.

**Using online tools:**
- [Squoosh.app](https://squoosh.app/) - By Google, excellent quality
- [CloudConvert](https://cloudconvert.com/jpg-to-webp)

**Using command line (batch conversion):**
```bash
# Install cwebp (WebP converter)
# Windows: Download from https://developers.google.com/speed/webp/download

# Convert all JPG files in a folder
for %i in (*.jpg) do cwebp -q 80 %i -o %~ni.webp
for %i in (*.jpeg) do cwebp -q 80 %i -o %~ni.webp
for %i in (*.png) do cwebp -q 85 %i -o %~ni.webp
```

**Recommended settings:**
- JPEG photos: Quality 75-85
- PNG graphics: Quality 85-95
- Keep originals as fallback

### 2. **Use Responsive Images with srcset** 🟡 RECOMMENDED
Generate multiple sizes for different devices:

```tsx
// Example enhancement to OptimizedImage component
<picture>
  <source 
    media="(max-width: 640px)"
    srcSet={`${src}?w=640 640w, ${src}?w=320 320w`}
    type="image/webp"
  />
  <source 
    media="(max-width: 1024px)"
    srcSet={`${src}?w=1024 1024w, ${src}?w=768 768w`}
    type="image/webp"
  />
  <img src={src} alt={alt} />
</picture>
```

### 3. **Optimize Image Sizes** 🔴 CRITICAL
Ensure images are properly sized:
- **Hero images**: Max 1920x1080px (Full HD)
- **Carousel images**: Max 1600x900px
- **Thumbnail images**: Max 800x600px
- **Background images**: Max 1920x1080px

**Tools:**
- Photoshop / GIMP
- [TinyPNG](https://tinypng.com/)
- [ImageOptim](https://imageoptim.com/)

### 4. **Implement Image CDN** 🟡 RECOMMENDED
Consider using a CDN for faster delivery:
- **Cloudflare Images**
- **Cloudinary** (free tier available)
- **imgix**
- **AWS CloudFront**

Benefits:
- Global edge caching
- Automatic format conversion
- On-the-fly resizing
- Faster load times worldwide

### 5. **Add Image Dimensions** 🟢 NICE TO HAVE
Prevent layout shift by specifying dimensions:

```tsx
<OptimizedImage
  src="/images/tour.jpg"
  alt="Tour"
  width={800}
  height={600}
  // This prevents Cumulative Layout Shift (CLS)
/>
```

### 6. **Implement Progressive JPEGs** 🟢 NICE TO HAVE
Progressive JPEGs load in layers (low to high quality):
```bash
# Using ImageMagick
magick convert input.jpg -interlace Plane output.jpg
```

### 7. **Use CSS to Limit Image Decode Time** 🟢 NICE TO HAVE
```css
img {
  content-visibility: auto;
  decoding: async;
}
```

### 8. **Monitor Performance** 📊
Track loading performance:
- Use Chrome DevTools > Network tab
- Check Lighthouse scores
- Monitor Core Web Vitals (LCP, FID, CLS)

**Target Metrics:**
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

### 9. **Implement Service Worker Caching** 🟡 RECOMMENDED
Cache images for repeat visits:
```javascript
// In your service worker
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
```

## File Size Targets

| Image Type | Max Size | Recommended Format |
|------------|----------|-------------------|
| Hero images | 200-300 KB | WebP/JPEG |
| Carousel images | 150-250 KB | WebP/JPEG |
| Thumbnail images | 50-100 KB | WebP/JPEG |
| Icon images | 10-20 KB | WebP/PNG |

## Batch Optimization Script

```powershell
# PowerShell script for batch image optimization
# Requires: cwebp.exe in PATH

$quality = 80
$sourceDir = "public/images"
$outputDir = "public/images/optimized"

Get-ChildItem -Path $sourceDir -Include *.jpg,*.jpeg,*.png -Recurse | ForEach-Object {
    $outputPath = $_.FullName.Replace($sourceDir, $outputDir).Replace($_.Extension, ".webp")
    $outputFolder = Split-Path $outputPath -Parent
    
    if (!(Test-Path $outputFolder)) {
        New-Item -ItemType Directory -Path $outputFolder -Force
    }
    
    & cwebp -q $quality $_.FullName -o $outputPath
    Write-Host "Converted: $($_.Name) -> $([System.IO.Path]::GetFileName($outputPath))"
}
```

## Testing Performance

### Before Testing
1. Open DevTools (F12)
2. Go to Network tab
3. Disable cache (checkbox)
4. Throttle to "Fast 3G" or "Slow 3G"
5. Reload page

### Metrics to Check
- Total image size transferred
- Number of images loaded
- Time to First Contentful Paint (FCP)
- Time to Largest Contentful Paint (LCP)

### Lighthouse Audit
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Select "Performance"
4. Click "Generate report"
5. Focus on image-related suggestions

## Next Steps Priority

### High Priority (Do First) 🔴
1. ✅ Implement lazy loading (DONE)
2. ❌ Convert all images to WebP format
3. ❌ Resize images to appropriate dimensions
4. ❌ Compress all images

### Medium Priority 🟡
5. ❌ Implement responsive images (srcset)
6. ❌ Set up CDN
7. ❌ Add service worker caching

### Low Priority 🟢
8. ❌ Add explicit dimensions to prevent CLS
9. ❌ Convert to progressive JPEGs
10. ❌ Implement advanced caching strategies

## Need Help?

If you have questions about any of these optimizations, check:
- [web.dev/fast](https://web.dev/fast/) - Google's performance guide
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Performance)
- [WebP Documentation](https://developers.google.com/speed/webp)
