import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-bg-color text-text-color">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-primary-color">PeUnique</h2>
            <p >
              PeUnique is an RBI Authorised Payment Aggregator. PeUnique Payment Gateway seamlessly integrates payment
              collection, Payouts, and exclusive B2B solutions, simplifying transactions and facilitating payment
              collection through more than 1.4 million Cash Counters across India.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-primary-color">Products</h3>
            <ul className="mt-4 space-y-2">
              <li>Online Payment Gateway</li>
              <li>eNACH</li>
              <li>Payment Gateway for MSMEs</li>
              <li>Payouts</li>
              <li>Payment Links</li>
              <li>LinkPaisa</li>
              <li>QwikForm</li>
              <li>B2B e-Collect</li>
              <li>Offline Payments</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-primary-color">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Media and Press</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-primary-color">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>FAQs</li>
              <li>Raise a Ticket</li>
            </ul>
            <h3 className="text-lg font-medium text-primary-color mt-6">Find us online</h3>
            <div className="flex space-x-4 mt-4">
              <a href="#"><img src="./assets/twitter.png" alt="Twitter" className="w-6 h-6" /></a>
              <a href="#"><img src="./assets/instagram.png" alt="Instagram" className="w-6 h-6" /></a>
              <a href="#"><img src="./assets/facebook.png" alt="Facebook" className="w-6 h-6" /></a>
              <a href="#"><img src="./assets/linkedin.png" alt="LinkedIn" className="w-6 h-6" /></a>
              <a href="#"><img src="./assets/youtube.png" alt="YouTube" className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-color text-center py-4">
        <p className="text-btn-text-color text-sm">Copyright © 2024 PeUnique. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
