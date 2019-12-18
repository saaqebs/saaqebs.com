import React, { Component } from 'react';

import ContactBar from '../contact/contact_bar'
import ContactForm from '../contact/contact_form'

class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <div className="contact-contain vertical-center-parent">
          <ContactBar />
          
        </div>
      </section>
    );
  }
}

export default Contact;
