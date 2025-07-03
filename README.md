# Isaac Hardy - Personal Website

This is a personal portfolio website built with React. It showcases my background, work experience, travel adventures, and more. The site is designed to be clean, modern, and easy to navigate.

## Features
- **Home:** Introduction and welcome message.
- **Work Experience:** Details about my professional background and roles.
- **Travel Experience:** Highlights from my travels around the world.
- **About Me:** Personal interests, faith, and friendships.
- **Resume:** Preview and download my resume as a PDF.
- **Animated Widgets:** Each section uses animated, reusable widgets for a dynamic user experience.
- **Responsive Design:** Looks great on desktop and mobile devices.

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
- `src/components/` - React components (NavBar, Header, InfoWidget, MainContent, ResumePreview)
- `src/data/` - Widget data for each section
- `src/images/` - All images used in the site
- `public/` - Static files (including `resume.pdf`)

## Customization
- Replace `public/Isaac Hardy Resume.pdf` with your own resume to update the Resume section.
- Update images in `src/images/` and data in `src/data/widgetData.js` to personalize content.

## Deployment
To build for production:
```bash
npm run build
```
The optimized build will be in the `build/` folder.

## License
This project is for personal use and demonstration purposes.

---

Built with [Create React App](https://github.com/facebook/create-react-app).
