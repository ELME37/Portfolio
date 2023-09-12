import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './formContact.scss';

export default function FormContact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bq3r4uu', 'template_wp8yxxr', form.current, 'X1apQkdCIhiwzJXJH')
      .then((result) => {
        console.log(result.text);

        setFormData({
          user_name: '',
          user_email: '',
          message: '',
        });

        setIsMessageSent(true);

        setTimeout(() => {
            setIsMessageSent(false);
          }, 10000);
        })

      .catch((error) => {
        console.log(error.text);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = () => {
    return formData.user_name !== '' && formData.user_email !== '' && formData.message !== '';
  };

  return (
    <form className='form' ref={form} onSubmit={sendEmail}>
      <label className='form__label' htmlFor="user_name">Prénom / Nom ou Nom de l'entreprise</label>
      <input
        className='form__input'
        type="text"
        name="user_name"
        id="user_name"
        value={formData.user_name}
        onChange={handleInputChange}
      />
      <label className='form__label' htmlFor="user_email">Email</label>
      <input
        className='form__input'
        type="email"
        name="user_email"
        id="user_email"
        value={formData.user_email}
        onChange={handleInputChange}
      />
      <label className='form__label' htmlFor="message">Message</label>
      <textarea
        className='form__text'
        name="message"
        id="message"
        cols="30"
        rows="10"
        value={formData.message}
        onChange={handleInputChange}
      />
      <input className={`form__button ${!isFormValid() ? 'disabled' : ''}`} type="submit" value="Envoyer" disabled={!isFormValid()} />
      <div className='form__message--send'>
        <p className={`message--send ${isMessageSent ? 'active' : ''}`}>
            <svg className='icon--message' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M336 16V80c0 8.8-7.2 16-16 16s-16-7.2-16-16V16c0-8.8 7.2-16 16-16s16 7.2 16 16zm-98.7 7.1l32 48c4.9 7.4 2.9 17.3-4.4 22.2s-17.3 2.9-22.2-4.4l-32-48c-4.9-7.4-2.9-17.3 4.4-22.2s17.3-2.9 22.2 4.4zM135 119c9.4-9.4 24.6-9.4 33.9 0L292.7 242.7c10.1 10.1 27.3 2.9 27.3-11.3V192c0-17.7 14.3-32 32-32s32 14.3 32 32V345.6c0 57.1-30 110-78.9 139.4c-64 38.4-145.8 28.3-198.5-24.4L7 361c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l53 53c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1L23 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l93 93c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1L55 185c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l117 117c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1l-93-93c-9.4-9.4-9.4-24.6 0-33.9zM433.1 484.9c-24.2 14.5-50.9 22.1-77.7 23.1c48.1-39.6 76.6-99 76.6-162.4l0-98.1c8.2-.1 16-6.4 16-16V192c0-17.7 14.3-32 32-32s32 14.3 32 32V345.6c0 57.1-30 110-78.9 139.4zM424.9 18.7c7.4 4.9 9.3 14.8 4.4 22.2l-32 48c-4.9 7.4-14.8 9.3-22.2 4.4s-9.3-14.8-4.4-22.2l32-48c4.9-7.4 14.8-9.3 22.2-4.4z"/></svg>
            Votre message a bien été envoyé !
            <svg className='icon--message' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M336 16V80c0 8.8-7.2 16-16 16s-16-7.2-16-16V16c0-8.8 7.2-16 16-16s16 7.2 16 16zm-98.7 7.1l32 48c4.9 7.4 2.9 17.3-4.4 22.2s-17.3 2.9-22.2-4.4l-32-48c-4.9-7.4-2.9-17.3 4.4-22.2s17.3-2.9 22.2 4.4zM135 119c9.4-9.4 24.6-9.4 33.9 0L292.7 242.7c10.1 10.1 27.3 2.9 27.3-11.3V192c0-17.7 14.3-32 32-32s32 14.3 32 32V345.6c0 57.1-30 110-78.9 139.4c-64 38.4-145.8 28.3-198.5-24.4L7 361c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l53 53c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1L23 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l93 93c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1L55 185c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l117 117c6.1 6.1 16 6.1 22.1 0s6.1-16 0-22.1l-93-93c-9.4-9.4-9.4-24.6 0-33.9zM433.1 484.9c-24.2 14.5-50.9 22.1-77.7 23.1c48.1-39.6 76.6-99 76.6-162.4l0-98.1c8.2-.1 16-6.4 16-16V192c0-17.7 14.3-32 32-32s32 14.3 32 32V345.6c0 57.1-30 110-78.9 139.4zM424.9 18.7c7.4 4.9 9.3 14.8 4.4 22.2l-32 48c-4.9 7.4-14.8 9.3-22.2 4.4s-9.3-14.8-4.4-22.2l32-48c4.9-7.4 14.8-9.3 22.2-4.4z"/></svg>
        </p>
      </div>
    </form>
  );
}
