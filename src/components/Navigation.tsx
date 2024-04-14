import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useAnimate, stagger } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faBriefcase,
  faEnvelope,
  faGlobe,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ContextLanguage } from './ContextLanguageProvider';
import { ContextLanguageType } from '../types';
import { translation } from '../data/translation';

type LinksDataType = {
  to?: string;
  icon: IconDefinition;
  title: string;
  github?: boolean;
  language?: boolean;
};

const Navigation = () => {
  const { isPolish, handleLanguage } =
    useContext<ContextLanguageType>(ContextLanguage);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(scope.current, { opacity: [0, 1] });

    animate(
      '.animation',
      {
        y: [50, 0],
        opacity: [0, 1],
      },
      {
        delay: stagger(0.1),
      }
    );
  }, []);

  const linksData: LinksDataType[] = [
    {
      to: '/',
      icon: faHouse,
      title: isPolish
        ? translation.polish.title.home
        : translation.english.title.home,
    },
    {
      to: '/portfolio',
      icon: faBriefcase,
      title: 'Portfolio',
    },
    {
      to: '/contact',
      icon: faEnvelope,
      title: isPolish
        ? translation.polish.title.contact
        : translation.english.title.contact,
    },
    {
      to: 'https://github.com/robertspol',
      icon: faGithub,
      title: 'GitHub',
      github: true,
    },
    {
      icon: faGlobe,
      title: isPolish
        ? translation.polish.title.language
        : translation.english.title.language,
      language: true,
    },
  ];

  const links = linksData.map((link) => (
    <div className="animation" key={link.title}>
      {link.language ? (
        <a
          className="nav-btn portrait:md:h-[3vh]"
          onClick={handleLanguage}
          title={link.title}
        >
          <FontAwesomeIcon icon={faGlobe} className="portrait:md:h-[3vh]" />
        </a>
      ) : (
        <NavLink
          className={`nav-btn portrait:md:h-[3vh] ${
            link.github ? 'portrait:ml-[8vw] landscape:mt-[8vh]' : ''
          }`}
          to={link.to || ''}
          title={link.title}
          target={link.github ? '_blank' : '_self'}
        >
          <FontAwesomeIcon icon={link.icon} className="portrait:md:h-[3vh]" />
        </NavLink>
      )}
    </div>
  ));

  return (
    <nav
      ref={scope}
      className="flex landscape:flex-col justify-center items-center landscape:items-stretch gap-4 fixed left-0 landscape:left-auto landscape:right-0 bottom-0 w-[100%] landscape:w-[8%] landscape:lg:w-[5%] portrait:h-[8vh] landscape:h-[100vh] portrait:py-2 px-2 bg-black z-10"
    >
      {links}
    </nav>
  );
};

export default Navigation;
