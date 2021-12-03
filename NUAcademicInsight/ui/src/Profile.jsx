import React from 'react';
import {
  Button,
} from 'react-bootstrap';

export default class Profile extends React.Component {
  constructor() {
    super();
    this.results = '';
  }

  getParameterByName(name, url) {
    let newurl = url;
    if (!url) {
      newurl = window.location.href;
    }
    const newname = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp(`[?&]${newname}(=([^&#]*)|&|#|$)`);
    this.results = regex.exec(newurl);
    const theresults = this.results;
    if (!theresults) return null;
    if (!theresults[2]) return '';
    return decodeURIComponent(theresults[2].replace(/\+/g, ' '));
  }

  render() {
    const firstname = this.getParameterByName('firstname');
    const lastname = this.getParameterByName('lastname');
    const email = this.getParameterByName('email');
    return (
      <div className="text-center">
        <h1>Profile</h1>
        <div>
          <h4>
            {`Name: ${firstname} ${lastname}`}
          </h4>
          <h4>{`Email: ${email}`}</h4>
        </div>
      </div>
    );
  }
}
