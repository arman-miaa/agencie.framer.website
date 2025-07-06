import logo from "../assets/logo.png"
import Button1 from "../shared/Button1";

const Navbar = () => {

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
      <div className="navbar sticky top-0 z-30 left-0 bg-white   px-10 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content font-medium bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          {/* logo */}
          <div>
            <img
              src={logo}
              alt="logo-img"
              className="w-25 object-cover cursor-pointer"
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  font-medium text-[15px] ">{links}</ul>
        </div>
        <div className="navbar-end">
          <Button1
            text="Get Template"
            link="https://www.framer.com/marketplace/templates/agenium/?via=realmehedi1"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar