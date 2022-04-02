import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Result = () => {
  return (
    <span>Your message has successfully been sent.</span>
  )
}

const Contact = () => {
  const form = useRef();
  const [result, setResult] = useState()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dxt5fs8', 'template_cxuvrwn', form.current, '97MUu26IOh-3kcLvZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
      setResult(true);
  };

  return (
    <div className='form-container'>
      <form ref={form} onSubmit={sendEmail}>

        <div className='info-container'>
          <label>Full name</label>
          <input className='form-item' type='text' name='fullname' required/>
           <label>Phone</label>
          <input className='form-item' type='text' name='phone' required/>
           <label>Email</label>
          <input className='form-item' type='text' name='email' required/>
        </div>

        <div className='msg-container'>
          <label>Your message</label>
          <textarea className='form-item' type='text' name='message' required/>
          <button type='submit' value='Send'>Send</button>
        </div>

        <div className='sent-confirm'>{result ? <Result/> : null}</div>
      </form>

    </div>
  )
}

export default Contact
