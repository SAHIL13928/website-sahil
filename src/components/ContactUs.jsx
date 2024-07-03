import React from 'react';
import './contact.css'; 
import { FaMobileAlt, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="contain">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Connect with us for expert financial guidance and personalized accounting solutions tailored to your needs.
          </p>
          <div className="info">
            <div className="information">
              <img src="img/location.png" className="icon" alt="" />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <img src="img/email.png" className="icon" alt="" />
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <img src="img/phone.png" className="icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div>
          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>
          <form action="index.html" autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input type="text" name="name" className="input" />
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input type="email" name="email" className="input" />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input type="tel" name="phone" className="input" />
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
