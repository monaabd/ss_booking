import React, { Component } from 'react';
import '../css/App.css';


class Footer extends Component {
  render() {
      return (
<footer className="footer-distributed">
    <div className="footer-left">
        <h3>Olssons fordon AB</h3>
        <p class="footer-links">
            <a href="#">Home</a> &nbsp; &nbsp;
            <a href="#">Vehicles</a>
        </p>
        <p className="footer-company-name">Olssons fordon AB &copy; 2017</p>
    </div>
    <div className="footer-center">
        <div>
            <i className="fa fa-map-marker"></i>
            <p><span>21 Revolution Street</span> Paris, France</p>
        </div>
        <div>
            <i className="fa fa-phone"></i>
            <p>+1 555 123456</p>
        </div>
        <div>
            <i className="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">support@company.com</a></p>
        </div>
    </div>
    <div className="footer-right">
        <p className="footer-company-about">
            <span>About the company</span> Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>
    </div>
</footer>
    );
  }
}

export default Footer;
