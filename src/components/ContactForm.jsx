

const ContactForm = () => {
  return (
    <>
      <div
        className="bg-black p-6   rounded-2xl shadow-xl w-full mx-4 md:max-w-md md:mx-auto 
                  z-20  absolute -bottom-40  md:-right-20 md:bottom-9
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
    </>
  );
}

export default ContactForm