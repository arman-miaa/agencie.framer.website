
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi"; 
const Footer = () => {
  return (
    <div className="p-8 mt-40 md:mt-0">
      <footer className="bg-black text-white py-16 px-4 md:px-20 rounded-3xl">
   
        <div className="max-w-7xl mx-auto">
          {/* Top Section: Company Info & Navigation */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            {/* Company Info */}
            <div className="mb-8 md:mb-0 md:w-1/2 text-center w-full md:text-left">
              <h2 className="text-5xl lg:text-[106px] font-extrabold text-orange-500 mb-4">
                Agencie.co
              </h2>
              <p className="text-xl text-center md:text-left  leading-relaxed max-w-md">
                The next big thing starts here— <br /> drop us a line and let’s
                get creating!
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex justify-between md:justify-end flex-wrap md:gap-x-16 gap-y-4 text-right w-full md:w-1/2 text-[#FFA587]">
              {" "}
              {/* Adjusted gap-x for responsiveness */}
              <div className="flex flex-col space-y-2 text-left ml-4 md:ml-0">
                <a href="#" className=" ">
                  Home
                </a>
                <a href="#" className="">
                  Benefits
                </a>
                <a href="#" className="">
                  Portfolio
                </a>
                <a href="#" className="">
                  Reviews
                </a>
                <a href="#" className="">
                  About
                </a>
              </div>
              <div className="flex flex-col space-y-2 text-left mr-4 md:mr-0">
                <a href="#" className="">
                  LinkedIn
                </a>
                <a href="#" className="">
                  Facebook
                </a>
                <a href="#" className="">
                  Twitter
                </a>
                <a href="#" className="">
                  Instagram
                </a>
                <a href="#" className="">
                  Youtube
                </a>
              </div>
            </div>
          </div>

          {/* Separator Line */}
          <hr className="border-gray-700 mb-12" />

          {/* Bottom Section: Contact Info & Opening Hours */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 px-2">
            {/* Phone */}
            <div className="flex items-start text-left">
              <FiPhone className="text-orange-500 text-xl mr-3 -mt-[2px] " />
              <div>
                <p className="text-xs text-[#FFA587] uppercase font-semibold mb-1">
                  Phone
                </p>
                <a
                  href="tel:(217) 555-0134"
                  className="mt-2 hover:text-[#FFA587] hover:underline transition-colors"
                >
                  (217) 555-0134
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start text-left">
              <FiMail className="text-orange-500 text-xl mr-3 -mt-[2px] " />
              <div>
                <p className="text-xs text-[#FFA587] uppercase font-semibold mb-1">
                  Email
                </p>
                <a
                  href="mailto:agencie@email.com"
                  className="mt-2 hover:text-[#FFA587] hover:underline transition-colors"
                >
                  agencie@email.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start text-left">
              <FiMapPin className="text-orange-500 text-xl mr-3 -mt-[2px] " />
              <div>
                <p className="text-xs text-[#FFA587] uppercase font-semibold mb-1">
                  Address
                </p>
                <p className="mt-2 hover:text-[#FFA587] hover:underline cursor-pointer">
                  123 Main Street, Suite 200, Austin, TX 78701
                </p>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start text-left">
              <FiClock className="text-orange-500 text-xl mr-3 -mt-[2px] " />
              <div>
                <p className="text-xs text-[#FFA587] uppercase font-semibold mb-1">
                  Opening Hours
                </p>
                <p className=" mt-2">Mon to Sat: 9.00am - 8.30pm</p>
                <p className="">Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Separator Line */}
          <hr className="border-gray-700 mb-12" />

          {/* Copyright Section */}
          <div className="flex  justify-between items-center px-2   border-gray-800">
        
            <p className="mb-2 md:mb-0">©Template by RealMehedi</p>
            <p>Built in Framer</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
