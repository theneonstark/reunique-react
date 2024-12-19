import react from 'react';
import Footer from '../footer';
import AboutUsHeading from './about-heading';

const AboutUs = ()=>{
    return(
        <>
        <div className="about-container h-screen bg-gradient-to-br from-primary-color to-secondary-color border border-gray-500 rounded-2xl shadow-lg">
         <AboutUsHeading/>
        </div>

    
        </>
    )
}

export default AboutUs;

