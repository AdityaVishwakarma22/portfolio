import React from "react";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()


    emailjs
      .sendForm('gmail', 'contact_form', form.current,'tsJrLKH_Fk2CfRugd')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <section id="contact">
      <h2 className="heading">Contact</h2>
      <form id="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="sub-form">
          <label>Name</label>
          <input type="text" name="user_name" />
        </div>
        <div className="sub-form">
          <label>Email</label>
          <input type="email" name="user_email" />
        </div>
        <div className="sub-form">
          <label>Contact Number</label>
          <input type="number" name="contact_number" />
        </div>
        <div className="sub-form">
          <label>Enter your message</label>
          <textarea name="message"></textarea>
        </div>
        <input type="submit" value="SEND" id="submit" />
      </form>
    </section>
  );
};

export default Contact;
