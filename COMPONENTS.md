# Component Documentation

## 📧 EmailForm Component

### Overview

The EmailForm component is the primary call-to-action element on the landing page, featuring a glassmorphism design with advanced validation and user feedback.

### Features

- **Glassmorphism Design**: Semi-transparent container with backdrop blur
- **Advanced Validation**: React Hook Form + Zod schema validation
- **Loading States**: Animated spinner during submission
- **Error Handling**: Inline error messages with visual feedback
- **Responsive Design**: Adapts from mobile to desktop layouts
- **Accessibility**: Full keyboard navigation and screen reader support

### Usage

```tsx
import { EmailForm } from "./_components/EmailForm";

// Basic usage
<EmailForm />

// With custom container
<div className="max-w-2xl mx-auto">
  <EmailForm />
</div>
```

### Props

The EmailForm component doesn't accept props as it's self-contained with internal state management.

### Styling Classes

#### Container Classes

```css
/* Main form container */
.form-container {
  width: 100%;
  max-width: 32rem; /* max-w-2xl */
  margin: 0 auto;
}

/* Glassmorphism wrapper */
.form-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

@media (min-width: 640px) {
  .form-wrapper {
    flex-direction: row;
    gap: 1rem;
  }
}
```

#### Input Styling

```css
.form-input {
  width: 100%;
  border: none;
  background: transparent;
  font-size: 1.125rem;
  padding: 0.75rem 1rem;
  color: #1f2937;
  outline: none;
}

.form-input::placeholder {
  color: #6b7280;
}

.form-input:focus {
  ring: 2px solid rgba(37, 99, 235, 0.5);
  ring-offset: 2px;
}
```

#### Button Styling

```css
.cta-button {
  white-space: nowrap;
  padding: 0.75rem 2rem;
  font-size: 1.125rem;
  font-weight: 700;
  background: linear-gradient(to right, #2563eb, #1d4ed8);
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-button:hover {
  background: linear-gradient(to right, #1d4ed8, #1e40af);
  transform: scale(1.05);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
}

.cta-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none;
}
```

### States

#### Default State

- Clean input field with placeholder text
- Gradient CTA button ready for interaction
- No error messages visible

#### Loading State

```tsx
// Loading button content
{
  isSubmitting ? (
    <span className="flex items-center gap-2">
      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      Enviando...
    </span>
  ) : (
    "Activa la protección visual"
  );
}
```

#### Error State

- Red border on input field
- Error message displayed below input
- Button remains enabled for retry

#### Success State

- Form resets to default state
- Success message can be displayed (implementation dependent)

### Validation Schema

```typescript
import { z } from "zod";

const emailSchema = z.object({
  email: z
    .string()
    .min(1, "El correo electrónico es requerido")
    .email("Por favor ingresa un correo electrónico válido"),
});

type EmailFormData = z.infer<typeof emailSchema>;
```

### Server Action Integration

```typescript
// Server action for email submission
async function submitEmail(data: EmailFormData) {
  try {
    // Resend API integration
    const response = await resend.emails.send({
      from: "SightGuardian AI <noreply@sightguardian.ai>",
      to: [data.email],
      subject: "¡Bienvenido a SightGuardian AI!",
      html: emailTemplate,
    });

    return { success: true, data: response };
  } catch (error) {
    return { success: false, error: "Error al enviar el correo" };
  }
}
```

## 🎯 Trust Indicators Component

### Overview

The Trust Indicators section showcases three key value propositions with animated icons and professional styling.

### Structure

```tsx
<div className="trust-indicators-container">
  <div className="trust-grid">
    {trustIndicators.map((indicator) => (
      <TrustIndicator key={indicator.id} {...indicator} />
    ))}
  </div>
</div>
```

### Individual Trust Indicator

#### Props Interface

```typescript
interface TrustIndicatorProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorScheme: "blue" | "green";
}
```

#### Styling Classes

```css
/* Container */
.trust-indicator {
  text-align: center;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Icon Container */
.trust-icon {
  width: 5rem;
  height: 5rem;
  background: linear-gradient(
    to bottom right,
    rgba(37, 99, 235, 0.3),
    rgba(37, 99, 235, 0.1)
  );
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem auto;
  box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.25);
}

/* Hover Effects */
.trust-indicator:hover .trust-icon {
  transform: scale(1.1) rotate(3deg);
  box-shadow: 0 25px 50px -12px rgba(37, 99, 235, 0.4);
}

/* Typography */
.trust-title {
  font-weight: 900;
  font-size: 1.25rem;
  color: #1f2937;
  margin-bottom: 0.75rem;
}

.trust-description {
  color: #374151;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.6;
}
```

### Color Variants

#### Blue Variant (Primary)

```css
.trust-icon-blue {
  background: linear-gradient(
    to bottom right,
    rgba(37, 99, 235, 0.3),
    rgba(37, 99, 235, 0.1)
  );
  box-shadow: 0 20px 25px -5px rgba(37, 99, 235, 0.25);
}

.trust-icon-blue:hover {
  box-shadow: 0 25px 50px -12px rgba(37, 99, 235, 0.4);
}
```

#### Green Variant (Secondary)

```css
.trust-icon-green {
  background: linear-gradient(
    to bottom right,
    rgba(52, 211, 153, 0.3),
    rgba(52, 211, 153, 0.1)
  );
  box-shadow: 0 20px 25px -5px rgba(52, 211, 153, 0.25);
}

.trust-icon-green:hover {
  box-shadow: 0 25px 50px -12px rgba(52, 211, 153, 0.4);
}
```

## 🎨 UI Components

### Button Component

#### Variants

```typescript
type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}
```

#### Implementation

```tsx
const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  children,
  ...props
}) => {
  const baseClasses = "font-bold rounded-lg transition-all duration-300";
  const variantClasses = {
    primary:
      "bg-gradient-to-r from-brand-blue to-blue-600 text-white hover:from-brand-blue-dark hover:to-blue-700",
    secondary: "bg-brand-green text-white hover:bg-emerald-600",
    outline:
      "border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
  };

  return (
    <button
      className={cn(baseClasses, variantClasses[variant])}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <LoadingSpinner /> : children}
    </button>
  );
};
```

### Input Component

#### Props Interface

```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
  label?: string;
}
```

#### Implementation

```tsx
const Input: React.FC<InputProps> = ({
  error = false,
  errorMessage,
  label,
  className,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        className={cn(
          "w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue",
          error ? "border-red-500" : "border-gray-300",
          className,
        )}
        {...props}
      />
      {error && errorMessage && (
        <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
      )}
    </div>
  );
};
```

## 🔧 Usage Guidelines

### Best Practices

1. **Consistent Spacing**: Use Tailwind's spacing scale consistently
2. **Color Usage**: Stick to the defined brand color palette
3. **Animation**: Keep transitions smooth and purposeful
4. **Accessibility**: Always include proper ARIA labels and keyboard navigation
5. **Performance**: Optimize heavy animations for mobile devices

### Common Patterns

```tsx
// Container with glassmorphism
<div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-xl">
  {/* Content */}
</div>

// Hover effect with scale and shadow
<div className="transition-all duration-500 hover:scale-105 hover:shadow-2xl">
  {/* Interactive element */}
</div>

// Gradient text effect
<span className="bg-gradient-to-r from-brand-blue to-blue-600 bg-clip-text text-transparent">
  Highlighted text
</span>
```

### Testing Checklist

- [ ] Component renders correctly on all screen sizes
- [ ] Hover states work as expected
- [ ] Loading states provide clear feedback
- [ ] Error states are clearly communicated
- [ ] Keyboard navigation works properly
- [ ] Screen readers can access all content
- [ ] Performance is acceptable on mobile devices
