import React, { PureComponent } from 'react';

import './styles/contact.scss'

import linkedIn from './images/linkedin2.png'
import github from './images/github2.png'
import mail from './images/mail2.png'

class ContactBar extends PureComponent {
  render() {
    return (
      <div>
        <h2 className='lable'>Let's get in touch.</h2>
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
    );
  }
}

export default ContactBar;
