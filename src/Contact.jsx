import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./style.css";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent page refresh on form submission

    emailjs
      .sendForm(
        'service_5mqk7ng',        // Replace with your EmailJS service ID
        'template_005k6fk',       // Replace with your EmailJS template ID
        formRef.current,
        'eOAcympB6PKOXfACw'            // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to send me a message below.</p>
      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

