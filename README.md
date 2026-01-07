# Portfolio Website - Raj Raushan Kumar

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my projects, skills, experience, and certifications in a clean and professional design.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging scroll animations powered by Motion (Framer Motion)
- **Modern UI**: Clean and professional design with a cohesive color scheme
- **Interactive Components**: Hover effects, transitions, and interactive elements
- **Sections Include**:
  - Hero section with profile photo and introduction
  - About Me section with professional background
  - Experience & Certifications section
  - Projects showcase with detailed descriptions
  - Skills & Expertise overview
  - Contact form with social media links
  - Professional footer

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Motion** (Framer Motion) - Animation library for React
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool and development server

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rajraushankumar/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Customization Guide

### Update Personal Information

1. **Profile Photo**: Replace the image import in `/src/app/components/Hero.tsx`
2. **Personal Details**: Update name, description, and contact info in relevant components
3. **Social Links**: Update GitHub, LinkedIn, and email links in Hero and Contact components

### Update Projects

Edit the `projects` array in `/src/app/components/Projects.tsx`:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    image: "project-image-url",
    tags: ["Tech1", "Tech2"],
    github: "github-url",
    demo: "demo-url",
  },
  // Add more projects...
];
```

### Update Skills

Modify the `skills` array in `/src/app/components/Skills.tsx`:

```typescript
const skills = [
  {
    icon: Code,
    title: "Category Name",
    items: ["Skill1", "Skill2", "Skill3"],
  },
  // Add more skill categories...
];
```

### Update Experience

Edit the `experiences` array in `/src/app/components/Experience.tsx`:

```typescript
const experiences = [
  {
    type: "work",
    title: "Job Title",
    organization: "Company Name",
    period: "Start Date – End Date",
    points: ["Achievement 1", "Achievement 2"],
    icon: Briefcase,
  },
  // Add more experiences...
];
```

### Update Certifications

Add your certificate links in `/src/app/components/Experience.tsx`:

```typescript
const certifications = [
  {
    title: "Certification Name",
    organization: "Issuing Organization",
    icon: Award,
    link: "https://your-certificate-link.com",
  },
  // Add more certifications...
];
```

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ui/          # Reusable UI components
│   │   │   ├── Hero.tsx     # Hero section
│   │   │   ├── About.tsx    # About section
│   │   │   ├── Experience.tsx # Experience & certifications
│   │   │   ├── Projects.tsx # Projects showcase
│   │   │   ├── Skills.tsx   # Skills section
│   │   │   ├── Contact.tsx  # Contact form
│   │   │   └── Footer.tsx   # Footer
│   │   └── App.tsx          # Main app component
│   ├── styles/
│   │   ├── theme.css        # Theme and typography
│   │   └── fonts.css        # Font imports
│   └── main.tsx             # Application entry point
├── public/                  # Static assets
├── package.json
└── README.md
```

## Deployment

This portfolio can be deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the dist folder to gh-pages branch
```

## Contact

**Raj Raushan Kumar**
- Email: rajraushankumar749@gmail.com
- Phone: +91 7667364120
- LinkedIn: [linkedin.com/in/rajraushankumar](https://www.linkedin.com/in/raj-raushan-kumar-raj)
- GitHub: [github.com/rajraushankumar](https://github.com/raj9097)
- LeetCode: [leetcode.com/rajraushankumar](https://leetcode.com/u/RAj7870/)

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)
- Built with ❤️ using React and Tailwind CSS
