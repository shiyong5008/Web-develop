import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  NavItem, Modal, Form, FormGroup, FormControl, ControlLabel,
  Button, ButtonToolbar,
} from 'react-bootstrap';
import graphQLFetch from './graphQLFetch.js';
import withToast from './withToast.jsx';

class SignUpNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showModal() {
    this.setState({ showing: true });
  }

  hideModal() {
    this.setState({ showing: false });
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.hideModal();
    const form = document.forms.profileAdd;
    const profile = {
      firstname: form.first.value,
      lastname: form.last.value,
      email: form.email.value,
      password: form.password.value,
    };

    let query = `query profile($id: String!) {
      profile(id: $id) {
        firstname lastname email password
      }
    }`;

    const { showError } = this.props;
    const result = await graphQLFetch(query, { id: profile.email }, showError);
    if (result) {
      showError('Account Already Exists');
      return;
    }


    query = `mutation profileAdd($profile: ProfileInputs!) {
      profileAdd(profile: $profile) {
        id
      } 
    }`;

    await graphQLFetch(query, { profile }, showError);
  }

  render() {
    const { showing } = this.state;
    return (
      <React.Fragment>
        <NavItem onClick={this.showModal}>
          Sign Up
        </NavItem>
        <Modal keyboard show={showing} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Create Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form name="profileAdd">
              <FormGroup>
                <ControlLabel>First Name</ControlLabel>
                <FormControl name="first" autoFocus />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Last Name</ControlLabel>
                <FormControl name="last" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <FormControl name="email" />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl name="password" />
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <ButtonToolbar>
              <Button
                type="button"
                bsStyle="primary"
                onClick={this.handleSubmit}
              >
                Sign Up
              </Button>
              <Button bsStyle="link" onClick={this.hideModal}>Cancel</Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default withToast(withRouter(SignUpNavItem));
