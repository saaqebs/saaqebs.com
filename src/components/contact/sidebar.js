import React, { Component } from 'react';

import './styles/sidebar.scss'

import linkedIn from './images/linkedin.png'
import github from './images/github.png'
import mail from './images/mail.png'

class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar vertical-center-parent">
        <nav id="sidebar">
          <div>
            <ul>
              <li id="li">
                <a href="https://www.linkedin.com/in/saaqeb/">
                  <img src={linkedIn} height={35} width={35} alt="In" />
                </a>
              </li>
              <li>
                <a href="https://github.com/saaqebs">
                  <img src={github} height={37} width={37} alt="Git" />
                </a>
              </li>
              <li>
                <a href="mailto:asksaaqeb@gmail.com">
                  <img src={mail} height={27} width={37} alt="Mail" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
