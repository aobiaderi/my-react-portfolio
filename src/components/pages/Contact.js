import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>
        You can reach me via email at <a href="mailto:aobiaderi@yahoo.com">aobiaderi@yahoo.com</a> or by filling out the form below:
      </p>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
      <div className="container my-media">
        <div className="text-center">
          {/* Add media links and icons */}
          <a className="linkd" href="#">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>

          <a className="gh" href="https://aobiaderi.github.io/bootstrap-portfolio/" target="_blank">
            <ion-icon name="logo-github"></ion-icon>
          </a>

          <a className="fb" href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;