import React from 'react'
import SafeSpaceImage from '../../resources/pexels-cedric-fauntleroy-4266939.jpg'

function SafeSpace() {
  return (
    <div className='flex sm:flex-col items-center justify-center py-32 px-10 gap-16'>
      
      {/* Image Section */}
      <div className='w-full hidden sm:block '>
        <img className='w-full h-auto object-cover' src={SafeSpaceImage} alt='SafeSpace' />
      </div>

      {/* Text Section */}
      <div className='flex flex-col gap-8 w-full '>
        <h1 className='text-7xl py-5 sm:text-5xl sm:text-[7vh] font-barlow'>Providing you with a safe space to relax</h1>
        <p className='text-xl sm:text-[2.5vh]'>
          All your appointments will take place in our soothing office environment with fully private rooms,
          complimentary tea and water, and individualized care.
        </p>
      </div>

      {/* Image Section */}
      <div className='w-full sm:hidden '>
        <img className='w-full h-auto object-cover' src={SafeSpaceImage} alt='SafeSpace' />
      </div>

    </div>
  )
}

export default SafeSpace
