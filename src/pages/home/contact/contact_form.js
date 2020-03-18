import React, { Component } from 'react';
// import $ from 'jquery';

import './styles/contact.scss'


class ContactForm extends Component {
  constructor(props){
    super(props);
    this.state = {name: '', email: '', message: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.name || '',
      email: event.target.email || '',
      message: event.target.message || '',
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.message);
  }

  render() {
    return (
      <div className="form">
        <form noValidate id="form" onSubmit={this.validateForm}>
          <div className="group form-group">
            <input type="text" value={this.state.name} onChange={this.handleChange} />
            <span className="highlight" />
            <span className="bar" />
            <label>Name</label>
            <section id="nameError" className="error hidden">
              Your name is required.
            </section>
          </div>
          <div className="group">
            <input type="email" value={this.state.email} onChange={this.handleChange} />
            <span className="highlight" />
            <span className="bar" />
            <label>Email</label>
            <section id="emailError" className="error hidden">
              Valid email address is required.
            </section>
          </div>
          <div className="group">
            <input type="text" value={this.state.message} onChange={this.handleChange} />
            <span className="highlight" />
            <span className="bar" />
            <label>Message</label>
            <section id="messageError" className="error hidden">
              A message greater than 8 characters is required.
            </section>
          </div>
          <div>
            <input type="submit" className="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
