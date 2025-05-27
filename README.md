# The poetic press: Digital Poetry Showcase

A modern, interactive web application for showcasing poetry with elegant animations and an immersive reading experience.

![The poetic press Poetry Showcase](https://res.cloudinary.com/dqqyuvg1v/image/upload/v1748107735/sr5za5e1203759aws3_rhzftt.png)

## 🌟 Features

- **Interactive Poetry Reading**: Animated stanza-by-stanza reading experience
- **Curated Gallery**: Browse poems with filtering by category and mood
- **Responsive Design**: Fully optimized for mobile and desktop experiences
- **Elegant Animations**: Smooth transitions and micro-interactions throughout
- **Dark Mode**: Beautiful dark theme with gradient accents

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **React Router** for navigation
- **Framer Motion** for high-quality animations
- **Tailwind CSS** for styling
- **Shadcn UI** components
- **React Query** for data management

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- Bun

### Installation

1. Clone the repository:

   ```bash
   git clone https://your-repository-url/project-tristan.git
   cd project-tristan
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Start the development server:

   ```bash
   bun run dev
   ```

4. Open your browser and visit `http://localhost:8080`

## 📁 Project Structure

```
project-tristan/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── ui/         # Shadcn UI components
│   │   └── ...         # Custom components
│   ├── data/           # Static data for poems
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities and helpers
│   ├── pages/          # Page components
│   └── App.tsx         # Main application component
├── public/             # Static assets
├── index.html          # HTML entry point
├── vite.config.ts      # Vite configuration
└── tailwind.config.ts  # Tailwind CSS configuration
```

## 🔍 Features Breakdown

### Home Page

- Animated hero section with rotating taglines
- Featured poems section with hover effects
- Smooth scrolling navigation

### Gallery

- Interactive poem cards with animations
- Category and mood filters
- Search functionality
- Responsive grid layout

### Poem Detail

- Stanza-by-stanza animated reading experience
- Auto-play reading mode
- Poem metadata display
- Previous/next poem navigation

### About

- Information about the poet and writing philosophy
- Contact section

## 🖌️ Styling

The project uses Tailwind CSS with custom configuration. The design features:

- Dark theme with purple gradients
- Custom fonts (Playfair Display for headings, Inter for body text)
- Glassmorphism effects with backdrop blur
- Responsive design for all screen sizes

## 📦 Build for Production

```bash
bun run build
```

The build artifacts will be stored in the `dist/` directory.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Shadcn UI](https://ui.shadcn.com/) for the beautiful UI components
- [Framer Motion](https://www.framer.com/motion/) for the animation library
- [Lucide Icons](https://lucide.dev/) for the icon set
