export type ContextLanguageType = {
  isPolish: boolean;
  handleLanguage?: () => void;
};

export type ContactInputsType = 'name' | 'email' | 'message';

export type ArrowsType = Partial<{
  children: React.ReactNode;
  handleArrow: (direction: 'left' | 'right') => void;
}>;
