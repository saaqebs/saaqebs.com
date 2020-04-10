import React, { Component } from 'react';

import ContactBar from './contact_bar'
// import ContactForm from './contact_form'

class Contact extends Component {
  render() {
    return (
      <section className="contact">
        <div className="contact-contain">
          <ContactBar />
          {/*<ContactForm />*/}
        </div>
      </section>
    );
  }
}

export default Contact;
