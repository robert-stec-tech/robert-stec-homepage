import { useContext } from 'react';
import { ContextLanguage } from './ContextLanguageProvider';
import { translation } from '../data/translation';

const Header = () => {
  const { isPolish } = useContext(ContextLanguage);

  return (
    <header>
      <h1 className="text-center text-6xl mt-[4vh] mb-[4vh]">
        {isPolish
          ? translation.polish.helloText
          : translation.english.helloText}
      </h1>
      <p className="text-justify">
        {isPolish ? translation.polish.text : translation.english.text}
      </p>
    </header>
  );
};

export default Header;
