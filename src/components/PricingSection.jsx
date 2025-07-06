
import PricingCard from "../shared/PricingCard"
import TitleSection from "../shared/TitleSection";




const PricingSection = () => {
  const pricingPlans = [
    {
      planName: "Marketing Automation",
      price: "$299",
      period: "month",
      notice: "Save up to 30% by paying yearly",
      description:
        "Small to medium-sized businesses looking to build and sustain consistent online presence without the hassle.",
      features: [
        "Social Media Management (3 platforms, 12 posts/month)",
        "Master Email Marketing Campaign - up to 5 campaigns",
        "Blog Content Creation (4 posts/month)",
        "Basic Analytics Report with Actionable Insights",
        "Lead Scheduling and Optimization",
        "Quarterly Competitor Analysis",
        "Engagement Monitoring and Response (comments and messages)",
      ],
    },
    {
      planName: "Website Core Pro",
      price: "$499",
      period: "month",
      notice: "Cancel or pause anytime",
      description:
        "Businesses aiming to improve visibility and climb search engine rankings steadily.",
      features: [
        "Regular Updates & Maintenance",
        "Security Monitoring and Bug Fixes",
        "Performance optimization",
        "Plugin and Theme Updates",
        "Monthly Backup & Recovery",
        "Comprehensive SEO Strategy (on-page and off-page)",
        "Keyword Research & Implementation",
        "Monthly Performance Report",
        "Local SEO Optimization (for businesses with physical locations)",
        "Up to 3 Backlink  Opportunities/Month",
        "Content Optimization for Existing Pages",
        "Technical SEO Audit and Fixes",
        "Schema Markup Integration",
      ],
    },
    {
      planName: "Brand Builder Package",
      price: "$999",
      period: "month",
      description:
        "Entrepreneurs, startups, and businesses ready to establish or refresh their brand identity with a cohesive, professional, and standout image.",
      features: [
        "Lead Design Development",
        "Brand Style Guide (Typography, Colors, Imagery)",
        "Business Card Design",
        "Social Media Brand Branding",
        "Print Signature Design",
        "Presentation Template and Pitch/Proposal Slides",
        "Brand Guidelines and Usage Guidelines",
        "Packaging Design (Optional Add-on)",
      ],
    },
    {
      planName: "Custom Package",
      price: "$5K",
      period: "project",
      description:
        "Businesses with unique needs that require a customized, holistic approach to their digital strategy .",
      features: [
        "Comprehensive Business Analysis",
        "Custom Strategy Development (Marketing, SEO, Web, Branding)",
        "Dedicated Account Manager",
        "Monthly Objectives & Adjustments",
        "Advanced Analytics and Reporting",
        "Campaign Management for Paid Ads (Google, Facebook, Instagram)",
        "Personalized Training for Your Team",
        "Direct Support via Email or Phone",
      ],
    },
  ];

  return (
    <div id="pricing" className="mt-52 scroll-mt-36 max-w-7xl mx-auto  ">
      <TitleSection
        badgeText="Pricing Plans"
        title="Affordable, transparent pricing tailored to your business—because every detail matters!"
      />

      <div className="grid gap-8 max-w-7xl mx-auto mt-18">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            planName={plan.planName}
            price={plan.price}
            period={plan.period}
            notice={plan.notice}
            description={plan.description}
            features={plan.features}
            toggle={index === 0}
          />
        ))}
      </div>
    </div>
  )
}

export default PricingSection
