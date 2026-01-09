# 👨‍💻 Rishikant's Dev Portfolio

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)

A high-performance, responsive personal portfolio website designed to showcase my full-stack development projects and technical skills. This project focuses on clean code architecture, pixel-perfect implementation from design, and optimal performance metrics.

---

## 🔗 Quick Links

| Resource            | Link                                                                                                                          |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------- |
| **🚀 Live Site**    | [rishis-dev-portfolio.vercel.app](https://rishis-dev-portfolio.vercel.app/)                                                   |
| **🎨 Figma Design** | [View Design File](https://www.figma.com/design/qQPH0xbXfygRpQKk0P2HhJ/Personal-Portfolio?node-id=23-19&t=PitPFHvzad4tVYEr-1) |
| **📂 Repository**   | [github.com/rishikantchoudhary/devs-portfolio](https://github.com/rishikantchoudhary/devs-portfolio)                          |

---

## ✨ Key Features

- **Pixel-Perfect Implementation:** Faithful translation of the Figma design into code with precise spacing and typography.
- **Fully Responsive:** Mobile-first architecture ensuring seamless layouts across smartphones, tablets, and desktops using Tailwind CSS.
- **Performance Optimized:** Achieves high Lighthouse scores via Next.js Server Side Rendering (SSR) and image optimization.
- **Device-Aware Interactions:** "Smart Contact" routing that opens native email apps on mobile and web clients on desktop.
- **Type Safety:** 100% TypeScript codebase for robust and maintainable development.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Design:** [Figma](https://www.figma.com/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) / [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**

```bash
git clone [https://github.com/rishikantchoudhary/devs-portfolio.git](https://github.com/rishikantchoudhary/devs-portfolio.git)
cd devs-portfolio
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Run the development server:**

```bash
npm run dev
# or
yarn dev
```

4. **Open your browser:** Navigate to http://localhost:3000 to view the application.

---

## 📂 Project Structure

```bash
├── app/                  # Main application entry and source
│   ├── components/       # Reusable UI components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Header.tsx
│   │   ├── ImageGrid.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── switch.css    # Component-specific styles (Theme toggle)
│   ├── globals.css       # Global Tailwind directives and base styles
│   ├── icon.png          # Application favicon/icon
│   ├── layout.tsx        # Root layout (HTML structure & fonts)
│   └── page.tsx          # Homepage (Main landing page)
├── public/               # Static assets (images, Resume PDF)
├── eslint.config.mjs     # ESLint configuration
├── next.config.ts        # Next.js configuration
├── package.json          # Project dependencies and scripts
├── postcss.config.mjs    # PostCSS configuration for Tailwind
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

---

## 👨‍💻 Author

Built with ❤️ by [Rishkant](https://github.com/rishikantchoudhary)
