import React, { Component } from 'react';
// import $ from 'jquery';

import './styles/contact.scss'


class ContactForm extends Component {
  validateForm = (event) => {
    let name = event.target.name;
    console.log(name);
    let email = event.target.email;
    console.log(email);
    let message = event.target.message;
    console.log(message);
  }

  render() {
    return (
      <div className="form">
        <form noValidate id="form" onSubmit={this.validateForm}>
          <div className="group form-group">
            <input type="text" id="name" required />
            <span className="highlight" />
            <span className="bar" />
            <label>Name</label>
            <section id="nameError" className="error hidden">
              Your name is required.
            </section>
          </div>
          <div className="group">
            <input type="email" id="email" required />
            <span className="highlight" />
            <span className="bar" />
            <label>Email</label>
            <section id="emailError" className="error hidden">
              Valid email address is required.
            </section>
          </div>
          <div className="group">
            <input type="text" id="message" required />
            <span className="highlight" />
            <span className="bar" />
            <label>Message</label>
            <section id="messageError" className="error hidden">
              A message greater than 8 characters is required.
            </section>
          </div>
          <div>
            <input type="submit" className="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
