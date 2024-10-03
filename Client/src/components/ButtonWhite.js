import React from 'react'

function ButtonWhite({title}) {
  return (
    <div className='py-10'>
        <p className="bg-primary text-xl text-quaternary px-28 py-5 hover:bg-opacity-75 cursor-pointer sm:px-10 sm:text-[2.5vh] sm:py-3">
          {title}
        </p>
    </div>
  )
}

export default ButtonWhite
