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
<<<<<<< HEAD
   <>
   <Header />
   <div className="relative flex flex-col md:flex-row justify-between p-6 align-top content-center">

        {/* Form Section */}
        <div className="w-full md:w-1/2">
          <form
            className="contact-form bg-white p-6 rounded-lg shadow-md"
            onSubmit={this.handleSubmit} // Bind handleSubmit
=======
      <div className="flex flex-col md:flex-row justify-between p-6 pt-32 space-y-8 md:space-y-0 md:space-x-8  bg-gradient-to-br from-primary-color via-secondary-color to-tertiary-color rounded-lg shadow-xl">
      {/* Form Section */}
      <div
        className="w-full md:w-1/2 bg-white shadow-lg p-6 rounded-lg border border-gray-200 relative transition-transform transform "
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <form
          className="contact-form bg-white p-6 rounded-lg shadow-md"
          onSubmit={this.handleSubmit} // Bind handleSubmit
        >
          {/* Name Field */}
          <div className="contact-form-group mb-4">
            <label htmlFor="contact-name" className="block text-bg-color font-medium">
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
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-color"
            />
          </div>
    
          {/* Phone Field */}
          <div className="contact-form-group mb-4">
            <label htmlFor="contact-phone" className="block text-bg-color font-medium">
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
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-color"
            />
          </div>
    
          {/* Email Field */}
          <div className="contact-form-group mb-4">
            <label htmlFor="contact-email" className="block text-bg-color font-medium">
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
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-color"
            />
          </div>
    
          {/* Message Field */}
          <div className="contact-form-group mb-4">
            <label htmlFor="contact-message" className="block text-bg-color font-medium">
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
              className="w-full p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-primary-color"
            ></textarea>
          </div>
    
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary-color text-btn-text-color p-3 rounded-md hover:bg-secondary-color transition-all"
>>>>>>> 848b7bfdcabad5bcee5f83a2c75c368b54f75661
          >
            Submit
          </button>
        </form>
      </div>
    
      {/* Contact Info Section */}
      <div
        className="w-full mt-6 md:mt-0 p-8 bg-white shadow-lg rounded-lg border border-gray-200 relative"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <h1 className="text-3xl font-semibold text-tertiary-color mb-6">
          Contact our <span className="text-primary-color">peunique team</span>
        </h1>
        <div className="mt-4">
          <div className="flex items-start mb-6">
            <div className="contact-feature-icon text-secondary-color mr-2">✓</div>
            <div className="contact-feature-text">
              One flexible tool for your entire company to share knowledge, ship projects, and collaborate.
            </div>
          </div>
          <div className="flex items-start mb-6">
            <div className="contact-feature-icon text-secondary-color mr-2">✓</div>
            <div className="contact-feature-text">
              Enterprise features to securely manage user access and security.
            </div>
          </div>
          <div className="flex items-start mb-6">
            <div className="contact-feature-icon text-secondary-color mr-2">✓</div>
            <div className="contact-feature-text">
              Dedicated support to work with you on your setup and help you build the best plan for your company.
            </div>
          </div>
          <div className="flex items-start mb-6">
            <div className="contact-feature-icon text-secondary-color mr-2">✓</div>
            <div className="contact-feature-text">
              Reliable guidance to help you adopt and maximize new technologies.
            </div>
          </div>
          <div className="flex items-start mb-6">
            <div className="contact-feature-icon text-secondary-color mr-2">✓</div>
            <div className="contact-feature-text">
              24/7 customer support to address your queries and concerns instantly.
            </div>
          </div>
          <div className="flex items-start mb-6">
            <div className="contact-feature-icon text-secondary-color mr-2">✓</div>
            <div className="contact-feature-text">
              A committed team to help you achieve your goals with precision.
            </div>
          </div>
        </div>
    
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 pt-18">
          {/* Address Section */}
          <div className="bg-tertiary-color text-white p-6 rounded-lg shadow-lg border-2 border-primary-color">
            <h1 className="text-xl font-semibold">Address</h1>
            <p>A-43, Office No. 301 Third Floor</p>
            <p>Sector - 63, Noida Uttar Pradesh</p>
            <p>Pin-201301</p>
          </div>
    
          {/* Contact Section */}
          <div className="bg-secondary-color text-white p-6 rounded-lg shadow-lg border-2 border-tertiary-color">
            <h1 className="text-xl font-semibold">Contact</h1>
            <p>care@peunique.com</p>
            <p>7282823737</p>
          </div>
        </div>
      </div>
<<<<<<< HEAD
   </>
     
=======
    </div>
    
    
    
    
>>>>>>> 848b7bfdcabad5bcee5f83a2c75c368b54f75661
    );
  }
}

export default ContactForm;
