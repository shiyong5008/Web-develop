import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, Button, FormControl,
} from 'react-bootstrap';

export default class SignUp extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.profileAdd;
    const profile = {
      email: form.email.value,
      password: form.password.value,
      first: form.first.value,
      last: form.last.value,
    };
    const { createProfile } = this.state;
    createProfile(profile);
    form.email.value = ''; form.password.value = ''; form.first.value = ''; form.last.value = '';
  }

  render() {
    return (
      <Form inline name="profileAdd" align="center" onSubmit={this.handleSubmit}>

        <h1 align="center">Create An Account</h1>
        <p size="sm" className="text-muted" align="center">
          Already have an account?
          {' '}
          <a href="./LogIn">
            Log In
          </a>
          {' '}
        </p>
        <p>{' '}</p>
        <div align="center">
          <FormControl type="text" name="first" placeholder="First Name" />
          <p>{' '}</p>
          <FormControl type="text" name="last" placeholder="Last Name" />
          <p>{' '}</p>
          <FormControl type="text" name="email" placeholder="Email" />
          <p>{' '}</p>
          <FormControl type="text" name="password" placeholder="Password" />
          <p>{' '}</p>
          <Button bsStyle="primary" type="submit" onClick={this.handleSubmit}>Sign Up</Button>
        </div>
      </Form>
    );
  }
}

SignUp.propTypes = {
  createProfile: PropTypes.func.isRequired,
};
