import React, { Component } from 'react';

class ContactBar extends Component {
  render() {
    return (
      <div className="contact-bar">
        <span>
          <a href="https://www.linkedin.com/in/saaqeb/">
            <img src={"sidebar/linkedin2.png"} height={35} width={35} />
          </a>
        </span>
        <span>
          <a href="https://github.com/saaqebs">
            <img src={"sidebar/github2.png"} height={37} width={37} />
          </a>
        </span>
        <span>
          <a href="mailto:asksaaqeb@gmail.com">
            <img src={"sidebar/mail2.png"} height={27} width={37} />
          </a>
        </span>
      </div>
    );
  }
}

export default ContactBar;
