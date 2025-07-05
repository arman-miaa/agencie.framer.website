import {
  Frown,
  MessageSquare,
  Palette,
  BarChart3,
  Calendar,
  DollarSign,
  Clock,
  Minimize,
  Shield,
  Users,
  User,
  MessageCircle,
  Lightbulb,
  TrendingUp,
  Handshake,
  Eye,
  Wrench,
  Award,
  Zap,
  Heart,
} from "lucide-react";
import TitleSection from "../shared/TitleSection";

const othersItems = [
  { icon: Frown, text: "Generic Solutions" },
  { icon: MessageSquare, text: "Jargon Overload" },
  { icon: Palette, text: "Boring Creativity" },
  { icon: BarChart3, text: "Fluff Metrics" },
  { icon: Calendar, text: "One-Time Campaigners" },
  { icon: DollarSign, text: "Hidden Costs" },
  { icon: Clock, text: "Outdated Methods" },
  { icon: Minimize, text: "Limited Scope" },
  { icon: Shield, text: "Reactive Tactics" },
  { icon: Users, text: "Just Another Client" },
];

const agentGItems = [
  { icon: User, text: "Personalized Plans" },
  { icon: MessageCircle, text: "Plain Talk" },
  { icon: Lightbulb, text: "Bold Ideas" },
  { icon: TrendingUp, text: "Real ROI" },
  { icon: Handshake, text: "Long-Term Partners" },
  { icon: Eye, text: "Transparent Pricing" },
  { icon: Wrench, text: "Innovative Tools" },
  { icon: Award, text: "Full-Service Experts" },
  { icon: Zap, text: "Proactive Strategies" },
  { icon: Heart, text: "Passion & Care" },
];

const Differences = () => {
  return (
    <div className="mt-52 max-w-7xl mx-auto px-4">
      <TitleSection
        badgeText="Our differences"
        title="While others copy and paste, we innovate and elevate. Your brand gets the VIP treatment it truly deserves."
      />

      <div className="grid md:grid-cols-2 max-w-5xl mx-auto">
        {/* Others Column */}
        <div className="">
          <h3 className="text-2xl font-bold text-gray-700 text-center mb-8">
            Others
          </h3>
          <div className="bg-gray-200 rounded-l-2xl">
            {othersItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3   transition-colors duration-200"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-gray-400" />
                </div>
                <span className="text-gray-600 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Agent-G Column */}
        <div className="">
          <h3 className="text-2xl font-bold text-center mb-8">
            <span className="text-orange-500">🤖</span> Agent-G
          </h3>
          <div className="bg-gray-900 rounded-r-2xl ">
            {agentGItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-orange-500" />
                </div>
                <span className="text-white font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>


    </div>
  );
};

export default Differences;
