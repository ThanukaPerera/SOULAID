import React from 'react'

function ImageInRight(prop) {
  return (
    <div className='flex sm:flex-col items-center justify-center py-32 px-10 gap-16'>
      
      {/* Text Section */}
      <div className='flex flex-col gap-8 w-full '>
        <h1 className='text-7xl py-5 sm:text-5xl sm:text-[7vh] font-barlow'>{prop.heading}</h1>
        <p className='text-xl sm:text-[2.5vh]'>{prop.text}</p>
      </div>

      {/* Image Section */}
      <div className='w-full sm:hidden '>
        <img className='w-full h-auto object-cover'  src={require(`../resources/${prop.image}`)} alt={prop.alt} />
      </div>

    </div>
  )
}

export default ImageInRight