import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Home.css";

function Header() {
  const menuItems = ["About", "Services", "Team", "Blog", "Contact"];

  const [ham, setHam] = useState(false);
  const [hamclose, setHamClose] = useState(false);
  const slider = () => {
    if (ham) {
      document.getElementById("hamburger").classList.add("my-slide");
      document.getElementById("hamburger").classList.remove("my-slide-reverse");
      setHam(false);
    } else {
      document.getElementById("hamburger").classList.add("my-slide-reverse");
      document.getElementById("hamburger").classList.remove("my-slide");

      setHam(true);
    }
  };

  const slider_reverse = () => {
    if (hamclose) {
      document.getElementById("hamburger").classList.remove("my-slide");
      document.getElementById("hamburger").classList.add("my-slide-reverse");
      setHamClose(false);
    } else {
      document.getElementById("hamburger").classList.remove("my-slide-reverse");
      document.getElementById("hamburger").classList.add("my-slide");
      setHamClose(true);
    }
  };
  return (
    <header className="flex justify-between items-center py-3 px-3 bg-transparent">
      {" "}
      <div className="flex items-center">
        <div className="hidden sm:flex">
          {/* Hamburger Icon for Mobile */}
          <button className="mr-6" onClick={() => slider()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div
          className="flex-col  bg-primary fixed top-0 left-0 w-64 h-full hidden"
          id="hamburger"
        >
          <button className="text-right p-4" onClick={() => slider_reverse()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {/*side panel*/}

          {menuItems.map((item, index) => (
            <Link
              to={`/${item.toLowerCase()}`}
              className="text-quaternary  flex justify-center py-5   hover:underline cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </div>

        <Link to="/">
          <h1 className="font-barlow text-4xl text- ">SOULAID</h1>
        </Link>

        <nav className="px-8 sm:hidden">
          <ul className="flex">
            {menuItems.map((item, index) => (
              <li key={index} className="mx-4">
                {" "}
                {/* Use unique key for each item */}
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-quaternary text-[2vh] font-thin hover:underline cursor-pointer"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-8">
        <Link
          to="/login"
          className="text-quaternary   hover:underline  cursor-pointer"
        >
          Login
        </Link>
        <p className="text-quaternary text-[2vh] bg-secondary p-3  hover:bg-opacity-75 cursor-pointer ">
          GET STARTED
        </p>
      </div>
    </header>
  );
}

export default Header;
