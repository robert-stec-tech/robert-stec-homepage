import { motion, Variants } from 'framer-motion';

const MainImg = () => {
  const stroke = 'yellow';
  const strokeWidth = 1;

  const svgVariants: Variants = {
    initial: {
      y: 20,
    },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        delay: 2,
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  const variants: Variants = {
    initial: {
      opacity: 0,
      pathLength: 0,
    },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <motion.svg
      className="mx-auto stroke-white drop-shadow-xl"
      variants={svgVariants}
      initial="initial"
      animate="animate"
      style={{ filter: 'drop-shadow(0 0 10px yellow' }}
      width="150"
      height="150"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        variants={variants}
        initial="initial"
        animate="animate"
        d="M15.5 9L15.6716 9.17157C17.0049 10.5049 17.6716 11.1716 17.6716 12C17.6716 12.8284 17.0049 13.4951 15.6716 14.8284L15.5 15"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <motion.path
        variants={variants}
        initial="initial"
        animate="animate"
        d="M13.2942 7.17041L12.0001 12L10.706 16.8297"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <motion.path
        variants={variants}
        initial="initial"
        animate="animate"
        d="M8.49994 9L8.32837 9.17157C6.99504 10.5049 6.32837 11.1716 6.32837 12C6.32837 12.8284 6.99504 13.4951 8.32837 14.8284L8.49994 15"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <motion.path
        variants={variants}
        initial="initial"
        animate="animate"
        d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

export default MainImg;
