import React from 'react';
import {
  NavItem, Modal, Form, FormGroup, FormControl, ControlLabel,
  Button, ButtonToolbar, NavDropdown, MenuItem,
} from 'react-bootstrap';
import graphQLFetch from './graphQLFetch.js';
import withToast from './withToast.jsx';

class LogInNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.signOut = this.signOut.bind(this);
    this.signIn = this.signIn.bind(this);
    this.profileUrl = './Profile?';
  }


  showModal() {
    this.setState({ showing: true });
  }

  hideModal() {
    this.setState({ showing: false });
  }


  async signIn(e) {
    e.preventDefault();
    this.hideModal();
    const form = document.forms.logAdd;
    const login = {
      id: form.email.value,
    };

    const query = `query profile($id: String!) {
      profile(id: $id) {
        firstname lastname email password
      }
    }`;

    const { showError } = this.props;
    const result = await graphQLFetch(query, { id: login.id }, showError);

    if (result) {
      if (result.profile.password !== form.password.value) {
        showError('Wrong password');
        return;
      }

      const { onUserChange } = this.props;
      onUserChange({
        signedIn: true,
        givenName: result.profile.firstname,
        email: result.profile.email,
        lastName: result.profile.lastname,
      });
    }
  }

  async signOut() {
    this.hideModal();

    const { onUserChange } = this.props;
    onUserChange({
      signedIn: false, givenName: '', email: '', lastName: '',
    });
  }


  render() {
    const { user } = this.props;
    const profileUrl = `./Profile?firstname=${user.givenName}&email=${user.email}&lastname=${user.lastName}`;
    if (user.signedIn) {
      return (
        <NavDropdown title={user.givenName} id="user">
          <MenuItem href={profileUrl}>Profile</MenuItem>
          <MenuItem onClick={this.signOut}>Sign out</MenuItem>
        </NavDropdown>
      );
    }

    const { showing } = this.state;
    return (
      <React.Fragment>
        <NavItem onClick={this.showModal}>
          Log In
        </NavItem>
        <Modal keyboard show={showing} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form name="logAdd">
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
                onClick={this.signIn}
              >
                Log In
              </Button>
              <Button bsStyle="link" onClick={this.hideModal}>Cancel</Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

export default withToast(LogInNavItem);
