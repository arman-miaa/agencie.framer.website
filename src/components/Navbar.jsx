import logo from "../assets/logo.png"
import Button1 from "../shared/Button1";

const Navbar = () => {

    const links = <>
    <li className="hover:text-main hover:bg-transparent"><a href="#">Services</a></li>
    <li className="hover:text-main hover:bg-transparent"><a href="#">Project</a></li>
    <li className="hover:text-main hover:bg-transparent"><a href="#">Process</a></li>
    <li className="hover:text-main hover:bg-transparent"><a href="#">Reviews</a></li>
    <li className="hover:text-main hover:bg-transparent"><a href="#">Pricing</a></li>
  </>
  

  return (
    <div>
      <div className="navbar   px-20 mx-auto">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          {/* logo */}
          <div>
            <img
              src={logo}
              alt="logo-img"
              className="w-24 object-cover cursor-pointer"
            />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Button1
            text="Get Template"
            link="https://www.framer.com/marketplace/templates/agenium/?via=realmehedi1"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar