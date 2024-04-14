import { motion } from 'framer-motion';
import { variants } from '../data/framer-motion-variants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { ArrowsType } from '../types';

const PortraitArrows = ({ handleArrow }: ArrowsType) => {
  return (
    <motion.div
      className="flex justify-between landscape:hidden fixed left-2 right-2 bottom-[10vh]"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      {handleArrow && (
        <FontAwesomeIcon
          className="arrow"
          icon={faCircleLeft}
          onClick={() => handleArrow('left')}
        />
      )}
      {handleArrow && (
        <FontAwesomeIcon
          className="arrow"
          icon={faCircleRight}
          onClick={() => handleArrow('right')}
        />
      )}
    </motion.div>
  );
};

export default PortraitArrows;
