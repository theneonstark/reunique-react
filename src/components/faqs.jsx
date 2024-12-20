import React, { useState } from 'react';

// FAQ Data
const faqData = [
    {
        question: "What are the benefits of using PeUnique?",
        answer: "With PeUnique you get unmatched benefits that suit all your needs. Some benefits are listed below:\n\n" +
               "1. Maximum Online & Offline Modes\n" +
               "2. Top Notch Security\n" +
               "3. Advanced API\n" +
               "4. Easy Integration\n" +
               "5. One Integration for Online/Offline Payments\n" +
               "6. Best in class Support\n" +
               "7. One of the Highest Success Rates"
    }, {
        question: "Is   PeUnique free or are there any charges? What are the charges taken by   PeUnique for various services?",
        answer:"  PeUnique charges according to industry standards for its services.\n\n" +
            "For PG- It depends on the merchant’s industry and business volumes.\n\n" +
            "For Subscription- Nominal fee for mandates and transactions as per industry norms and as agreed with the merchant\n\n" +
            "For Paylink- Nominal fee, as agreed with the merchant.\n\n" +
            "For Payout- Nominal fee, as agreed with the merchant."
    },{
        question: "How do I signup for   PeUnique?",
        answer: "To Signup, visit https://  PeUnique.in/sign-up/, fill in your details and our team will get in touch with you at the earliest."
    },{
        question: "What all card information does   PeUnique store?",
        answer: "  PeUnique stores only the last four digits of a card, which is the industry standard."
    },{
        question: "How will you guarantee my data privacy?",
        answer: "  PeUnique uses the HTTPS extension that protects the integrity and confidentiality of data for secure connections. We are also PCI-DSS certified and adhere to RBI guidelines of data privacy."
    },{
        question: "What all documents are required for signing up with   PeUnique?",
        answer: "It varies with the constitution of the firm. Broadly, documents for business proofs, signatory individual’s proofs, bank statements and cancelled cheques along with GST registration."
    },
    {
        question: "Do you have a Sandbox where I can test the integration before going live with   PeUnique?",
        answer: "Yes,   PeUnique has a Sandbox where one can test the integration before going live with   PeUnique."
    },
    {
        question: "How can I contact   PeUnique?",
        answer: "For sales enquiries signup with your details at https://  PeUnique.com/sign-up/ and our Sales Team will get in touch with you."
    },
    {
        question: "Where do I seek support from   PeUnique?",
        answer: "For support, write to us at support@  PeUnique or call us at 7282823737."
    }
    
    
    // other FAQ items
];

// Function to replace \n with <br /> tags
const formatAnswer = (answer) => {
    return answer.replace(/\n/g, "<br />");
};

// FAQ Item Component
const FAQItem = ({ faq, isOpen, onToggle }) => (
    <div
        style={{
            borderBottom: "1px solid #ccc",
            marginBottom: "10px",
            paddingBottom: "10px",
        }}
    >
        <div
            onClick={onToggle}
            style={{
                padding : "10px",
                fontSize: "18px",
                fontWeight: "bold",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
            }}
        >
            <span>{faq.question}</span>
            <span>{isOpen ? "-" : "+"}</span>
        </div>
        {isOpen && (
            <div style={{ marginTop: "10px", color: "#555" }}>
                {/* Using dangerouslySetInnerHTML to display formatted text */}
                <p
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{ __html: formatAnswer(faq.answer) }}
                />
            </div>
        )}
    </div>
);

// Main FAQs Component
const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div style={{ padding: "80px", fontFamily: "Arial, sans-serif" }}>
            <div className="header-container bg-gradient-to-r from-gray-100 to-gray-200 py-24 px-5 text-center mb-10">
    <h1 className="text-4xl font-bold text-gray-800 mb-5">
        Frequently Asked Questions
    </h1>
    <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed text-lg">
          PeUnique is a rapidly growing FinTech company that has developed the World's First API Driven Unified Payment Platform.   PeUnique has its headquarters in Noida, with one corporate office in Noida and seven other regional offices.   PeUnique's payments and collection application suite 
          {/* {} white-labelled to multiple public and private banks, including  PayU, SBM, YES BANK, BANKIT & ICIC Bank – has already processed more than INR 46.3 Billion, a figure that will grow exponentially over the next several months. */}
    </p>
</div>

            <div>
                {faqData.map((faq, index) => (
                    <FAQItem
                        key={index}
                        faq={faq}
                        isOpen={openIndex === index}
                        onToggle={() => toggleFAQ(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQs;
