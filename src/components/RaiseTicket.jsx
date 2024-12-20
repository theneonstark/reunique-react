import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const RaiseTicket = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    websiteOrApp: "",
    transactionID: "",
    issueDescription: "",
  });

//   const [captchaVerified, setCaptchaVerified] = useState(false);
//   const [captchaError, setCaptchaError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

//   const handleCaptcha = (value) => {
//     setCaptchaVerified(!!value);
//     setCaptchaError(!value);
//   };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!captchaVerified) {
    //   setCaptchaError(true);
    //   return;
    // }

    // Submit form logic here
    console.log("Form submitted successfully", formData);
  };

  return (
    <div className="bg-blue-800 p-8 rounded-lg max-w-lg mx-auto mt-10 shadow-lg">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <h1 className="text-white text-3xl font-bold mb-6 text-center">Support</h1>

        {/** Input Fields */}
        {["fullName", "email", "phone", "websiteOrApp"].map((field, index) => (
          <input
            key={index}
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field
              .split(/(?=[A-Z])/)
              .join(" ")
              .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase()) + "*"}
            required
            className="w-full p-3 mb-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        ))}

        {/** Transaction ID */}
        <input
          type="text"
          name="transactionID"
          value={formData.transactionID}
          onChange={handleChange}
          placeholder="Transaction ID (If you have)"
          className="w-full p-3 mb-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />

        {/** Issue Description */}
        <textarea
          name="issueDescription"
          value={formData.issueDescription}
          onChange={handleChange}
          placeholder="Please describe your Issue"
          required
          className="w-full p-3 mb-4 rounded-md border border-gray-300 resize-none h-24 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        ></textarea>

        {/** reCAPTCHA */}
        {/* <div className="mb-4">
          <ReCAPTCHA
            sitekey="your-recaptcha-site-key"
            onChange={handleCaptcha}
          />
          {captchaError && (
            <p className="text-red-500 text-sm mt-2">
              Verification expired. Check the checkbox again.
            </p>
          )}
        </div> */}

        {/** Submit Button */}
        <button
          type="submit"
          className="bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition-all duration-200"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default RaiseTicket;
