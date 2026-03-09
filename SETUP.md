# Portfolio Website - Installation and Setup Guide

## 📋 Prerequisites

Before you begin, make sure you have the following installed on your system:

- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for version control) - [Download](https://git-scm.com/)

### Verify Installation

Open your terminal and run:
```bash
node --version
npm --version
```

## 🚀 Installation Steps

### 1. Navigate to Project Directory

```bash
cd portfolio-website
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

This will install all required packages:
- React
- React DOM
- Framer Motion (animations)
- React Icons (icon library)
- React Scroll (smooth scrolling)
- React Hook Form (form validation)
- Tailwind CSS (styling)
- Vite (build tool)

### 3. Start Development Server

```bash
npm run dev
```

or with yarn:
```bash
yarn dev
```

The application will open in your browser at `http://localhost:5173`

### 4. Make Changes

- Edit files in the `src/` directory
- Changes will automatically reload in the browser (Hot Module Replacement)
- Check the terminal for any errors

### 5. Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

Preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/           # Reusable components
│   │   ├── Navbar.jsx       # Navigation bar with dark mode toggle
│   │   └── Footer.jsx       # Footer component
│   ├── sections/            # Page sections
│   │   ├── HeroSection.jsx      # Hero/welcome section
│   │   ├── AboutSection.jsx     # About me section
│   │   ├── SkillsSection.jsx    # Skills showcase
│   │   ├── ProjectsSection.jsx  # Projects portfolio
│   │   ├── ExperienceSection.jsx # Work experience timeline
│   │   └── ContactSection.jsx   # Contact form
│   ├── hooks/               # Custom React hooks
│   │   └── useTheme.js      # Dark mode theme hook
│   ├── App.jsx              # Main application component
│   ├── index.js             # React DOM render
│   └── index.css            # Global styles
├── public/
│   └── index.html           # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.js           # Vite build configuration
├── postcss.config.js        # PostCSS configuration
├── README.md                # Project README
├── CUSTOMIZATION.md         # Customization guide
├── SETUP.md                 # This file
└── .gitignore               # Git ignore rules
```

## ⚙️ Environment Configuration

### Create Environment File

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your information:
```env
VITE_GITHUB_URL=https://github.com/yourusername
VITE_LINKEDIN_URL=https://linkedin.com/in/yourusername
VITE_EMAIL=your.email@example.com
```

## 🛠️ Common Tasks

### Update Personal Information

See `CUSTOMIZATION.md` for detailed instructions on:
- Updating your name and bio
- Adding your projects
- Updating skills
- Customizing colors
- Setting up contact form

### Adding New Content

1. **Add a new project**: Edit `src/sections/ProjectsSection.jsx`
2. **Add a new skill**: Edit `src/sections/SkillsSection.jsx`
3. **Add experience**: Edit `src/sections/ExperienceSection.jsx`

### Install Additional Packages

```bash
npm install package-name
# or
yarn add package-name
```

### Run Linter

Check code quality:
```bash
npm run lint
```

## 🌐 Deploy to Web

### Option 1: Deploy to Netlify (Recommended)

1. Create account at [Netlify](https://netlify.com)
2. Connect your GitHub repository
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### Option 2: Deploy to Vercel

1. Create account at [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Follow the prompts (Vercel auto-detects Vite)
4. Deploy!

### Option 3: Deploy to GitHub Pages

1. Update `vite.config.js`:
```js
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

2. Add to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

### Option 4: Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist/` folder contents to your web host
3. Configure your domain to point to your host

## 📊 Performance Optimization

The portfolio is already optimized with:
- ✅ Lazy loading
- ✅ Code splitting
- ✅ Minified CSS and JavaScript
- ✅ Responsive images
- ✅ Smooth animations with Framer Motion

## 🔍 Troubleshooting

### Port Already in Use

If port 5173 is already in use:
```bash
npm run dev -- --port 3000
```

### Module Not Found Error

Try reinstalling dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Dark Mode Not Working

- Clear browser cache
- Check localStorage in DevTools
- Verify tailwind.config.js has `darkMode: "class"`

### Slow Build Time

- Check your internet connection
- Update npm: `npm install -g npm@latest`
- Try `npm ci` instead of `npm install`

### Images Not Loading

- Use absolute URLs for external images
- Place images in `public/` folder for relative paths
- Check the browser console for errors

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org)

## 🆘 Getting Help

1. Check `CUSTOMIZATION.md` for common customization issues
2. Review error messages in the browser console
3. Check the terminal for build errors
4. Visit the official documentation for the libraries used
5. Create an issue in your GitHub repository

## ✅ Next Steps

1. ✅ Install dependencies
2. ✅ Start development server
3. ✅ Customize with your information
4. ✅ Add your projects
5. ✅ Test on different devices
6. ✅ Deploy to production

## 🎉 You're All Set!

Your modern portfolio website is ready to use. Keep your content updated and showcase your best work to the world!

---

**Happy Coding! 🚀**
