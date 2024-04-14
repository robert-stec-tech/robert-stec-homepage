import React, { useContext, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { variants } from '../data/framer-motion-variants';
import mailman from '../assets/img/mailman_640.png';
import Form from '../components/Form';
import { ContextLanguage } from '../components/ContextLanguageProvider';
import { translation } from '../data/translation';
import { ContextLanguageType, ContactInputsType } from '../types';

const Contact = () => {
  const { isPolish } = useContext<ContextLanguageType>(ContextLanguage);

  const [dataFromUser, setDataFromUser] = useState({
    name: '',
    email: '',
    message: '',
  });

  const form = useRef<HTMLFormElement>(null);

  const handleDataFromUser = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    data: ContactInputsType
  ) => {
    setDataFromUser((prev) => ({
      ...prev,
      [data]: e.target.value,
    }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_92ngqra', 'template_kdaaqso', form.current, {
          publicKey: 'zw9-FcKUn5IweqHVA',
        })
        .then(
          () => {
            alert(
              isPolish
                ? translation.polish.email.alert
                : translation.english.email.alert
            );

            setDataFromUser({
              name: '',
              email: '',
              message: '',
            });
          },
          (error) => {
            alert(`Błąd: ${error.text}`);
          }
        );
    }
  };

  return (
    <motion.section
      className="layout justify-evenly items-center"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h2>
        {isPolish
          ? translation.polish.email.title
          : translation.english.email.title}
      </h2>

      <div className="landscape:flex items-center gap-24">
        <img
          src={mailman}
          className="h-[30vh] landscape:h-[50vh] portrait:mx-auto"
          alt="Mailman"
        />

        <Form
          forwardedRef={form}
          dataFromUser={dataFromUser}
          handleDataFromUser={handleDataFromUser}
          sendEmail={sendEmail}
        />
      </div>
    </motion.section>
  );
};

export default Contact;
