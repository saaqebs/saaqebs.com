import React, { Component } from 'react';
import './styles/sidebar.scss'

class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar vertical-center-parent">
        <nav id="sidebar">
          <div>
            <ul>
              <li id="li">
                <a href="https://www.linkedin.com/in/saaqeb/">
                  <img src={"sidebar/linkedin.png"} height={35} width={35} />
                </a>
              </li>
              <li>
                <a href="https://github.com/saaqebs">
                  <img src={"sidebar/github.png"} height={37} width={37} />
                </a>
              </li>
              <li>
                <a href="mailto:asksaaqeb@gmail.com">
                  <img src={"sidebar/mail.png"} height={27} width={37} />
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
