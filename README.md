# Joshua Ndegwa's Portfolio

A modern, responsive portfolio website built with React and Framer Motion, showcasing my web development projects and skills.

![Portfolio Preview](preview.png)

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Modern UI**: Clean and professional interface using Tailwind CSS
- **Performance Optimized**: Lazy loading and code splitting for fast load times
- **Interactive Projects Showcase**: Image carousel with automatic slideshow
- **Smooth Scrolling**: Enhanced navigation experience
- **Contact Integration**: Direct links to email, phone, and social profiles

## 🛠️ Built With

- React.js
- Tailwind CSS
- Framer Motion
- React Icons
- React Scroll
- Vite

## 📁 Project Structure

```
/src
  /components
    - Navbar.jsx    # Navigation bar component
    - Hero.jsx      # Hero section
    - About.jsx     # About section
    - Skills.jsx    # Skills showcase
    - Projects.jsx  # Projects portfolio
    - Contact.jsx   # Contact information
  App.jsx           # Main application component
  main.jsx         # Application entry point
  index.css        # Global styles
```

## 🖼️ Adding Project Screenshots

1. Create a folder structure in the `public` directory:
```
/public
  /projects
    /project1
      1.jpg
      2.jpg
      3.jpg
      4.jpg
      5.jpg
    /project2
      1.jpg
      ...
```

2. Name your images numerically (1.jpg, 2.jpg, etc.)
3. Place them in the corresponding project folder
4. The carousel will automatically display your images

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📱 Adding Your Information

1. Update contact information in `Contact.jsx`
2. Modify project details in `Projects.jsx`
3. Edit skills in `Skills.jsx`
4. Update about section in `About.jsx`
5. Customize hero section in `Hero.jsx`

## 🎨 Customizing Colors

The color scheme can be modified in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#0D9488',
        light: '#14B8A6',
        dark: '#0F766E'
      }
    }
  }
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contact

Joshua Ndegwa - [ndegwajosh7@gmail.com](mailto:ndegwajosh7@gmail.com)

---

Made with ❤️ by Joshua Ndegwa