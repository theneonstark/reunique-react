import React from "react";
 
const SupportSection = () => { 
  return ( 
    <section className="py-16 bg-gray-50"> 
      {/* Section Header */} 
      <div className="text-center mb-12"> 
        <h5 className="text-xl font-semibold text-secondary-color">SUPPORT</h5> 
        <h2 className="text-4xl font-bold text-primary-color">How can we assist you?</h2> 
      </div> 
 
      {/* Support Cards Container */} 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
        {/* Merchant Support Card */} 
        <div className="support-card animate__animated animate__fadeInUp" data-wow-delay="0.2s"> 
          <a href="merchant-support" className="block p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-secondary-color hover:text-white transition"> 
            <h4 className="text-2xl font-semibold mb-4">Merchant Support</h4> 
            <p className="supportcard-heading text-base text-gray-700"> 
              Get answers about account setup, product integration, pricing, and transactions. 
            </p> 
          </a> 
        </div> 
 
        {/* Customer Support Card */} 
        <div className="support-card animate__animated animate__fadeInUp" data-wow-delay="0.4s"> 
          <a href="customer-support" className="block p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-secondary-color hover:text-white transition"> 
            <h4 className="text-2xl font-semibold mb-4">Customer Support</h4> 
            <p className="supportcard-heading text-base text-gray-700"> 
              Resolve issues related to payments made via Peunique. 
            </p> 
          </a> 
        </div> 
 
        {/* Knowledge Hub Card */} 
        <div className="support-card animate__animated animate__fadeInUp" data-wow-delay="0.6s"> 
          <a href="knowledge-base" className="block p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-secondary-color hover:text-white transition"> 
            <h4 className="text-2xl font-semibold mb-4">Knowledge Hub</h4> 
            <p className="supportcard-heading text-base text-gray-700"> 

              Access guides to get started with Peunique efficiently. 
            </p>  
          </a> 
        </div> 
 
        {/* Nodal Officer Card */} 
        <div className="support-card animate__animated animate__fadeInUp" data-wow-delay="0.8s"> 
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg"> 
            <h4 className="text-2xl font-semibold mb-4">Nodal Officer - Grievance</h4> 
            <p className="supportcard-heading text-base text-gray-700"> 
              Email: <strong>info@peunique.com</strong> 
            </p> 
          </div> 
        </div> 
 
        {/* LEA Support Card */} 
        <div className="support-card animate__animated animate__fadeInUp" data-wow-delay="1s"> 
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg"> 
            <h4 className="text-2xl font-semibold mb-4">Nodal Officer - LEA Support</h4> 
            <p className="supportcard-heading text-base text-gray-700"> 
              Contact: <strong>info@unique.com</strong> 
            </p> 
            <p className="supportcard-heading text-base text-gray-700"> 
              Disputes: <strong>info@unique.com</strong> 
            </p> 
          </div> 
        </div> 
      </div> 
    </section> 
  ); 
}; 
 
export default SupportSection; 
 