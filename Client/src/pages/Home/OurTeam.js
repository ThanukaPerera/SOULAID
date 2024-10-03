import React from 'react'
import image1 from '../../resources/pexels-shkrabaanthony-7579119.jpg'
import Button from '../../components/Button'

function OurTeam() {
  return (
    <div className='flex flex-col justify-center items-center my-20'>
        <h1 className='font-barlow text-7xl mb-16'>Meet Our Team</h1>
        <div className='flex gap-10 justify-center items-center mx-16 sm:flex-col '>
            <div className='flex flex-col w-1/4 gap-5 items-center justify-center sm:w-2/3'>
                <img src={image1} alt='image1'/>
                <p className='text-xl'>Dr. Null A </p>
            </div>
            <div className='flex flex-col w-1/4 gap-5 items-center justify-center sm:w-2/3'>
                <img src={image1} alt='image1'/>
                <p className='text-xl'>Dr. Null A </p>
            </div>
            <div className='flex flex-col w-1/4 gap-5 items-center justify-center sm:w-2/3'>
                <img src={image1} alt='image1'/>
                <p className='text-xl'>Dr. Null A </p>
            </div>
            <div className='flex flex-col w-1/4 gap-5 items-center justify-center sm:w-2/3'>
                <img src={image1} alt='image1'/>
                <p className='text-xl'>Dr. Null A </p>
            </div>
        </div>

        <Button  title='Learn more'/>
    </div>
  )
}

export default OurTeam