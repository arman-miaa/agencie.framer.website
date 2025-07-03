const Answers = () => {
  const faqData = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a comprehensive range of digital services including web design, web development, mobile app development, digital marketing, SEO optimization, branding, and UI/UX design to help your business grow online.",
    },
    {
      question: "How long does it take to design a website?",
      answer:
        "The timeline for website design typically ranges from 2-8 weeks depending on the complexity, features required, and client feedback cycles. Simple websites can be completed in 2-3 weeks, while complex e-commerce or custom applications may take 6-8 weeks.",
    },
    {
      question: "Do you work with small businesses or just big brands?",
      answer:
        "We work with businesses of all sizes! From startups and small local businesses to large enterprises. We believe every business deserves professional digital presence and we tailor our services to fit different budgets and requirements.",
    },
    {
      question: "Can I customize the packages you offer?",
      answer:
        "While we have standard packages, we understand that every business has unique needs. We're happy to customize our services and create bespoke solutions that align with your specific goals and budget.",
    },
    {
      question: "How do you measure the success of a marketing campaign?",
      answer:
        "We use various metrics including website traffic, conversion rates, lead generation, social media engagement, ROI, and specific KPIs relevant to your business goals. We provide detailed monthly reports with actionable insights.",
    },
    {
      question: "What if I don't like the designs or strategies?",
      answer:
        "Your satisfaction is our priority. We offer multiple revision rounds and work closely with you throughout the process. If you're not happy with the initial concepts, we'll revise them until we achieve a design that meets your vision and goals.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is easy! Simply contact us through our website, phone, or email. We'll schedule a free consultation to discuss your needs, goals, and budget. Then we'll provide a detailed proposal and timeline for your project.",
    },
    {
      question:
        "Do you provide support after launching my website or campaign?",
      answer:
        "Yes! We offer ongoing support and maintenance packages. This includes regular updates, security monitoring, backup services, technical support, and performance optimization to ensure your digital assets continue to perform at their best.",
    },
    {
      question: "What makes your agency different from the rest?",
      answer:
        "Our unique approach combines creativity with data-driven strategies. We focus on building long-term partnerships, provide transparent communication, offer competitive pricing, and deliver measurable results. Our team stays updated with the latest trends and technologies.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">?</span>
          </div>
          <span className="text-sm text-gray-600 font-medium">
            Frequently Asked Questions
          </span>
        </div>

        <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          FAQ It Up! Your curiosity meets our expertise—let's clear things up!
        </h2>

        <p className="text-gray-600 max-w-md">
          We've gathered all the important info right here. Explore our FAQs and
          find the answers you need.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-plus bg-gray-50 rounded-lg"
          >
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-medium text-gray-900 pr-8">
              {faq.question}
            </div>
            <div className="collapse-content">
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Answers;
