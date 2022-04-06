import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

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
    <div className='page-wrapper'>
      <div>
        <span className="contact-title">
          Contact me!
        </span>
      </div>
        <form ref={form} onSubmit={sendEmail} className='row'>
          <div className='contact-a'>
            <label>Full name</label>
            <input className='form-item' type='text' name='fullname' required/>
            <br/>
            <label>Phone</label>
            <input className='form-item' type='text' name='phone' required/>
            <br/>
            <label>Email</label>
            <input className='form-item' type='text' name='email' required/>
          </div>

          <div className='contact-b'>
            <label>Your message</label>
            <textarea type='text' name='message' rows="5" required/>
            <br/>
            <button type='submit' value='Send'>Send</button>
            <div className='sent-confirm'>{result ? <Result/> : null}</div>
          </div>
        </form>
    </div>
  )
}

export default Contact
