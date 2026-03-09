# 🚀 Portfolio Website - Quick Reference

## Installation & Running

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## File Locations - What to Edit

| Task | File |
|------|------|
| **Change your name & title** | `src/sections/HeroSection.jsx` |
| **Update about section** | `src/sections/AboutSection.jsx` |
| **Add/edit skills** | `src/sections/SkillsSection.jsx` |
| **Add/edit projects** | `src/sections/ProjectsSection.jsx` |
| **Add work experience** | `src/sections/ExperienceSection.jsx` |
| **Update contact info** | `src/sections/ContactSection.jsx` |
| **Change navbar & social links** | `src/components/Navbar.jsx` |
| **Customize colors** | `tailwind.config.js` |
| **Global styles** | `src/index.css` |

## Common Customizations

### 1️⃣ Update Your Name (Hero Section)

**File:** `src/sections/HeroSection.jsx`

Find and replace:
```jsx
<h1>Hi, I'm <span className="gradient-text">Your Name</span></h1>
```

### 2️⃣ Update Your Title

**File:** `src/sections/HeroSection.jsx`

Find and replace:
```jsx
<p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
  A passionate full-stack developer building beautiful and functional web experiences
</p>
```

### 3️⃣ Add Your Photo

**File:** `src/sections/AboutSection.jsx`

Replace the gradient box with:
```jsx
<img 
  src="/images/profile.jpg" 
  alt="Profile"
  className="w-full h-96 object-cover rounded-2xl"
/>
```

### 4️⃣ Add a Project

**File:** `src/sections/ProjectsSection.jsx`

Add to the `projects` array:
```jsx
{
  id: 7,
  title: "Your Project Name",
  description: "Your project description",
  technologies: ["React", "Node.js", "MongoDB"],
  image: "https://your-image-url.jpg",
  github: "https://github.com/your-project",
  live: "https://your-live-demo.com",
}
```

### 5️⃣ Update Social Links

**File:** `src/components/Navbar.jsx`

Replace URLs:
```jsx
href="https://github.com/yourusername"
href="https://linkedin.com/in/yourusername"
href="mailto:your@email.com"
```

### 6️⃣ Change Theme Colors

**File:** `tailwind.config.js`

```js
colors: {
  primary: {
    500: "#your-color", // Primary blue
    600: "#your-color",
  }
}
```

### 7️⃣ Add Your Email to Contact Form

**File:** `src/sections/ContactSection.jsx`

Replace:
```jsx
href="mailto:your.email@example.com"
```

## Component Overview

### 🎨 Sections (Business Logic)
- `HeroSection.jsx` - Greeting and CTA buttons
- `AboutSection.jsx` - Professional summary
- `SkillsSection.jsx` - Technical skills with progress bars
- `ProjectsSection.jsx` - Portfolio of projects
- `ExperienceSection.jsx` - Timeline of education and work
- `ContactSection.jsx` - Contact form and social links

### 🧩 Components (Reusable)
- `Navbar.jsx` - Navigation with theme toggle
- `Footer.jsx` - Footer with links and copyright

### 🎯 Hooks (Custom)
- `useTheme.js` - Dark/Light mode toggle logic

## Styling System

### Tailwind CSS Classes

```jsx
// Colors
className="text-blue-500"           // Blue text
className="bg-gray-900"             // Dark background
className="dark:text-white"         // Dark mode override

// Responsive
className="md:grid-cols-2"          // 2 columns on medium screens
className="hidden md:flex"          // Hidden on mobile, visible on medium+

// Animations
className="hover:scale-110"         // Scale on hover
className="transition-all"          // Smooth transitions

// Buttons
className="btn-primary"             // Blue gradient button
className="btn-secondary"           // Border button
```

## Animation System (Framer Motion)

### Basic Animation
```jsx
<motion.div
  initial={{ opacity: 0 }}           // Start state
  animate={{ opacity: 1 }}           // End state
  transition={{ duration: 0.6 }}     // Duration
>
  Content
</motion.div>
```

### Scroll Animation
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

## Form Validation (React Hook Form)

```jsx
// Register field
<input {...register("name", { required: "Name is required" })} />

// Show error
{errors.name && <p>{errors.name.message}</p>}
```

## Dark Mode

Automatically handled by `useTheme` hook. Elements with `dark:` prefix show in dark mode:
```jsx
<div className="bg-white dark:bg-gray-900">
  Light mode: white, Dark mode: gray-900
</div>
```

## Deployment Checklist

- [ ] Update all personal information
- [ ] Add your projects with images
- [ ] Update social media links
- [ ] Add your profile photo
- [ ] Update contact information
- [ ] Test on mobile/tablet/desktop
- [ ] Test dark/light mode
- [ ] Check all links work
- [ ] Build for production: `npm run build`
- [ ] Deploy `dist/` folder

## Useful Commands

```bash
# Format code
npm run lint

# Full rebuild
rm -rf node_modules && npm install

# Check for errors
npm run build

# Run development server
npm run dev

# Build optimized version
npm run build
```

## Helpful Keyboard Shortcuts (Dev Tools)

| Task | Windows | Mac |
|------|---------|-----|
| Open DevTools | F12 | Cmd + Opt + I |
| Inspect Element | Ctrl + Shift + C | Cmd + Shift + C |
| Console | F12 → Console | Cmd + Opt + J |
| Toggle Device Mode | F12 → Ctrl + Shift + M | Cmd + Shift + M |

## Performance Tips

✅ Keep component files under 500 lines
✅ Use lazy loading for images
✅ Remove unused CSS classes
✅ Minimize animation complexity
✅ Compress images before adding
✅ Test on slower connections

## Resources

- 📚 [Tailwind Docs](https://tailwindcss.com)
- 🎬 [Framer Motion](https://www.framer.com/motion/)
- ⚛️ [React](https://react.dev)
- 🔧 [Vite](https://vitejs.dev)

## Quick Debug Tips

| Issue | Solution |
|-------|----------|
| Styles not applying | Clear browser cache (Ctrl+Shift+Delete) |
| Dark mode not working | Check localStorage in DevTools → Application |
| Images not showing | Verify image paths and URLs |
| Form not working | Check console for JavaScript errors |
| Animation stuttering | Reduce animation complexity or device test |

---

**Need more help?** Check `README.md`, `SETUP.md`, or `CUSTOMIZATION.md`!
