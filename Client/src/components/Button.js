import React from 'react'

function Button({ title }) {
  return (
    <div className='my-12'>
      <button className="text-primary text-xl bg-quaternary px-28 py-5 hover:bg-opacity-75 cursor-pointer sm:px-10 sm:text-[2.5vh] sm:py-3">
        {title}
      </button>
    </div>
  )
}

export default Button
