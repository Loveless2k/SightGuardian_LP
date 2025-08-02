/**
 * Accessible animated section component
 * Automatically handles reduced motion preferences and performance optimization
 */

"use client";

import { motion, MotionProps } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { getAnimationProps, animationPresets } from "@/lib/animations";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  preset?: keyof typeof animationPresets;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  customVariants?: MotionProps["variants"];
  [key: string]: any;
}

export function AnimatedSection({
  children,
  preset = "fadeInUp",
  className = "",
  as = "div",
  delay = 0,
  customVariants,
  ...props
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  // Get animation props based on user preferences
  const animationProps = customVariants
    ? {
        variants: customVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
      }
    : getAnimationProps(preset, prefersReducedMotion);

  const MotionComponent = motion[as as keyof typeof motion] as any;

  return (
    <MotionComponent
      className={className}
      variants={animationProps.variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px 0px", amount: 0.3 }}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

/**
 * Animated container for staggered children animations
 */
export function AnimatedContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  ...props
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  [key: string]: any;
}) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      }
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.2,
          },
        },
      };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px 0px", amount: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Animated item for use within AnimatedContainer
 */
export function AnimatedItem({
  children,
  className = "",
  ...props
}: {
  children: ReactNode;
  className?: string;
  [key: string]: any;
}) {
  const prefersReducedMotion = useReducedMotion();

  const itemVariants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
      }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" as const },
        },
      };

  return (
    <motion.div className={className} variants={itemVariants} {...props}>
      {children}
    </motion.div>
  );
}
