import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Returns / Exchanges</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Shop</h5>
            <ul className="list-unstyled">
              <li><a href="#">Clothing</a></li>
              <li><a href="#">Shoes</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Sales</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Information</h5>
            <ul className="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Site Map</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Stay Connected</h5>
            <ul className="list-unstyled">
              <li>123 Street, City</li>
              <li>info@example.com</li>
              <li>+1234567890</li>
              <li>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-pinterest"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 E-Commerce. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
