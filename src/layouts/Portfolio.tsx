import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { variants } from '../data/framer-motion-variants';
import satchel from '../assets/img/satchel_640.png';
import PortraitArrows from '../components/PortraitArrows';
import LandscapeArrows from '../components/LandscapeArrows';
import { ContextLanguage } from '../components/ContextLanguageProvider';

type ArrowDirections = 'left' | 'right';

const Portfolio = () => {
  const { isPolish } = useContext(ContextLanguage);

  const [index, setIndex] = useState(0);

  const handleArrow = (direction: ArrowDirections) => {
    if (direction === 'left') {
      setIndex((prev) => (prev === 0 ? portfolioData.length - 1 : prev - 1));
    } else {
      setIndex((prev) => (prev === portfolioData.length - 1 ? 0 : prev + 1));
    }
  };

  const icons = portfolioData[index].icons.map((icon, i) => (
    <motion.img
      key={i}
      className="h-[10vw] landscape:h-[5vw] landscape:xl:h-[10vh]"
      whileHover={{ y: -10 }}
      src={icon}
    />
  ));

  const portfolio = (
    <div
      key={index}
      className="flex flex-col justify-between gap-7 my-[2vh] px-[2vh] py-[2vh] rounded-md"
      id="target"
    >
      <h3>
        {isPolish
          ? portfolioData[index].name
          : portfolioData[index].englishName}
      </h3>

      <LandscapeArrows handleArrow={handleArrow}>
        <a
          href={portfolioData[index].src}
          target="_blank"
          className="w-[90%] landscape:w-[40%] portrait:mx-auto rounded-md"
        >
          <motion.img
            src={portfolioData[index].img}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: '360deg' }}
            transition={{ duration: 0.5 }}
            alt="Portfolio"
          />
        </a>
      </LandscapeArrows>

      <p className="text-center">
        {isPolish
          ? portfolioData[index].description
          : portfolioData[index].englishDescription}
      </p>

      <div className="flex justify-center gap-5">{icons}</div>
    </div>
  );

  return (
    <motion.section
      className="layout"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <div className="landscape:flex justify-center items-center gap-10">
        <h2>Portfolio</h2>
        <img src={satchel} className="h-[8vh] portrait:mx-auto" alt="Satchel" />
      </div>

      {portfolio}

      <PortraitArrows handleArrow={handleArrow} />
    </motion.section>
  );
};

export default Portfolio;
