const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Working with this team has been a game-changer. They took our scattered ideas and turned them into a cohesive brand that truly represents who we are.",
      name: "Liam",
      title: "Founder, Creative",
      company: "Founder, International, Recruitment",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "Finally, an agency that speaks our language! They understood our vision better than we did and brought it to life in ways we never imagined.",
      name: "Haris",
      title: "Sales Engineer",
      company: "Senior Sales Executive, Sales Industry Inc",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "Looking to catch big breaks, and they absolutely blew me away. From strategy to execution, every detail was spot-on and exceeded our expectations.",
      name: "Oman Vance",
      title: "Marketing Director",
      company: "",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "Our online presence went from zero to hero in no time. The team made the complex simple and delivered results that speak for themselves.",
      name: "Calvin Yates",
      title: "Co-Founder and Product Owner",
      company: "",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "Our online presence went from zero to hero in no time. The team made the complex simple and delivered results that speak for themselves.",
      name: "Jasmin Lissett",
      title: "Co-Founder and Administrator",
      company: "",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "They thank us that few their most important clients. The attention to detail, creativity, and professionalism they bring to every project is truly remarkable.",
      name: "Jasmin Lissett",
      title: "Senior Associate and Lead Business Analyst",
      company: "",
      image: "/placeholder.svg?height=60&width=60",
    },
  ];

  const videoTestimonials = [
    {
      name: "Magnus Hawthorne",
      title: "Senior Specialist",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Thaddeus Montgomery",
      title: "Senior Specialist",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
  ];

  const clientAvatars = [
    "/placeholder.svg?height=40&width=40",
    "/placeholder.svg?height=40&width=40",
    "/placeholder.svg?height=40&width=40",
    "/placeholder.svg?height=40&width=40",
    "/placeholder.svg?height=40&width=40",
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">💬</span>
          </div>
          <span className="text-sm text-gray-600 font-medium">
            Client Stories
          </span>
        </div>

        <div className="flex items-center justify-center gap-4 mb-6">
          <h2 className="text-4xl font-bold text-gray-900">Hear stories</h2>

          {/* Client Avatars */}
          <div className="flex -space-x-2">
            {clientAvatars.map((avatar, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
              >
                <img
                  src={avatar || "/placeholder.svg"}
                  alt={`Client ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <span className="text-4xl font-bold text-gray-900">
            straight from
          </span>
        </div>

        <h2 className="text-4xl font-bold text-gray-900">
          the people we helped!
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 relative">
            {/* Quote Icon */}
            <div className="text-orange-500 text-2xl font-bold mb-4">"</div>

            {/* Quote Text */}
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              {testimonial.quote}
            </p>

            {/* Client Info */}
            <div className="flex items-center gap-3">
              <img
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-gray-600">{testimonial.title}</p>
                {testimonial.company && (
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videoTestimonials.map((video, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden bg-gray-900"
          >
            <img
              src={video.thumbnail || "/placeholder.svg"}
              alt={video.name}
              className="w-full h-48 object-cover opacity-70"
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 group">
                <svg
                  className="w-6 h-6 text-gray-900 ml-1 group-hover:scale-110 transition-transform"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            {/* Video Info */}
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-semibold">{video.name}</h4>
              <p className="text-sm opacity-90">{video.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
