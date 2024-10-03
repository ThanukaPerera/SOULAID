import React from "react";
import Therapy from "../../resources/Thrapy copy 2.png";
import Pills from "../../resources/Pills copy 2.png";
import Coaching from "../../resources/Coaching copy.png";
import Accupunture from "../../resources/Accupuncture copy 2.png";
import ButtonWhite from '../../components/ButtonWhite';

function OurServices() {
  return (
    <div className="bg-quaternary flex flex-col justify-center items-center">
      <h1 className="text-primary text-7xl font-barlow mt-10">Our Services</h1>

      {/* Image container */}
      <div className="flex justify-center  items-center w-full px-8 my-20 sm:flex-col">

        <div className="flex flex-col justify-center items-center gap-8 w-1/4 h-auto sm:w-3/4">
        <img  src={Therapy} alt="Therapy" />
        <p className='text-primary text-xl'>Therapy</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-8 w-1/4 h-auto sm:w-3/4">
        <img  src={Pills} alt="Pills" />
        <p className='text-primary text-xl'>Pills</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-8 w-1/4 h-auto sm:w-3/4">
        <img  src={Coaching} alt="Coaching" />
        <p className='text-primary text-xl'>Couching</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-8 w-1/4 h-auto sm:w-3/4">
        <img  src={Accupunture} alt="Accupunture" />
        <p className='text-primary text-xl'>Accupunture</p>
        </div>
        
      </div>

      <ButtonWhite title="Learn more" />
    </div>
  );
}

export default OurServices;
