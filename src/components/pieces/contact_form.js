import React, { Component } from 'react';


class ContactForm extends Component {
  render() {
    return (
      <div className="form">
        <h2>Let's get in touch.</h2>
        <form>
          <div className="group form-group">
            <input type="text" required />
            <span className="highlight" />
            <span className="bar" />
            <label>Name</label>
          </div>
          <div className="group">
            <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp"  required />
            <span className="highlight" />
            <span className="bar" />
            <label>Email</label>
          </div>
          <div className="group">
            <input type="text" required />
            <span className="highlight" />
            <span className="bar" />
            <label>Message</label>
          </div>
          <div>
            <input type="submit" className="submit"/>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
