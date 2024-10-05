import React from 'react'


function ImageInLeft(props) {
    return (

        <div className='flex sm:flex-col items-center justify-center py-32 px-10 gap-16'>
            {/* Image Section */}
            <div className='w-full '>
                <img className='w-full h-auto object-cover' src={require(`../resources/${props.image}`)} alt={props.alt} />
            </div>

            {/* Text Section */}
            <div className='flex flex-col gap-8 w-full '>
                <h1 className='text-7xl py-5 sm:text-5xl sm:text-[7vh] font-barlow'>{props.heading}</h1>
                <p className='text-lg sm:text-[2.5vh]'>{props.text}</p>
            </div>
        </div>

    )
}

export default ImageInLeft