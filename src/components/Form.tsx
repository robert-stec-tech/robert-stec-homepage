import { RefObject, useContext } from 'react';
import { ContextLanguage } from './ContextLanguageProvider';
import { translation } from '../data/translation';
import { ContextLanguageType, ContactInputsType } from '../types';

type FormProps = {
  forwardedRef: RefObject<HTMLFormElement>;
  dataFromUser: {
    name: string;
    email: string;
    message: string;
  };
  handleDataFromUser: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: ContactInputsType
  ) => void;
  sendEmail: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form = ({
  forwardedRef,
  dataFromUser,
  handleDataFromUser,
  sendEmail,
}: FormProps) => {
  const { isPolish } = useContext<ContextLanguageType>(ContextLanguage);

  return (
    <form
      ref={forwardedRef}
      className="flex flex-col gap-[1vh]"
      onSubmit={sendEmail}
    >
      <label>
        {isPolish
          ? translation.polish.email.name
          : translation.english.email.name}
      </label>
      <input
        className="form-field"
        value={dataFromUser.name}
        onChange={(e) => handleDataFromUser(e, 'name')}
        type="text"
        name="name"
      />

      <label>Email</label>
      <input
        className="form-field"
        value={dataFromUser.email}
        onChange={(e) => handleDataFromUser(e, 'email')}
        type="email"
        name="email"
      />

      <label>
        {isPolish
          ? translation.polish.email.message
          : translation.english.email.message}
      </label>
      <textarea
        className="form-field"
        value={dataFromUser.message}
        onChange={(e) => handleDataFromUser(e, 'message')}
        name="message"
        rows={4}
        cols={30}
      />

      <input
        className="contact-btn self-center mt-[3vh] px-2 py-2 bg-[#00a] rounded-xl uppercase transition cursor-pointer"
        type="submit"
        value={
          isPolish
            ? translation.polish.email.button
            : translation.english.email.button
        }
      />
    </form>
  );
};

export default Form;
