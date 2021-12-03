import React from 'react';
import PropTypes from 'prop-types';
import {
  Form, Button, FormControl,
} from 'react-bootstrap';

export default class LogIn extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    const form = document.forms.login;
    const login = {
      id: form.email.value,
    };

    const query = `query profile($id: String!) {
      profile(id: $id) {
        firstname lastname email
      }
    }`;

    const { showError } = this.props;
    const result = await graphQLFetch(query, { login }, showError);
    return result;
  }

  render() {
    return (
      <Form inline name="login" align="center" onSubmit={this.handleSubmit}>
        <h1 align="center">Log In</h1>
        <p size="sm" className="text-muted" align="center">
          Do not have an account?
          {' '}
          <a href="./SignUp">
            Sign Up
          </a>
          {' '}
        </p>
        <p>{' '}</p>
        <div align="center">
          <FormControl type="text" name="email" placeholder="Email" />
          <p>{' '}</p>
          <FormControl type="text" name="password" placeholder="Password" />
          <p>{' '}</p>
          <Button bsStyle="primary" type="submit" onClick={this.handleSubmit}>Log In</Button>
        </div>
      </Form>
    );
  }
}

LogIn.propTypes = {
  createLogin: PropTypes.func.isRequired,
};
