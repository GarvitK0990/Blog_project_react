import "./Contactus.css"

import React from 'react'

export default function Signup() {
  return (
    <>
    <div class="container">
    <span class="big-circle"></span>
    <img src="shape.png" class="square" alt="" />
    <div class="form">
      <div class="contact-info">
        <h3 class="title">Let's get in touch</h3>
        <p class="text11">
          I would love to hear on how you like/dislike Reader's Beat. Submit this small form for your Greatfull Ideas and suggestions are welcome.
        </p>

        <div class="info">
          <div class="information">
            <img src="location.png" class="icon" alt="" />
            <p>92 Chitkara University , Punjab</p>
          </div>
          <div class="information">
            <img src="email.png" class="icon" alt="" />
            <p>chitkara.edu.in</p>
          </div>
          <div class="information">
            <img src="phone.png" class="icon" alt="" />
            <p>123-456-789</p>
          </div>
        </div>

        <div class="social-media">
          {/* <p>Connect with us :</p>
          <div class="social-icons">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div> */}
        </div>
      </div>

      <div class="contact-form">
        <span class="circle one"></span>
        <span class="circle two"></span>

        <form action="index.html" autocomplete="off">
          <h3 class="title">Contact us</h3>
          <div class="input-container">
          <label for="">Username</label>
            <input type="text" name="name" class="input" />
            

          </div>
          <div class="input-container">
          <label for="">Email</label>
            <input type="email" name="email" class="input" />
            

          </div>
          <div class="input-container">
          <label for="">Phone</label>
            <input type="tel" name="phone" class="input" />
            

          </div>
          <div class="input-container textarea">
          <label for="">Message</label>
            <textarea name="message" class="input"></textarea>
          </div>
          <input type="submit" value="Send" class="btn" />
        </form>
      </div>
    </div>
  </div>

<div className="bottom">Created By: Garvit Khunger</div>
</>
  )
}
