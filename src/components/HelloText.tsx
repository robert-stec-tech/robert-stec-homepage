import { useContext } from 'react';
import { motion } from 'framer-motion';
import { variants } from '../data/framer-motion-variants';
import { ContextLanguage } from './ContextLanguageProvider';
import { translation } from '../data/translation';

const HelloText = () => {
  const { isPolish } = useContext(ContextLanguage);

  return (
    <motion.div
      className="text-center"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="mb-[5vh] text-6xl portrait:md:text-8xl font-extrabold tracking-widest">
        {isPolish
          ? translation.polish.helloText
          : translation.english.helloText}
      </h1>
      <p className="text-lg portrait:md:text-2xl">
        {isPolish ? translation.polish.text : translation.english.text}
      </p>
    </motion.div>
  );
};

export default HelloText;
