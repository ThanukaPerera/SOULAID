import React from 'react';
import HeroSectionImage from '../../resources/pexels-silverkblack-23496497.jpg';

function HeroSection() {
  return (
    <div className="relative bg-cover bg-center min-h-screen flex flex-col justify-end" style={{ backgroundImage: `url(${HeroSectionImage})` }}>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-left text-white p-10 mb-10 sm:p-8"> {/* Added margin-bottom */}

        <h2 className="font-barlow text-7xl mb-4 sm:text-[7vh]">Welcome to SOULAID – Your Partner in Mental Wellness</h2>
        <p className="text-xl sm:text-[2.5vh]">
          Personalized Care, Wherever You Are. Access professional mental health support in-person or from the comfort of your own home. <br/>SOULAID is here to meet your needs, on your terms.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
