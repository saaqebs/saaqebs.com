import React, { PureComponent } from 'react';

import ContactBar from './contact_bar'
// import ContactForm from './contact_form'

class Contact extends PureComponent {
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
