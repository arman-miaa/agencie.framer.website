const About = () => {
  const teamMembers = [
    {
      name: "Zephyr Callahan",
      role: "Creative Director",
      badge: "CREATIVE WIZARD",
      badgeColor: "bg-orange-500",
      image: "/placeholder.svg?height=300&width=250",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Thane Vesper",
      role: "Web Development Manager",
      badge: "STRATEGY GENIUS",
      badgeColor: "bg-orange-500",
      image: "/placeholder.svg?height=300&width=250",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Leander Frost",
      role: "Lead Designer",
      badge: "TECH ALCHEMIST",
      badgeColor: "bg-orange-500",
      image: "/placeholder.svg?height=300&width=250",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      {/* Header Section */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">A</span>
          </div>
          <span className="text-sm text-gray-600 font-medium">About us</span>
        </div>

        <div className="max-w-3xl">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We started as a small group of passionate creators who believed that
            great ideas deserve bold execution. What began over coffee-fueled
            brainstorming sessions has grown into a thriving digital agency
            dedicated to helping brands stand out.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Our mission is simple:{" "}
            <span className="font-semibold">
              to craft creative, impactful solutions that drive results.
            </span>
            With a vision{" "}
            <span className="font-semibold">
              to empower businesses to shine in a crowded world
            </span>
            , we combine strategy, design, and a touch of magic{" "}
            <span className="font-semibold">to bring your ideas to life.</span>
            Let's make something amazing together!
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Team Members */}
        {teamMembers.map((member, index) => (
          <div key={index} className="relative">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              {/* Badge */}
              <div
                className={`${member.badgeColor} text-white text-xs font-bold px-3 py-1 inline-block m-4 rounded`}
              >
                {member.badge}
              </div>

              {/* Image */}
              <div className="px-4 pb-4">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            {/* Member Info */}
            <div className="mt-4">
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-gray-600 text-sm mb-3">{member.role}</p>

              {/* Social Icons */}
              <div className="flex gap-2">
                <a
                  href={member.social.linkedin}
                  className="w-8 h-8 bg-black rounded flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <span className="text-white text-xs">in</span>
                </a>
                <a
                  href={member.social.twitter}
                  className="w-8 h-8 bg-black rounded flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <span className="text-white text-xs">X</span>
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Join Our Team Card */}
        <div className="bg-orange-500 rounded-lg p-6 text-white flex flex-col justify-between min-h-[400px]">
          <div>
            <h3 className="text-2xl font-bold mb-4">You can be here</h3>
            <p className="text-orange-100 leading-relaxed">
              We value curiosity, creativity, and a can-do attitude. Oh, and
              coffee— lots of coffee. Come join our team that celebrates your
              unique skills and helps you unlock your full potential.
            </p>
          </div>

          <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors mt-6">
            Join Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
