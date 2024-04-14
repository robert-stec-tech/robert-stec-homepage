import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft, faCircleRight } from '@fortawesome/free-solid-svg-icons';
import { ArrowsType } from '../types';

const LandscapeArrows = ({ children, handleArrow }: ArrowsType) => {
  return (
    <div className="landscape:flex justify-evenly items-center">
      {handleArrow && (
        <FontAwesomeIcon
          className="arrow portrait:hidden"
          icon={faCircleLeft}
          onClick={() => handleArrow('left')}
        />
      )}

      {children}

      {handleArrow && (
        <FontAwesomeIcon
          className="arrow portrait:hidden"
          icon={faCircleRight}
          onClick={() => handleArrow('right')}
        />
      )}
    </div>
  );
};

export default LandscapeArrows;
