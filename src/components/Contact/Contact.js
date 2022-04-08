import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import validator from 'validator'
import Input, {isPossiblePhoneNumber}  from 'react-phone-number-input/input'



const Result = () => {
  return (
    <span>Your message has successfully been sent.</span>
    )
  }



  const Contact = () => {
    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
      var email = e.target.value

      if (validator.isEmail(email)) {
        setEmailError('Valid Email :)')
      } else {
        setEmailError('Enter a valid Email!')
      }
    }


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

    const [value, setValue] = useState()

  return (
    <div className='contact-wrapper'>
      <div>
        <span className="contact-title">
          Contact me!
        </span>
      </div>
        <form ref={form} onSubmit={sendEmail} className='contact-box'>
          <div className='info-container'>
            <label>Full name</label>
            <input className='form-item' type='text' name='fullname' required/>
            <br/>
            <label>Phone</label>
              <Input className='form-item'
              country='TR'
              international
              withCountryCallingCode
              value={value}
              onChange={setValue}
              error={value ? (isPossiblePhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}
              required/>
            <br/>
            <label>Email</label>
            <input className='form-item' type='text' name='email' onChange={(e) => validateEmail(e)} required/>
            <div className='email-error'>{emailError}</div>
          </div>

          <div className='message-container'>
            <label>Your message</label>
            <div className='textarea-container'>
              <textarea type='text' name='message' rows="5" required/>
            </div>
            <br/>
            <button type='submit' value='Send'>Send</button>
            <div className='sent-confirm'>{result ? <Result/> : null}</div>
          </div>
        </form>
    </div>
  )
}

export default Contact
