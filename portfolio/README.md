# 🎨 3D Interactive Data Analyst Portfolio

A modern, interactive 3D portfolio website showcasing your data analytics and business intelligence projects. Built with Three.js, HTML5, and CSS3.

## ✨ Features

- **3D Animated Background** - Interactive particle system using Three.js
- **Glassmorphism Design** - Modern frosted glass UI effects
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop
- **Smooth Animations** - GSAP-powered smooth transitions and interactions
- **Project Showcase** - Automatic integration of all your GitHub projects
- **Interactive Cards** - Hover effects and 3D transformations
- **Dark Theme** - Easy on the eyes with gradient backgrounds

## 📁 File Structure

```
portfolio/
├── index.html      # Main HTML file
├── styles.css      # All styling and animations
├── script.js       # Three.js and interactivity logic
└── README.md       # This file
```

## 🚀 Quick Start

### Option 1: Local Development
1. Clone or download the repository
2. Navigate to the `portfolio` directory
3. Open `index.html` in your web browser
4. That's it! No build tools required.

### Option 2: GitHub Pages (Recommended)
1. Enable GitHub Pages in your repository settings
2. Set the source branch to `portfolio-dev` and folder to `/portfolio`
3. Your portfolio will be live at: `https://Nageswararaokakarapathi.github.io/Loan-Default-Risk-Analytics/`

### Option 3: Deploy to Web Server
1. Upload the `portfolio` folder to your web hosting
2. Access via your domain

## 📊 Featured Projects

Your portfolio automatically displays:

1. **Loan Default Risk Analytics** - Predictive modeling for credit risk assessment
2. **E-Commerce BI Analysis** - SQL-based business intelligence
3. **Employee Attrition Dashboard** - Power BI workforce analytics
4. **E-Commerce Power BI Dashboard** - Sales and performance metrics
5. **E-Commerce BI Analytics** - Python-based customer intelligence

## 🎯 Customization Guide

### Change Your Name/Title
Edit `index.html` (lines 51-52):
```html
<h1 class="hero-title">Your Name</h1>
<p class="hero-subtitle">Your Title | Your Specialty</p>
```

### Update Contact Links
Edit `index.html` (lines 145-148):
```html
<a href="https://github.com/YourUsername" class="contact-btn" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/yourprofile" class="contact-btn" target="_blank">LinkedIn</a>
<a href="mailto:your-email@example.com" class="contact-btn">Email</a>
```

### Add More Projects
Edit `script.js` in the `projectsData` array (around line 77):
```javascript
{
    title: "Your Project Title",
    description: "Project description",
    icon: "📊",
    repo: "your-repo-name",
    link: "https://github.com/YourUsername/your-repo-name"
}
```

### Change Color Scheme
Edit `styles.css` and replace these gradient colors:
- `#667eea` - Primary purple
- `#764ba2` - Secondary purple
- `#0f0c29` - Dark background

Or update the gradient lines:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 🎨 Color Palette

Current theme (customizable):
- **Primary**: #667eea (Purple)
- **Secondary**: #764ba2 (Dark Purple)
- **Background**: #0f0c29 (Deep Blue)
- **Accent**: #b8b8ff (Light Purple)

## 📱 Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚙️ Technical Stack

- **Three.js** - 3D graphics and animations
- **GSAP** - Smooth animations and transitions
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and transforms
- **Vanilla JavaScript** - No frameworks required

## 📈 Performance Tips

1. The 3D scene runs at 60 FPS on most devices
2. Particle count is optimized for performance (500 particles)
3. Lazy loading for projects on mobile
4. GPU-accelerated CSS transforms

## 🔧 Troubleshooting

**3D background not showing?**
- Ensure WebGL is enabled in your browser
- Check browser console for errors (F12)
- Try a different browser

**Projects not loading?**
- Verify GitHub URLs are correct in `script.js`
- Check your internet connection
- Clear browser cache (Ctrl+Shift+Delete)

**Animations laggy?**
- Reduce particle count in `script.js` (line 27)
- Disable hardware acceleration in browser settings
- Use a more powerful device

## 📄 License

This portfolio template is free to use and modify for personal purposes.

## 🤝 Support

For issues or questions:
1. Check the customization guide above
2. Review your browser's developer console (F12)
3. Ensure all files are in the same directory

## 🎓 Learning Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [GSAP Animations](https://gsap.com/)
- [CSS Tricks](https://css-tricks.com/)
- [Web Vitals](https://web.dev/vitals/)

---

**Created with ❤️ for your data analytics journey!**