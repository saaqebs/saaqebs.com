import React, { Component } from 'react';

import ContactBar from '../contact/contact_bar'
// import ContactForm from '../pieces/contact_form'

class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <div className="contact-contain vertical-center-parent">
        <h2>Let's get in touch.</h2>
          <ContactBar />
          {/*<ContactForm />*/}
        </div>
      </section>
    );
  }
}

export default Contact;
