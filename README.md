# TaskFlow - Complete Task Management Website

A modern, fully-featured task management website with 5 pages, built with vanilla HTML, CSS, and JavaScript.

## 🌟 Pages Included

1. **Home Page** (`index.html`) - Landing page with hero section and features
2. **About Page** (`about.html`) - Description of the application and its mission
3. **App Page** (`app.html`) - The actual To-Do list application
4. **Support Page** (`support.html`) - FAQ and quick start guide
5. **Contact Page** (`contact.html`) - Contact form and information

## ✨ Features

### Website Features
- 🎨 Dark cyberpunk theme with purple/pink gradients
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🧭 Sticky navigation bar with smooth transitions
- ⚡ Smooth animations and hover effects
- 🎯 Professional UI/UX design

### To-Do App Features
- ✅ Add, complete, and delete tasks
- 🔍 Filter tasks (All, Pending, Completed)
- 📊 Live statistics (Total, Completed, Pending)
- 💾 Auto-save to localStorage
- 🎨 Beautiful dark theme
- ⌨️ Keyboard support (Enter to add task)

### Support Features
- ❓ Comprehensive FAQ section
- 📖 Quick start guide
- 💬 Interactive accordion-style FAQ

### Contact Features
- 📧 Contact form with validation
- 📞 Contact information cards
- 🔗 Social media links

## 📁 File Structure

```
taskflow-website/
├── index.html          # Home/Landing page
├── about.html          # About/Description page
├── app.html            # To-Do application
├── support.html        # Support/FAQ page
├── contact.html        # Contact page
├── styles.css          # Complete stylesheet for all pages
├── script.js           # General JavaScript (navigation, FAQ, forms)
├── app.js              # To-Do app JavaScript
└── README.md           # This file
```

## 🚀 Setup Instructions

1. Extract all files to a folder
2. Open `index.html` in any modern web browser
3. Navigate through the website using the navigation bar

**No server or installation required - just open and use!**

## 💻 Browser Compatibility

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Any modern browser with ES6+ support

## 🎨 Design Theme

**Color Palette:**
- Primary Purple: `#8B5CF6`
- Accent Pink: `#EC4899`
- Accent Blue: `#3B82F6`
- Background: Dark navy with grid pattern
- Text: White with purple secondary

**Design Elements:**
- Gradient buttons and text
- Glassmorphism effects (backdrop blur)
- Purple neon glow effects
- Grid background pattern
- Smooth animations

## 📱 Responsive Breakpoints

- Desktop: 969px and above
- Tablet: 641px - 968px
- Mobile: 640px and below

## 🔧 Technical Details

### Data Persistence
- Uses browser's `localStorage` API
- Tasks persist across browser sessions
- No server or database required

### Code Quality
- Clean, organized code
- Object-oriented JavaScript (TaskManager class)
- Semantic HTML5
- BEM-inspired CSS naming
- Event delegation for performance
- XSS protection with HTML escaping

### Performance
- Minimal dependencies (vanilla JS)
- Optimized animations
- Lazy loading ready
- Fast load times

## 🎯 Usage Guide

### Navigation
- Click any menu item in the navigation bar
- Logo clicks return to home page
- Navigation is sticky (follows scroll)

### Using the To-Do App
1. Navigate to **App** page
2. Type your task in the input field
3. Press Enter or click "Add Task"
4. Click checkbox to mark complete/incomplete
5. Click "Delete" to remove a task
6. Use filter buttons to view specific tasks

### Contact Form
1. Navigate to **Contact** page
2. Fill in all required fields
3. Select a subject from dropdown
4. Write your message
5. Click "Send Message"
6. Confirmation will appear on success

### FAQ Section
1. Navigate to **Support** page
2. Click any question to expand/collapse
3. Only one answer shows at a time for better readability

## 🔐 Privacy & Security

- All data stored locally on your device
- No data sent to any server
- No tracking or analytics
- No cookies used
- 100% client-side application

## 🌐 Deployment

Can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service
- Local network server

Simply upload all files to your hosting service.

## 📝 Customization

### Changing Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #8B5CF6;
    --accent-pink: #EC4899;
    /* ... other colors */
}
```

### Adding More Pages
1. Create new HTML file
2. Copy navigation from existing page
3. Add link to navigation menu
4. Style using existing CSS classes

### Modifying Content
- All text content is in HTML files
- Images can be added to respective sections
- Update footer information in all pages

## 🐛 Known Issues

- Contact form doesn't actually send emails (demo only)
- Mobile menu button styled but needs implementation for small screens
- No backend integration (by design - client-side only)

## 🚀 Future Enhancements (Optional)

- [ ] Edit task functionality
- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Dark/light mode toggle
- [ ] Export/import tasks
- [ ] Search functionality
- [ ] Task priority levels
- [ ] Backend integration option

## Demo live 
   [ https://amitchoudhary-code.github.io/To-do-List_01/]
## 📄 License

This is a demonstration project. Free to use and modify.

## 👨‍💻 Developer Notes

- Built with vanilla JavaScript (no frameworks)
- No build process required
- No dependencies
- Clean, readable code
- Well-commented
- Production-ready

---

**Built for Coding Assignment Submission**

For support or questions, visit the Support page or use the Contact form.
