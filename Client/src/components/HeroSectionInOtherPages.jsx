import React from 'react'

function HeroSectionInOtherPages({ImageName}) {
  // Dynamically import the image using require
  
  console.log({ImageName});
  const backgroundImage = require(`../resources/family.jpg`).default;


  // function getImageURL(name) {
  //      return new URL(`../resources/${name}`, import.meta.url).href;
  //    }
  //    const image = getImageURL({ImageName});

  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex flex-col justify-end"
      style={{ backgroundImage: `url(../resources/family.jpg)` }}  // Corrected backgroundImage usage
    >

      {/* <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-left text-white p-10 mb-10 sm:p-8">
        <h2 className="font-barlow text-7xl mb-4 sm:text-[7vh]">
          Welcome to SOULAID – Your Partner in Mental Wellness
        </h2>
        <p className="text-xl sm:text-[2.5vh]">
          Personalized Care, Wherever You Are. Access professional mental health support in-person or from the comfort of your own home. <br />
          SOULAID is here to meet your needs, on your terms.
        </p>
      </div> */}

      <img src={backgroundImage} alt="fucj" />
    </div>
  )

  // function getImageURL(name) {
  //   return new URL('../resources/${name}',import.meta.url).href
  // }
  // 
  

}

export default HeroSectionInOtherPages;
