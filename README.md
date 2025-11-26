# Hemanth Manikala - Portfolio Website

A modern, responsive personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

-   **Dynamic Sections**: Home, About, Skills, Projects, Experience, Contact.
-   **Interactive UI**: Smooth scrolling, glassmorphism effects, and animations.
-   **Project Showcase**: Detailed modal views for projects with tech stack and links.
-   **Contact Form**: Integrated contact form with API route.
-   **Responsive Design**: Fully optimized for mobile, tablet, and desktop.
-   **Dark Mode Support**: System-aware dark mode.

## Tech Stack

-   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Deployment**: Docker + Google Cloud Run

## Getting Started

### Prerequisites

-   Node.js 18+
-   npm

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd hemanth-portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run development server**:
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser.

## Deployment

This project is configured for deployment on Google Cloud Platform using Cloud Run.

See [deployment-guide.md](./deployment-guide.md) for detailed instructions.

## Project Structure

-   `src/app`: App Router pages and API routes.
-   `src/components`: Reusable UI components (Hero, Projects, etc.).
-   `src/lib`: Utility functions.
-   `public`: Static assets.

## License

MIT
