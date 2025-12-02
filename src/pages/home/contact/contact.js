import React, { PureComponent } from 'react';

import './styles/contact.scss'
import linkedIn from './images/linkedin.png'
import github from './images/github.png'
import mail from './images/mail.png'


class Contact extends PureComponent {
  render() {
    return (
      <section className="contact">
        <div className="contact-contain">
          {/* <ContactBar /> */}
          <h2 className='label'>Let's get in touch.</h2>
          <div className="contact-bar">
            <span>
              <a href="https://www.linkedin.com/in/saaqeb/">
                <img src={linkedIn} height={35} width={35} alt="In" />
              </a>
            </span>
            <span>
              <a href="https://github.com/saaqebs">
                <img src={github} height={37} width={37} alt="Git" />
              </a>
            </span>
            <span>
              <a href="mailto:asksaaqeb@gmail.com">
                <img src={mail} height={27} width={37} alt="Mail" />
              </a>
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
