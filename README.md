# Portfolio Website - User Guide

## 📸 Profile Picture Feature

Your portfolio now includes a professional profile picture section with these features:

### How to Add Your Photo

1. **Click Upload**
   - Simply click on the circular profile area in the hero section
   - A file picker will appear

2. **Select Image**
   - Choose any image file (JPG, PNG, GIF, WebP)
   - Your photo will instantly appear in the circle

3. **Auto-Save**
   - Your photo is automatically saved to your browser
   - It will remain there even after you close and reopen the page

### Image Guidelines

For the best results:
- **Recommended size**: 500x500 pixels or larger
- **Aspect ratio**: Square (1:1) works best
- **Format**: JPG or PNG
- **File size**: Keep under 2MB for fast loading
- **Type**: Professional headshot or portrait photo

### Alternative: Using a Permanent Image

If you want to use a fixed image instead of the upload feature:

1. Save your photo as `profile.jpg` in the same folder as `index.html`
2. The website will automatically display it

OR

Edit line 78 in `index.html`:
```html
<img src="profile.jpg" alt="Samyuktha M - Profile Picture" id="profileImage">
```
Change `profile.jpg` to your image filename (e.g., `my-photo.png`)

## 🎨 Design Features

- **Animated decorative circles** - Floating gradient circles around your photo
- **Hover effect** - Photo slightly enlarges when you hover over it
- **Responsive design** - Looks great on all screen sizes
- **Modern styling** - Professional gradient borders and shadows

## 🌐 Hosting Your Portfolio

### Quick Deploy Options:

1. **Netlify** (Easiest - Recommended)
   - Go to netlify.com
   - Drag and drop your folder
   - Done!

2. **GitHub Pages**
   - Create a repository named `YourUsername.github.io`
   - Upload all files
   - Enable Pages in settings

3. **Vercel**
   - Import your project at vercel.com
   - Deploy instantly

## 📁 File Structure

```
portfolio/
├── index.html       # Main HTML file
├── styles.css       # All styling
├── script.js        # JavaScript functionality
├── profile.jpg      # Your profile picture (optional)
└── README.md        # This file
```

## 🔧 Customization Tips

### Change Colors
Edit `styles.css` (lines 8-15):
```css
--primary-color: #2563eb;  /* Main blue color */
--secondary-color: #7c3aed; /* Purple accent */
```

### Adjust Profile Picture Size
Edit `styles.css` (around line 130):
```css
.profile-picture {
    width: 350px;  /* Change this */
    height: 350px; /* And this */
}
```

### Update Contact Information
Edit `index.html`:
- Email: Line 64
- Phone: Line 234
- LinkedIn: Line 54
- GitHub: Line 59

## 🚀 Performance Tips

1. **Optimize Images**: Use tools like TinyPNG to compress your profile photo
2. **Use WebP**: Modern image format for smaller file sizes
3. **CDN Hosting**: Netlify/Vercel provide free CDN automatically

## 📱 Mobile Responsive

The portfolio automatically adjusts for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

On mobile, the profile picture appears above the text content.

## 🎯 SEO Tips

1. Replace the placeholder text in `<title>` tag
2. Update meta descriptions
3. Add your actual image filename to the `og:image` tag
4. Submit your sitemap to Google Search Console

## 💡 Need Help?

- **Image not showing?** Check the file path and name
- **Upload not working?** Make sure JavaScript is enabled
- **Layout broken?** Clear browser cache and reload
- **Mobile issues?** Check the viewport meta tag is present

## 📄 License

Feel free to customize this portfolio for your personal use!

---

**Created for**: Samyuktha M  
**Last Updated**: 2024  
**Version**: 2.0 (with profile picture feature)
