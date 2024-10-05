import React from 'react'
import { Link } from 'react-router-dom';

function RateBox(prop) {
    return (
        <div className='flex flex-col justify-center items-center gap-30'>
            <table className='w-9/12 table-fixed'>
                <tr>
                    <td className='px-32 py-16 font-barlow text-5xl'>{prop.heading}</td>
                    <td className=' px-4 py-2'>
                        <div className="flex flex-col  gap-5">
                            {prop.text}
                            <div className="flex gap-3">
                                <p>{prop.duration} mins |</p>
                                <p> Rs {prop.price}/= | </p>
                                <Link to="/get-started" className="underline">
                                        Get Started
                                    </Link>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default RateBox


