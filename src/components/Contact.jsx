const Contact = () => {
  return (
    <div className="relative bg-[#eff1f6a4] p-2 rounded-2xl mx-auto mt-52 px-4 ">
      {/* Orange Section */}
      <section className=" bg-orange-500  pb-30 md:pb-80 pt-10 flex justify-center rounded-3xl md:w-5/8">
        <div className="flex flex-col lg:flex-row   gap-12">
          {/* Left Content */}
          <div className="text-left pr-16   relative z-10">
            <h2 className="text-white text-4xl  font-bold leading-tight">
              Need a custom quote?
            </h2>
            <p className="text-white text-lg md:text-xl leading-relaxed opacity-90">
              Don’t let your ideas sit idle—slide <br /> into our inbox and
              let’s make magic!
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div
        className="bg-black p-6  rounded-2xl shadow-xl w-full max-w-md mx-auto 
                  -mt-20 z-20 relative lg:absolute lg:top-81 lg:left-180 lg:-translate-y-1/2 
                  lg:translate-x-1/4 xl:translate-x-1/3"
      >
        <form className="space-y-4">
          <div>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full   bg-gray-900  text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 "
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="w-full  bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 "
            />
            <input
              type="tel"
              id="phone"
              placeholder="Phone"
              className="w-full  bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 "
            />
          </div>

          <input
            type="text"
            id="subject"
            placeholder="Enter Subject"
            className="w-full  bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 "
          />

          <input
            type="text"
            id="budget"
            placeholder="Your Budget (USD)"
            className="w-full  bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 "
          />

          <textarea
            id="message"
            placeholder="Enter your Message"
            rows={5}
            className="w-full  bg-gray-900 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500  resize-y"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-orange-500 rounded-full text-white font-bold py-3  hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
