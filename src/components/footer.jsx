import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-bg-color text-text-color">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-primary-color">PeUnique</h2>
            <p className="text-sm leading-relaxed ">
              PeUnique is an RBI Authorised Payment Aggregator. PeUnique Payment Gateway seamlessly integrates payment
              collection, Payouts, and exclusive B2B solutions, simplifying transactions and facilitating payment
              collection through more than 1.4 million Cash Counters across India.
            </p>
          </div>

          {/* Products Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-color">Products</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-primary-color transition-all">Online Payment Gateway</li>
              <li className="hover:text-primary-color transition-all">eNACH</li>
              <li className="hover:text-primary-color transition-all">Payment Gateway for MSMEs</li>
              <li className="hover:text-primary-color transition-all">Payouts</li>
              <li className="hover:text-primary-color transition-all">Payment Links</li>
              <li className="hover:text-primary-color transition-all">LinkPaisa</li>
              <li className="hover:text-primary-color transition-all">QwikForm</li>
              <li className="hover:text-primary-color transition-all">B2B e-Collect</li>
              <li className="hover:text-primary-color transition-all">Offline Payments</li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-color">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-primary-color transition-all">About Us</li>
              <li className="hover:text-primary-color transition-all">Contact Us</li>
              <li className="hover:text-primary-color transition-all"><Link to="/careers">Careers</Link></li>
              <li className="hover:text-primary-color transition-all">Media and Press</li>
              <li className="hover:text-primary-color transition-all">Pricing</li>
            </ul>
          </div>

          {/* Support & Social Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-primary-color">Support</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="hover:text-primary-color transition-all"><Link to ="/faqs">FAQs </Link></li>
                <li className="hover:text-primary-color transition-all"><Link to ="/raiseTicket">Raise a Ticket </Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary-color">Find us online</h3>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="transition-transform transform hover:scale-110">
                  <img src="./assets/twitter.png" alt="Twitter" className="w-6 h-6" />
                </a>
                <a href="#" className="transition-transform transform hover:scale-110">
                  <img src="./assets/instagram.png" alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="#" className="transition-transform transform hover:scale-110">
                  <img src="./assets/facebook.png" alt="Facebook" className="w-6 h-6" />
                </a>
                <a href="#" className="transition-transform transform hover:scale-110">
                  <img src="./assets/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
                </a>
                <a href="#" className="transition-transform transform hover:scale-110">
                  <img src="./assets/youtube.png" alt="YouTube" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-primary-color text-center py-4">
        <p className="text-btn-text-color text-sm">Copyright © 2024 PeUnique. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
