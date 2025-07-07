import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className=" bg-[#eff1f6a4] p-2 rounded-2xl mx-auto mt-52 px-4 ">
      {/* Orange Section */}
      <section className="relative bg-orange-600   pb-80  pt-10 md:pl-20 xl:pl-36 2xl:pl-50 flex justify-center md:justify-start rounded-3xl md:w-5/8">
        <div className="   ">
          {/* Left Content */}
          <div className="text-left pr-16   relative z-10">
            <h2 className="text-white text-4xl   font-bold leading-tight">
              Need a custom quote?
            </h2>
            <p className="text-white text-lg md:text-xl text-center md:text-left leading-relaxed opacity-90">
              Don’t let your ideas sit idle—slide <br /> into our inbox and
              let’s make magic!
            </p>
          </div>
        </div>
      {/* Form Section */}
     <ContactForm/>
      </section>

    </div>
  );
};

export default Contact;
