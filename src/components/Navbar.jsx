import { useState } from "react";
import logo from "../assets/logo.png";
import Button1 from "../shared/Button1";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = (
    <>
      <li>
        <a
          href="#services"
          className="bg-transparent hover:bg-transparent active:bg-transparent hover:text-main"
        >
          Services
        </a>
      </li>
      <li>
        <a
          href="#project"
          className="bg-transparent hover:bg-transparent active:bg-transparent hover:text-main"
        >
          Project
        </a>
      </li>
      <li>
        <a
          href="#process"
          className="bg-transparent hover:bg-transparent active:bg-transparent hover:text-main"
        >
          Process
        </a>
      </li>
      <li>
        <a
          href="#reviews"
          className="bg-transparent hover:bg-transparent active:bg-transparent hover:text-main"
        >
          Reviews
        </a>
      </li>
      <li>
        <a
          href="#pricing"
          className="bg-transparent hover:bg-transparent active:bg-transparent hover:text-main"
        >
          Pricing
        </a>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar sticky top-0 z-30 left-0 bg-white px-6 lg:px-10 mx-auto">
        {/* Left: Logo */}
        <div className="navbar-start">
          <img
            src={logo}
            alt="logo-img"
            className="w-24 object-cover cursor-pointer"
          />
        </div>

        {/* Center: Links for large screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-[15px]">
            {links}
          </ul>
        </div>

        {/* Right: Button for large screens */}
        <div className="navbar-end hidden lg:flex">
          <Button1
            text="Get Template"
            link="https://www.framer.com/marketplace/templates/agenium/?via=realmehedi1"
          />
        </div>

        {/* Right: Hamburger for small screens */}
        <div className="navbar-end lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn  text-2xl text-main bg-black"
          >
            {isOpen ? <HiX /> : <RxHamburgerMenu />}
          </button>

          {isOpen && (
            <ul className="absolute right-4 top-16 pb-20 bg-white shadow-lg rounded-lg p-4 w-full text-center font-medium space-y-10 z-50 transition-all duration-300 ease-in-out ">
              {links}
              <li>
                <Button1
                  text="Get Template"
                  link="https://www.framer.com/marketplace/templates/agenium/?via=realmehedi1"
                />
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
