# SightGuardian AI Landing Page

A premium, high-performance landing page for SightGuardian AI - an innovative app that protects children's vision during screen time with advanced visual protection technology.

## 🎨 Design Status

**Current Version**: Phase 2 Complete - Premium Professional Design

- ✅ **Phase 1**: Visual Foundation & Professional Polish (Completed)
- ✅ **Phase 2**: Advanced Typography & Interactive Elements (Completed)
- 🚧 **Phase 3**: Advanced Animations & Additional Sections (Planned)

## 🚀 Features

### Core Functionality

- **High Performance**: <500ms LCP, >95 Google Lighthouse score
- **Accessibility**: WCAG 2.1 Level AA compliance
- **Mobile-First**: Responsive design starting from mobile breakpoints
- **Modern Stack**: Next.js 15+, TypeScript, Tailwind CSS
- **Email Integration**: Resend for waitlist management
- **Form Validation**: React Hook Form + Zod
- **Code Quality**: ESLint + Prettier with Husky pre-commit hooks

### Visual Design (Phase 1 & 2)

- **Premium Background**: Sophisticated gradient with glassmorphism effects
- **Advanced Typography**: Gradient text effects, optimized hierarchy
- **Interactive Elements**: Hover effects, micro-interactions, smooth transitions
- **Professional Polish**: Enhanced shadows, borders, and visual depth
- **Trust Indicators**: Animated icons with advanced hover states
- **Responsive Excellence**: Optimized for all device sizes

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ with App Router and TypeScript
- **Styling**: Tailwind CSS with custom brand colors and glassmorphism effects
- **Forms**: React Hook Form + Zod validation with enhanced UI
- **UI Components**: Custom components with `clsx` and `class-variance-authority`
- **Visual Effects**: CSS gradients, backdrop-blur, advanced shadows
- **Email Service**: Resend API integration
- **Development**: ESLint, Prettier, TypeScript strict mode
- **Hosting**: Vercel (recommended)

## 🏃‍♂️ Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd sightguardian-landing
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Add your Resend API key to `.env.local`:

   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm type-check` - Run TypeScript type checking
- `pnpm test` - Run tests

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to GitHub**: Push your code to a GitHub repository
2. **Import to Vercel**: Go to [vercel.com](https://vercel.com) and import your repository
3. **Set Environment Variables**: Add `RESEND_API_KEY` in Vercel dashboard
4. **Deploy**: Vercel will automatically deploy on every push to main

### Environment Variables

Set the following environment variable in your deployment platform:

- `RESEND_API_KEY`: Your Resend API key for email functionality

## 📁 Project Structure

```
/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── _components/   # Page-specific components
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # Reusable components
│   │   └── ui/           # UI components (Button, Input)
│   ├── lib/              # Utilities and server actions
│   │   ├── actions.ts    # Server actions
│   │   ├── types.ts      # Type definitions
│   │   └── utils.ts      # Utility functions
│   └── styles/           # Global styles
├── __tests__/            # Test files
├── .husky/              # Git hooks
└── ...config files
```

## 🎨 Design System & Visual Improvements

### Phase 1 Improvements (Completed)

- **Background Enhancement**: Replaced light gradient with sophisticated multi-layer design
- **Visual Hierarchy**: Added glassmorphism containers and improved content separation
- **Trust Indicators**: Enhanced with shadows, hover effects, and better contrast
- **Footer Polish**: Improved contrast and professional styling

### Phase 2 Improvements (Completed)

- **Advanced Typography**:
  - Gradient text effects on key words
  - Optimized font weights and sizes
  - Improved visual hierarchy
- **Interactive Elements**:
  - Enhanced EmailForm with glassmorphism design
  - Advanced hover effects with scale and rotation
  - Smooth transitions and micro-interactions
- **Professional Polish**:
  - Deeper shadows and better depth perception
  - Optimized spacing and visual rhythm
  - Premium color contrast implementation

### Brand Colors

- **Primary Blue**: `#2563EB` (brand-blue)
- **Accent Green**: `#34D399` (brand-green)
- **Text Gray**: `#6B7280` (brand-gray)

### Content Specifications

#### Spanish Copy

- **Headline**: "De la impotencia a la tranquilidad. El escudo digital para la vista de tus hijos."
- **Subheadline**: "Nuestra app transforma la pantalla en un entorno visual dinámico, como si estuvieran jugando al aire libre."
- **CTA Button**: "Activa la protección visual"
- **Form Placeholder**: "Tu mejor correo electrónico"

## 🔧 Development Guidelines

- **Mobile-First**: Start with mobile breakpoints, then scale up
- **Accessibility**: Test with keyboard navigation and screen readers
- **Performance**: Monitor Core Web Vitals
- **Code Quality**: Pre-commit hooks enforce linting and formatting

## 📊 Performance Targets

- **LCP**: <500ms
- **Google Lighthouse**: >95 score
- **Accessibility**: WCAG 2.1 Level AA compliance
- **Mobile Responsive**: All breakpoints tested

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

© 2025 SightGuardian AI. All rights reserved.
