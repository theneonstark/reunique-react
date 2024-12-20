import React, { useState } from "react";

// Import images
import payment1 from "../components/svg/payment1.png";
import payment2 from "../components/svg/payment2.png";
import payment3 from "../components/svg/payment3.png";

// ProductSuiteCard Component
const ProductSuiteCard = ({ image, heading, para }) => {
  return (
    <div className="flex flex-col items-center justify-start text-center bg-white border rounded-lg p-6 shadow-lg w-full md:w-1/4 transition-transform transform hover:scale-105 hover:shadow-xl">
      <img
        src={image || "/path/to/default-image.png"}
        alt={`Image of ${heading}`}
        className="w-16 h-16 md:w-20 md:h-20 mb-4"
        aria-label={`Visual representation of ${heading}`}
      />
      <h2 className="text-xl font-semibold mb-2">
        {heading || "Default Heading"}
      </h2>
      <p className="text-gray-600">
        {para || "Default description for this card."}
      </p>
    </div>
  );
};

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const productSuites = [
    {
      image: payment1,
      heading: "Team Engagement",
      para: "In PeUnique, we are more focused on Team Engagement activities to foster stronger relationships among employees, leading to improved communication and collaboration. Such events also enhance creativity, productivity, and overall team cohesion.",
    },
    {
      image: payment2,
      heading: "Mandatory Leaves",
      para: "We always promote employee well-being by offering them a benefit of Mandatory Leaves which will reduce burnout, and foster a healthier work-life balance. It encourages productivity by providing necessary breaks and ensuring employees return refreshed and motivated. Additionally, it enhances team collaboration and morale.",
    },
    {
      image: payment3,
      heading: "Skill Enhancement",
      para: "Our Skill Enhancement program offers employees the opportunity to continuously develop and improve their professional abilities. Elevate your skills, boost your confidence, and stay ahead in your career with our comprehensive training and development opportunities. Unlock your full potential and thrive in your role with Skill Enhancement at PeUnique.",
    },
  ];

  const jobOpenings = [
    { title: "Software Engineer", department: "Engineering" },
    { title: "Product Manager", department: "Product" },
    { title: "UX/UI Designer", department: "Design" },
    { title: "HR Manager", department: "Human Resources" },
    { title: "Marketing Specialist", department: "Marketing" },
  ];

  // Filter job openings based on the search term
  const filteredJobs = jobOpenings.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <React.Fragment>
<div className="bg-gradient-to-r from-gray-800 to-gray-900 w-full mt-4 sm:mt-[10%]">
<div className="container mx-auto p-6 md:p-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Careers</h1>
          <p className="text-lg text-white mb-8">
            At PeUnique, we're always looking for talented individuals to join
            our team. We believe in building a strong, diverse, and inclusive
            workforce that values diversity and inclusion.
          </p>
        </div>
      </div>
       {/* Product Suite Cards */}
      <div className="flex flex-wrap justify-center gap-6 p-4 md:p-8">
        {productSuites.map((product, index) => (
          <ProductSuiteCard
            key={index}
            image={product.image}
            heading={product.heading}
            para={product.para}
          />
        ))}
      </div>
      {/* Job Search Section */}
      <div className="container mx-auto p-6 md:p-12">
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search for a job..."
            className="p-3 w-full md:w-1/2 border rounded-lg shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-center text-white">Current Job Openings</h2>

        {/* Job List */}
        <div className="flex flex-wrap justify-center gap-6 p-4 md:p-8">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-start text-center bg-white border rounded-lg p-6 shadow-lg w-full md:w-1/4"
              >
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-sm text-gray-600">{job.department}</p>
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Apply Now
                </button>
              </div>
            ))
          ) : (
            <p className="text-black text-lg">No job openings match your search.</p>
          )}
        </div>
      </div>
   
    </React.Fragment>
  );
}
