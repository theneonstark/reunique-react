import React, { Component } from "react";
import Header from "../components/header";
class ContactForm extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      name: "",
      phone: "",
      email: "",
      message: "",
    };
  }

  // Handle input change
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value, // Update the specific field
    });
  };

  // Handle form submission
  handleSubmit = (e) => {
    e.preventDefault(); // Prevent form default submission behavior
    console.log("Form submitted:", this.state); // Log form data
  };

  render() {
    return (
   <>
   <Header />
   <div className="relative flex flex-col md:flex-row justify-between p-6 align-top content-center">

        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <form
            className="contact-form bg-white p-6 rounded-lg shadow-md"
            onSubmit={this.handleSubmit} // Bind handleSubmit
          >
            {/* Name Field */}
            <div className="contact-form-group mb-4">
              <label htmlFor="contact-name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={this.state.name} // Access state directly
                onChange={this.handleChange} // Bind handleChange
                placeholder="Enter your name"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Phone Field */}
            <div className="contact-form-group mb-4">
              <label htmlFor="contact-phone" className="block text-gray-700">
                Phone no
              </label>
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                placeholder="Enter your phone number"
                pattern="[0-9]{10}"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Email Field */}
            <div className="contact-form-group mb-4">
              <label htmlFor="contact-email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Enter your email"
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Message Field */}
            <div className="contact-form-group mb-4">
              <label htmlFor="contact-message" className="block text-gray-700">
                How Can We Help You?
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                placeholder="Write your message here"
                rows="5"
                required
                className="w-full p-2 border border-gray-300 rounded-md resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-3xl font-semibold">
            Contact our <span className="text-blue-500">peunique team</span>
          </h1>
          <div className="mt-4">
            <div className="flex items-start mb-4">
              <div className="contact-feature-icon text-green-500 mr-2">✓</div>
              <div className="contact-feature-text">
                One flexible tool for your entire company to share knowledge, ship projects, and collaborate.
              </div>
            </div>
            <div className="flex items-start mb-4">
              <div className="contact-feature-icon text-green-500 mr-2">✓</div>
              <div className="contact-feature-text">
                Enterprise features to securely manage user access and security.
              </div>
            </div>
            <div className="flex items-start mb-4">
              <div className="contact-feature-icon text-green-500 mr-2">✓</div>
              <div className="contact-feature-text">
                Dedicated support to work with you on your setup and help you build the best plan for your company.
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-between">
            <div className="first">
              <h1 className="text-xl font-semibold">Address</h1>
              <p>A-43, Office No. 301 Third Floor</p>
              <p>Sector - 63, Noida Uttar Pradesh</p>
              <p>Pin-201301</p>
            </div>
            <div className="contact">
              <h1 className="text-xl font-semibold">Contact</h1>
              <p>care@peunique.com</p>
              <p>7282823737</p>
            </div>
          </div>
        </div>
      </div>
   </>
     
    );
  }
}

export default ContactForm;
