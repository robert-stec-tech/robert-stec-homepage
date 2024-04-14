export const variants = {
  initial: {
    opacity: 0,
    x: -80,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    },
  },
  exit: {
    x: -80,
    opacity: 0,
  },
};
