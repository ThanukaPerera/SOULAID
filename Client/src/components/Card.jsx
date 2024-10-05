import React from 'react'


function Card(props) {
    return (
        <div className='flex flex-col w-1/4 gap-5 items-center justify-center sm:w-2/3'>
            <img src={require(`../resources/${props.image}`)} alt={props.alt} />
            <p className='text-xl'>{props.name}</p>
        </div>
    )
}

export default Card

