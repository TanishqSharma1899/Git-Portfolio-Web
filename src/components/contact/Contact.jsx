import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w6duhiq', 'template_o6f1yax', form.current, '6GVy1RPifpt0XI_EG')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>example@gmail.com</h5>
            <a href="mailto:shadow.play.0199@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>portfolioweb</h5>
            <a href="https://facebook.com" target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whats'App</h4>
            <h5>99999999</h5>
            <a href="http://api.whatsapp.com/send?phone=your number with country code" target='_blank'>Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS   */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
