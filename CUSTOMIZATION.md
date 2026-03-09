# Portfolio Website - Customization Guide

## Quick Start

### 1. Update Personal Information

#### Hero Section (src/sections/HeroSection.jsx)
```jsx
// Replace "Your Name" with your actual name
<h1>Hi, I'm <span className="gradient-text">Your Name</span></h1>

// Update the title and description
<p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
  A passionate full-stack developer building beautiful and functional web experiences
</p>
```

#### About Section (src/sections/AboutSection.jsx)
- Update the professional summary
- Add your achievements
- Customize the features grid

#### Skills Section (src/sections/SkillsSection.jsx)
- Remove/add skills based on your expertise
- Adjust proficiency percentages
- Add or remove skill categories

#### Projects Section (src/sections/ProjectsSection.jsx)
```jsx
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Your project description",
    technologies: ["React", "Node.js", ...],
    image: "your-image-url",
    github: "your-github-link",
    live: "your-live-demo-link",
  },
  // Add more projects...
];
```

#### Experience Section (src/sections/ExperienceSection.jsx)
- Update your work experience entries
- Add your educational background
- Update dates and descriptions

#### Contact Section (src/sections/ContactSection.jsx)
- Update email address
- Update phone number
- Update location
- Add your actual social media links

### 2. Update Social Links

Edit Navbar.jsx and ContactSection.jsx:
```jsx
// Replace with your actual URLs
<a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
  <FaGithub />
</a>
```

### 3. Customize Color Scheme

Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    500: "#0ea5e9", // 
    600: "#0284c7",
    // ... customize as needed
  }
}
```

### 4. Add Your Profile Image

In AboutSection.jsx, replace the placeholder gradient with your image:
```jsx
<img 
  src="/images/your-profile.jpg" 
  alt="Profile" 
  className="w-full h-96 object-cover rounded-2xl"
/>
```

### 5. Project Images

Replace the placeholder image URLs in ProjectsSection.jsx:
```jsx
image: "https://images.unsplash.com/..." // Replace with your project images
```

### 6. Setup Contact Form

#### Option A: Using EmailJS

1. Sign up at https://www.emailjs.com/
2. Create an email service and template
3. Update .env.local with your credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
4. Update ContactSection.jsx onSubmit function:
   ```jsx
   import emailjs from 'emailjs-com';

   const onSubmit = async (data) => {
     emailjs.send(
       process.env.VITE_EMAILJS_SERVICE_ID,
       process.env.VITE_EMAILJS_TEMPLATE_ID,
       data,
       process.env.VITE_EMAILJS_PUBLIC_KEY
     );
   };
   ```

#### Option B: Using a Backend API

Update the onSubmit function to call your backend:
```jsx
const onSubmit = async (data) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  // Handle response
};
```

### 7. Add Your CV/Resume

Add a resume file to public folder and update the download link:
```jsx
<a href="/resume.pdf" download className="btn-primary">
  Download CV
</a>
```

### 8. SEO Optimization

Update the following in public/index.html:
```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="your, keywords">
<meta property="og:title" content="Your Name - Developer">
<meta property="og:description" content="Your portfolio description">
```

## Advanced Customization

### Change Animation Speed

Edit Tailwind config:
```js
animation: {
  fadeIn: "fadeIn 0.5s ease-in", // Adjust duration
  slideUp: "slideUp 0.6s ease-out",
}
```

### Modify Component Styling

Each component uses Tailwind classes. Example:
```jsx
// Change button style
className="btn-primary" // Edit in index.css
```

### Add New Sections

1. Create a new file in src/sections/
2. Export a component with motion animations
3. Import and use in App.jsx

### Add Blog Section

Create a Blog component similar to Projects section and add:
```jsx
<BlogSection />
```

## Performance Tips

1. **Lazy Load Images**: Use Intersection Observer
2. **Code Splitting**: React automatically does this
3. **Image Optimization**: Use WebP format
4. **Minimize Dependencies**: Remove unused packages
5. **Enable Compression**: Let your hosting provider handle this

## SEO Best Practices

✅ Semantic HTML structure
✅ Meta descriptions and keywords
✅ Open Graph tags for social sharing
✅ Mobile-friendly design
✅ Fast loading times
✅ Structured data (Schema.org)

## Accessibility

- [ ] All images have alt text
- [ ] Color contrast is sufficient
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Form labels are associated

## Testing

Run ESLint:
```bash
npm run lint
```

## Troubleshooting

### Dark mode not working
- Check localStorage for "theme" key
- Verify tailwind.config.js darkMode setting

### Animations not smooth
- Check Framer Motion version
- Verify CSS animation properties
- Check device performance

### Form not sending
- Verify EmailJS credentials
- Check CORS settings if using backend
- Test API endpoint independently

### Images not loading
- Verify image URLs are correct
- Check image file sizes
- Ensure CORS is configured

## Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Web Accessibility](https://www.w3.org/WAI/test-evaluate/)

## Support

For issues or questions, refer to the documentation in README.md or create an issue in your repository.
