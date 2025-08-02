/**
 * Animation utilities and variants for SightGuardian AI Landing Page
 * Optimized for performance and accessibility
 */

import { Variants } from "framer-motion";

// Easing functions for consistent animation feel
export const easings = {
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeOutQuart: [0.25, 1, 0.5, 1],
  spring: { type: "spring", stiffness: 100, damping: 15 },
  springBounce: { type: "spring", stiffness: 400, damping: 17 },
} as const;

// Duration constants for consistent timing
export const durations = {
  fast: 0.3,
  medium: 0.5,
  slow: 0.8,
  verySlow: 1.2,
} as const;

// Fade in animations
export const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.medium,
      ease: easings.easeOutCubic,
    },
  },
};

// Fade in from different directions
export const fadeInUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.medium,
      ease: easings.easeOutCubic,
    },
  },
};

export const fadeInDownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.medium,
      ease: easings.easeOutCubic,
    },
  },
};

export const fadeInLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.medium,
      ease: easings.easeOutCubic,
    },
  },
};

export const fadeInRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.medium,
      ease: easings.easeOutCubic,
    },
  },
};

// Scale animations
export const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: durations.medium,
      ease: easings.easeOutCubic,
    },
  },
};

// Stagger animations for containers
export const staggerContainerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.medium,
      ease: easings.easeOutCubic,
    },
  },
};

// Hero section specific animations
export const heroTitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: durations.slow,
      ease: easings.easeOutCubic,
      delay: 0.2,
    },
  },
};

export const heroSubtitleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.medium,
      ease: easings.easeOutCubic,
      delay: 0.5,
    },
  },
};

export const heroFormVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: durations.medium,
      ease: easings.easeOutCubic,
      delay: 0.8,
    },
  },
};

// Trust indicators animations
export const trustIndicatorVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: durations.medium,
      ease: easings.easeOutCubic,
    },
  },
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      duration: durations.fast,
      ease: easings.easeOutCubic,
    },
  },
};

// Icon animations
export const iconFloatVariants: Variants = {
  initial: {
    y: 0,
    rotate: 0,
  },
  animate: {
    y: [-2, 2, -2],
    rotate: [-1, 1, -1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Button hover animations
export const buttonHoverVariants: Variants = {
  initial: {
    scale: 1,
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: durations.fast,
      ease: easings.easeOutCubic,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

// Loading animations
export const spinVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Pulse animation for attention-grabbing elements
export const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Viewport animation options
export const viewportOptions = {
  once: true,
  margin: "-100px 0px",
  amount: 0.3,
} as const;

// Reduced motion variants for accessibility
export const reducedMotionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

// Animation presets for common use cases
export const animationPresets = {
  fadeInUp: {
    variants: fadeInUpVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: viewportOptions,
  },
  fadeInDown: {
    variants: fadeInDownVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: viewportOptions,
  },
  fadeInLeft: {
    variants: fadeInLeftVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: viewportOptions,
  },
  fadeInRight: {
    variants: fadeInRightVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: viewportOptions,
  },
  scaleIn: {
    variants: scaleInVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: viewportOptions,
  },
  staggerContainer: {
    variants: staggerContainerVariants,
    initial: "hidden",
    whileInView: "visible",
    viewport: viewportOptions,
  },
} as const;

// Utility function to get animation props based on reduced motion preference
export const getAnimationProps = (
  preset: keyof typeof animationPresets,
  prefersReducedMotion: boolean,
) => {
  if (prefersReducedMotion) {
    return {
      variants: reducedMotionVariants,
      initial: "hidden",
      whileInView: "visible",
      viewport: { once: true },
    };
  }
  return animationPresets[preset];
};

// Performance optimized viewport options for mobile
export const mobileViewportOptions = {
  once: true,
  margin: "-50px 0px",
  amount: 0.2,
} as const;
