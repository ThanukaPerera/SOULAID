import React from 'react'
// import Therapy from "../../resources/Thrapy copy 2.png";
import Pills from "../../resources/Pills copy 2.png";
// import Coaching from "../../resources/Coaching copy.png";
// import Accupunture from "../../resources/Accupuncture copy 2.png";

function OurServices() {
  return (
    // <div className='flex flex-col gap-30 justify-center items-center'>
    //     <div className='flex flex-col justify-center items-center'>
    //         <img src={Therapy} alt="Therapy" className='text-black'/>
    //     </div>
        
    // </div>
    <div className="flex flex-col justify-center items-center gap-8 w-1/4 h-auto sm:w-3/4 bg-gray-500">
    <img src={Pills} alt="Therapy" />
    <p className='text-primary text-xl'>Therapy</p>
  </div>
  
  )
}

export default OurServices