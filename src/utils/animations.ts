import { ANIMATION_DURATIONS, EASING } from './constants';

// Animation helper functions for 60FPS animations
export const animationHelpers = {
  // Fade in animation
  fadeIn: (duration: number = ANIMATION_DURATIONS.normal) => ({
    animation: `fadeIn ${duration}ms ${EASING.easeOut} forwards`,
  }),

  // Fade out animation
  fadeOut: (duration: number = ANIMATION_DURATIONS.normal) => ({
    animation: `fadeOut ${duration}ms ${EASING.easeIn} forwards`,
  }),

  // Slide in from left
  slideInLeft: (duration: number = ANIMATION_DURATIONS.normal) => ({
    animation: `slideInLeft ${duration}ms ${EASING.easeOut} forwards`,
  }),

  // Slide in from right
  slideInRight: (duration: number = ANIMATION_DURATIONS.normal) => ({
    animation: `slideInRight ${duration}ms ${EASING.easeOut} forwards`,
  }),

  // Scale up animation
  scaleUp: (duration: number = ANIMATION_DURATIONS.normal) => ({
    animation: `scaleUp ${duration}ms ${EASING.easeOutElastic} forwards`,
  }),

  // Pulse animation (for beating hearts)
  pulse: (duration: number = ANIMATION_DURATIONS.slow) => ({
    animation: `pulse ${duration}ms ${EASING.linear} infinite`,
  }),

  // Float animation (for floating elements)
  float: (duration: number = ANIMATION_DURATIONS.slower) => ({
    animation: `float ${duration}ms ${EASING.easeInOut} infinite`,
  }),

  // Rotate animation
  rotate: (duration: number = ANIMATION_DURATIONS.slow) => ({
    animation: `rotate ${duration}ms linear infinite`,
  }),

  // Bounce animation
  bounce: (duration: number = ANIMATION_DURATIONS.normal) => ({
    animation: `bounce ${duration}ms ${EASING.easeOutElastic} infinite`,
  }),

  // Glow animation
  glow: (duration: number = ANIMATION_DURATIONS.slow) => ({
    animation: `glow ${duration}ms ${EASING.easeInOut} infinite`,
  }),

  // Shimmer animation
  shimmer: (duration: number = ANIMATION_DURATIONS.slower) => ({
    animation: `shimmer ${duration}ms ${EASING.linear} infinite`,
  }),

  // Gradient shift animation
  gradientShift: (duration: number = ANIMATION_DURATIONS.slowest) => ({
    animation: `gradientShift ${duration}ms ${EASING.linear} infinite`,
  }),
};

// Keyframe animations as strings for CSS injection
export const keyframes = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }

  @keyframes slideInLeft {
    from {
      transform: translateX(-100px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideInRight {
    from {
      transform: translateX(100px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes scaleUp {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  @keyframes glow {
    0%, 100% { text-shadow: 0 0 10px rgba(255, 20, 147, 0.5); }
    50% { text-shadow: 0 0 30px rgba(255, 20, 147, 1); }
  }

  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  @keyframes gradientShift {
    0% { background-position: 0% center; }
    100% { background-position: 100% center; }
  }
`;

// Transition timing helpers
export const getTransitionTiming = (property: string = 'all', duration: number = ANIMATION_DURATIONS.normal, easing: string = EASING.easeInOut) => `${property} ${duration}ms ${easing}`;

// Delay animation helper for staggered animations
export const getAnimationDelay = (index: number, delayInterval: number = 50) => `${index * delayInterval}ms`;
