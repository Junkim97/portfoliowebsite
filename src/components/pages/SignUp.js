import React from 'react'
import '../../App.css'
import emailjs from 'emailjs-com'

export default function SignUp() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_n71e9nj', e.target, 'user_XJsNyPJUAG380p7UVbDaR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  
  return (
    <div className='sign-upWrapper'>
    <h1>Contact</h1>
    <box className='contactBox'>
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea rows='5' name="message" />
      <input type="submit" value="Send" />
    </form>
    </box>
    </div>
  )
}