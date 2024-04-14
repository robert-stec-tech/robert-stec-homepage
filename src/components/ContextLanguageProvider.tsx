import { createContext, useEffect, useState } from 'react';

type ContextLanguageProviderProps = {
  children: React.ReactNode;
};

type ContextLanguageValue = {
  isPolish: boolean;
  handleLanguage?: () => void;
};

export const ContextLanguage = createContext<ContextLanguageValue>({
  isPolish: true,
  handleLanguage: () => {},
});

const ContextLanguageProvider = ({
  children,
}: ContextLanguageProviderProps) => {
  const [isPolish, setIsPolish] = useState(true);

  useEffect(() => {
    navigator.language !== 'pl' && setIsPolish(false);
  }, []);

  const handleLanguage = () => {
    setIsPolish((prev) => !prev);
  };

  return (
    <ContextLanguage.Provider value={{ isPolish, handleLanguage }}>
      {children}
    </ContextLanguage.Provider>
  );
};
export default ContextLanguageProvider;
