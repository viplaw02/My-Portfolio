# Modern Portfolio Website

A stunning, fully responsive personal portfolio website built with modern web technologies.

## 🚀 Features

✨ **Modern Design**
- Glassmorphism effects
- Gradient colors and smooth animations
- Dark/Light mode toggle
- Fully responsive design (mobile, tablet, desktop)

📱 **Responsive Layout**
- Mobile-first approach
- Hamburger menu for mobile devices
- Optimized for all screen sizes

🎨 **Stunning UI/UX**
- Smooth scroll navigation
- Animated components with Framer Motion
- Professional gradient effects
- Hover animations and transitions

🛠️ **Built With**
- React.js - Frontend framework
- Tailwind CSS - Utility-first CSS framework
- Framer Motion - Animation library
- React Icons - Icon library
- React Hook Form - Form validation
- React Scroll - Smooth scrolling

## 📋 Sections

1. **Hero Section** - Impressive introduction with CTA buttons
2. **About Section** - Professional summary and expertise
3. **Skills Section** - Technical skills with progress bars
4. **Projects Section** - Showcase of featured projects
5. **Experience Section** - Timeline of education and work experience
6. **Contact Section** - Contact form with social links

## 🎯 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

The build folder is ready to be deployed.

## 📝 Customization

### Update Personal Information
Edit the following files to add your personal details:

- **Hero Section**: `src/sections/HeroSection.jsx` - Update name, title, and introduction
- **About Section**: `src/sections/AboutSection.jsx` - Add your bio and achievements
- **Skills Section**: `src/sections/SkillsSection.jsx` - Update your technical skills
- **Projects Section**: `src/sections/ProjectsSection.jsx` - Add your projects
- **Experience Section**: `src/sections/ExperienceSection.jsx` - Add your education and work experience
- **Contact Section**: `src/sections/ContactSection.jsx` - Update contact information

### Update Social Links
Update the social media links in:
- `src/components/Navbar.jsx`
- `src/sections/ContactSection.jsx`

### Customize Colors
Edit the Tailwind configuration in `tailwind.config.js` to change the color scheme.

### Add Your Images
Replace placeholder images in the projects section with your own images.

## 🎨 Theme Customization

The portfolio supports dark and light modes. Users can toggle between themes using the theme button in the navbar.

### Color Scheme
- Primary: Blue (#0ea5e9)
- Secondary: Cyan (#06b6d4)
- Background (Light): White
- Background (Dark): Gray-900 (#111827)

## 📧 Contact Form Integration

To enable the contact form to send emails, integrate EmailJS:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Update the contact form configuration in `src/sections/ContactSection.jsx`
3. Replace the form submission logic with EmailJS API calls

## 🚀 Deployment

### Deploy to Netlify
1. Build the project: `npm run build`
2. Connect your GitHub repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to GitHub Pages
1. Add `homepage` to package.json
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to package.json
4. Run: `npm run deploy`

## 📱 Performance Optimization

- Lazy loading of images
- Code splitting with React
- Optimized animations with Framer Motion
- SEO-friendly structure

## 🔐 Security

- No sensitive information in the code
- Form validation on both client and server side
- XSS protection through React's built-in escaping
- CSRF tokens for form submissions

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Design inspiration from modern portfolio websites
- Icons from React Icons
- Animations powered by Framer Motion
- Styling with Tailwind CSS

## 📞 Support

For questions or issues, please contact:
- Email: your.email@example.com
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

---

Made with ❤️ by [Your Name]
