import React from 'react'
import { Link } from "react-router-dom";


function Footer() {
    const menuItems = ["About", "Services", "Team","Our Approach", "Blog", "Get Started"];
    return (

        <div className="m-16 flex items-center justify-start gap-16 mb-32">
            <div className="flex flex-col">
                <h1 className="font-barlow text-4xl mb-8">Stay in touch</h1>
                <p className="text-xl">Made with React</p>
            </div>
            <div className="flex flex-col">
                <h1 className="font-barlow text-4xl mb-8">Questions?</h1>
                <p className="text-xl">Contact us</p>
            </div>

            <div
                className="flex-col bg-primary w-64 h-full">
                {menuItems.map((item, index) => (
                    <Link
                        to={`/${item.toLowerCase()}`}
                        className="text-quaternary  flex justify-start py-5   hover:underline cursor-pointer"
                    >
                        {item}
                    </Link>
                ))}
            </div>

        </div>

    )
}

export default Footer

