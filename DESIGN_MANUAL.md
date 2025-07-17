# SightGuardian AI - Design Manual

## 🎨 Design System Overview

This manual documents the complete design system for the SightGuardian AI landing page, including all visual improvements implemented through Phase 1 and Phase 2 development.

### Design Philosophy

- **Premium Health-Tech Aesthetic**: Professional, trustworthy, and modern
- **Glassmorphism**: Subtle transparency and blur effects for depth
- **Micro-interactions**: Smooth transitions and hover effects
- **Accessibility First**: WCAG 2.1 Level AA compliance
- **Mobile-First**: Responsive design starting from mobile breakpoints

## 🎯 Brand Identity

### Brand Colors

#### Primary Palette

```css
/* Brand Blue - Primary Action Color */
--brand-blue: #2563eb;
--brand-blue-light: #60a5fa;
--brand-blue-dark: #2563eb;

/* Brand Green - Accent & Success Color */
--brand-green: #34d399;
--brand-green-light: #34d399;

/* Brand Gray - Text & Neutral Color */
--brand-gray: #6b7280;
--brand-gray-dark: #1f2937;
```

#### Usage Guidelines

- **Brand Blue**: Primary CTA buttons, key text highlights, trust indicator icons
- **Brand Green**: Success states, highlighted text in subheadings, secondary icons
- **Brand Gray**: Body text, secondary information, subtle elements

### Typography System

#### Font Hierarchy

```css
/* Headlines - Maximum Impact */
.headline-primary {
  font-size: clamp(2rem, 5vw, 4.5rem); /* text-4xl to text-7xl */
  font-weight: 900; /* font-black */
  line-height: 1.1; /* leading-tight */
  letter-spacing: -0.025em; /* tracking-tight */
}

/* Subheadings - Supporting Information */
.headline-secondary {
  font-size: clamp(1.25rem, 3vw, 1.875rem); /* text-xl to text-3xl */
  font-weight: 500; /* font-medium */
  line-height: 1.4; /* leading-relaxed */
}

/* Trust Indicators - Section Headers */
.section-header {
  font-size: 1.25rem; /* text-xl */
  font-weight: 900; /* font-black */
  line-height: 1.2;
}

/* Body Text - Readable Content */
.body-text {
  font-size: 1rem; /* text-base */
  font-weight: 500; /* font-medium */
  line-height: 1.6; /* leading-relaxed */
}
```

#### Gradient Text Effects

```css
/* Primary Gradient - Brand Blue */
.text-gradient-blue {
  background: linear-gradient(to right, #2563eb, #2563eb);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

/* Secondary Gradient - Brand Green */
.text-gradient-green {
  background: linear-gradient(to right, #34d399, #10b981);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
```

## 🏗️ Layout System

### Background Architecture

#### Multi-Layer Background System

```css
/* Base Gradient */
background: linear-gradient(
  to bottom right,
  rgb(248 250 252),
  /* slate-50 */ rgb(239 246 255),
  /* blue-50 */ rgb(236 253 245) /* emerald-50 */
);

/* Overlay Pattern */
background-image: radial-gradient(
  circle at 50% 50%,
  rgba(59, 130, 246, 0.05),
  transparent 50%
);

/* Floating Elements */
.floating-element-1 {
  position: absolute;
  top: 0;
  right: 0;
  width: 24rem;
  height: 24rem;
  background: linear-gradient(
    to bottom left,
    rgba(37, 99, 235, 0.1),
    transparent
  );
  border-radius: 50%;
  filter: blur(3rem);
}
```

### Container System

#### Glassmorphism Containers

```css
/* Hero Container - Primary Content */
.hero-container {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border-radius: 1.5rem;
  padding: 3rem 4rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Trust Indicators Container */
.trust-container {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  border-radius: 1.5rem;
  padding: 2.5rem 3rem;
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
}

/* Email Form Container */
.form-container {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
  border-radius: 1rem;
  padding: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

## 🎭 Interactive Elements

### Trust Indicators

#### Icon Design System

```css
/* Icon Container */
.trust-icon {
  width: 5rem; /* w-20 */
  height: 5rem; /* h-20 */
  background: linear-gradient(
    to bottom right,
    rgba(37, 99, 235, 0.3),
    rgba(37, 99, 235, 0.1)
  );
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.25);
}

/* Hover Effects */
.trust-icon:hover {
  transform: scale(1.1) rotate(3deg);
  box-shadow: 0 25px 50px -12px rgba(37, 99, 235, 0.4);
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Icon SVG */
.trust-icon svg {
  width: 2.5rem; /* w-10 */
  height: 2.5rem; /* h-10 */
  color: #2563eb; /* brand-blue */
}
```

### Button System

#### Primary CTA Button

```css
.cta-button {
  background: linear-gradient(to right, #2563eb, #1d4ed8);
  color: white;
  font-weight: 700;
  font-size: 1.125rem;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-button:hover {
  background: linear-gradient(to right, #1d4ed8, #1e40af);
  transform: scale(1.05);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
}
```

### Form Elements

#### Enhanced Input Design

```css
.form-input {
  background: transparent;
  border: none;
  font-size: 1.125rem;
  padding: 0.75rem 1rem;
  color: #1f2937;
  outline: none;
}

.form-input:focus {
  ring: 2px solid rgba(37, 99, 235, 0.5);
  ring-offset: 2px;
}

.form-input::placeholder {
  color: #6b7280;
}
```

## 📱 Responsive Design

### Breakpoint System

```css
/* Mobile First Approach */
.responsive-text {
  font-size: 2rem; /* Base: text-4xl */
}

@media (min-width: 640px) {
  .responsive-text {
    font-size: 3rem; /* sm: text-5xl */
  }
}

@media (min-width: 1024px) {
  .responsive-text {
    font-size: 4.5rem; /* lg: text-7xl */
  }
}
```

### Container Responsive Behavior

```css
/* Hero Section Padding */
.hero-section {
  padding: 4rem 1rem; /* py-16 px-4 */
}

@media (min-width: 640px) {
  .hero-section {
    padding: 6rem 1rem; /* sm:py-24 */
  }
}

@media (min-width: 1024px) {
  .hero-section {
    padding: 8rem 1rem; /* lg:py-32 */
  }
}
```

## 🎬 Animation System

### Transition Standards

```css
/* Standard Transition */
.standard-transition {
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Smooth Transition */
.smooth-transition {
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Loading Animation */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loading-spinner {
  animation: spin 1s linear infinite;
}
```

### Hover Effect Guidelines

- **Scale**: Use 1.05 for buttons, 1.1 for icons
- **Rotation**: Subtle 3deg rotation for playful elements
- **Shadow**: Increase shadow depth on hover
- **Duration**: 300ms for buttons, 500ms for complex elements

## 🔧 Implementation Guidelines

### CSS Class Naming Convention

- Use Tailwind CSS utility classes as primary approach
- Custom CSS only for complex animations or unique effects
- Maintain consistent spacing using Tailwind's spacing scale
- Use semantic color names (brand-blue, brand-green) over hex values

### Performance Considerations

- Optimize backdrop-filter usage for better performance
- Use transform properties for animations (GPU accelerated)
- Minimize complex box-shadows on mobile devices
- Test all animations on lower-end devices

### Accessibility Standards

- Maintain 4.5:1 contrast ratio for normal text
- Maintain 3:1 contrast ratio for large text
- Provide focus indicators for all interactive elements
- Ensure all animations respect `prefers-reduced-motion`

## 📊 Quality Metrics

### Visual Quality Checklist

- [ ] All text meets contrast requirements
- [ ] Hover states are consistent across components
- [ ] Responsive design works on all breakpoints
- [ ] Loading states provide clear feedback
- [ ] Animations are smooth and purposeful
- [ ] Brand colors are used consistently
- [ ] Typography hierarchy is clear and logical

### Performance Targets

- **LCP**: <500ms
- **CLS**: <0.1
- **FID**: <100ms
- **Lighthouse Score**: >95
- **Accessibility Score**: 100
