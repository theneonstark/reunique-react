import React from "react";
 
const SupportSection = () => { 
  return ( 
<section className="py-16 pt-32 bg-gray-50 bg-gradient-to-br from-primary-color via-secondary-color to-tertiary-color rounded-lg shadow-xl"> {/* Adjusted padding-top */}
  {/* Section Header */}
  <div className="text-center mb-12">
    <h1 className="text-6xl font-semibold text-secondary-color pb-10">SUPPORT</h1>
    <h2 className="text-3xl font-bold text-primary-color">How can we assist you?</h2>
  </div>

  {/* Support Cards Container */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 ">
    {/* Merchant Support Card */}
    <div className="block p-8 bg-white border border-gray-200 rounded-xl shadow-lg hover:bg-secondary-color hover:text-white transition-all transform hover:scale-105 hover:shadow-2xl">
      <a href="merchant-support">
        <h4 className="text-2xl font-semibold mb-4">Merchant Support</h4>
        <p className="text-base text-gray-700">
          Get answers about account setup, product integration, pricing, and transactions.
        </p>
      </a>
    </div>

    {/* Customer Support Card */}
    <div className="block p-8 bg-white border border-gray-200 rounded-xl shadow-lg hover:bg-secondary-color hover:text-white transition-all transform hover:scale-105 hover:shadow-2xl">
      <a href="customer-support">
        <h4 className="text-2xl font-semibold mb-4">Customer Support</h4>
        <p className="text-base text-gray-700">
          Resolve issues related to payments made via Peunique.
        </p>
      </a>
    </div>

    {/* Knowledge Hub Card */}
    <div className="block p-8 bg-white border border-gray-200 rounded-xl shadow-lg hover:bg-secondary-color hover:text-white transition-all transform hover:scale-105 hover:shadow-2xl">
      <a href="knowledge-base">
        <h4 className="text-2xl font-semibold mb-4">Knowledge Hub</h4>
        <p className="text-base text-gray-700">
          Access guides to get started with Peunique efficiently.
        </p>
      </a>
    </div>

    {/* Nodal Officer Card */}
    <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-lg hover:bg-secondary-color hover:text-white transition-all transform hover:scale-105 hover:shadow-2xl">
      <h4 className="text-2xl font-semibold mb-4">Nodal Officer - Grievance</h4>
      <p className="text-base text-gray-700">
        Email: <strong>info@peunique.com</strong>
      </p>
    </div>

    {/* LEA Support Card */}
    <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-lg hover:bg-secondary-color hover:text-white transition-all transform hover:scale-105 hover:shadow-2xl">
      <h4 className="text-2xl font-semibold mb-4">Nodal Officer - LEA Support</h4>
      <p className="text-base text-gray-700">
        Contact: <strong>info@unique.com</strong>
      </p>
      <p className="text-base text-gray-700">
        Disputes: <strong>info@unique.com</strong>
      </p>
    </div>
  </div>
</section>



  ); 
}; 
 
export default SupportSection; 
 