import { Transition, Variants } from 'framer-motion';

export const floatVariant: Variants = {
  start: {
    y: '0%',
  },
  end: {
    y: '50%',
  },
};

export const floatTransition: Transition = {
  duration: 1.5,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: 'easeInOut',
};
