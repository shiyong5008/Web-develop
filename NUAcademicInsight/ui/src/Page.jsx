import React from 'react';
import {
  Navbar, Nav, NavItem, NavDropdown,
  MenuItem, Glyphicon,
  Grid, Col,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Contents from './Contents.jsx';
import Search from './Search.jsx';
import UserContext from './UserContext.js';
import graphQLFetch from './graphQLFetch.js';
import store from './store.js';
import SignUpNavItem from './SignUpNavItem.jsx';
import LogInNavItem from './LogInNavItem.jsx';
import ReviewAddNavItem from './ReviewAddNavItem.jsx';


function NavBar({ user, onUserChange }) {
  return (
    <Navbar fluid expand="lg" bg="dark" variant="dark">
      <Navbar.Header>
        <Navbar.Brand>Academic Insight</Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer exact to="/">
          <NavItem>Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/reviews">
          <NavItem>Reviews</NavItem>
        </LinkContainer>
        <ReviewAddNavItem user={user} />
      </Nav>
      <Col sm={5}>
        <Navbar.Form>
          <Search />
        </Navbar.Form>
      </Col>
      <Nav pullRight>
        <NavItem> </NavItem>
        <LogInNavItem user={user} onUserChange={onUserChange} />
        <NavDropdown
          id="user-dropdown"
          title={<Glyphicon glyph="option-vertical" />}
          noCaret
        >
          <SignUpNavItem user={user} onUserChange={onUserChange} />
          <LinkContainer to="/about">
            <MenuItem>About</MenuItem>
          </LinkContainer>

        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

function Footer() {
  return (
    <small>
      <hr />
      <p className="text-center">
        © 2021 Academic Insight
        {' '}
        {/* <a href="https://github.ccs.neu.edu/NEU-CS5610-SU21/NUAcademicInsight">
          GitHub repository
        </a> */}
      </p>
    </small>
  );
}

export default class Page extends React.Component {
  static async fetchData(cookie) {
    const query = `query { user {
      signedIn givenName
    }}`;
    const data = await graphQLFetch(query, null, null, cookie);
    return data;
  }

  constructor(props) {
    super(props);
    const user = store.userData ? store.userData.user : null;
    delete store.userData;
    this.state = { user };
    this.onUserChange = this.onUserChange.bind(this);
  }

  async componentDidMount() {
    const { user } = this.state;
    if (user == null) {
      const data = await Page.fetchData();
      this.setState({ user: data.user });
    }
  }

  onUserChange(user) {
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    if (user == null) return null;

    return (
      <div>
        <NavBar user={user} onUserChange={this.onUserChange} />
        <Grid fluid>
          <UserContext.Provider value={user}>
            <Contents />
          </UserContext.Provider>
        </Grid>
        <Footer />
      </div>
    );
  }
}
