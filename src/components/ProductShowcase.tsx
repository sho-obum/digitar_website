import Image from "next/image";
import Link from "next/link";
import adxityLogo from "../assets/images/logosaas.png"
import adpocketLogo from "../assets/images/Adpocket.png"

const cardData = [
  {
    icon: adxityLogo,
    title: "Adxity.com",
    description:
      "Precision Targeting at Enterprise Scale. Access premium inventory, leverage advanced audience insights, and execute data-driven campaigns that deliver measurable business outcomes",
    color: "cyan",
    gradient: "from-cyan-500/20 to-blue-500/20",
    link: "https://adxity.com/", // Added link property
    // Pre-defined styles for production
    styles: {
      glow: "bg-cyan-500/30",
      container:
        "bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border-cyan-500/30",
      button:
        "bg-cyan-500/10 border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50",
    },
  },
  {
    icon: adpocketLogo,
    title: "AdPocket.ai",
    description:
      "Quality Traffic That Converts. Connect with engaged users across our trusted partner network while maintaining full transparency and control over your acquisition costs",
    color: "fuchsia",
    gradient: "from-fuchsia-500/20 to-purple-500/20",
    link: "https://adpocket.ai/", // Added link property
    // Pre-defined styles for production
    styles: {
      glow: "bg-fuchsia-500/30",
      container:
        "bg-gradient-to-br from-fuchsia-500/20 to-fuchsia-600/20 border-fuchsia-500/30",
      button:
        "bg-fuchsia-500/10 border-fuchsia-500/30 text-fuchsia-400 group-hover:bg-fuchsia-500/20 group-hover:border-fuchsia-500/50",
    },
  },
];

export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black via-[#5D2CA8] to-[#12002f] py-[72px]">
      <div className="container mx-auto px-4 flex flex-col justify-center items-center">
        <h2 className="text-center text-5xl font-bold tracking-tighter">
          Accelerate Your Advertising Success
        </h2>
        <div className="max-w-5xl">
          <p className="text-xl text-center text-white/70 mt-5 mb-16">
            Unlock the full potential of programmatic advertising and mobile app
            growth with solutions designed for performance, transparency, and
            scale.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cardData.map((card, index) => (
            <div key={index} className="group relative">
              {/* Glow Effect Background */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10`}
              />

              {/* Main Card */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 mb-16 cursor-pointer">
                {/* Floating Icon */}
                <div className="flex justify-center -mt-16 mb-8">
                  <div className="relative">
                    {/* Icon Shadow */}
                    <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black/50 rounded-full blur-md group-hover:bg-black/30 transition-all duration-300" />

                    {/* Glow behind icon */}
                    <div
                      className={`absolute inset-0 rounded-xl ${card.styles.glow} blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300`}
                    />

                    {/* Icon Container */}
                    <div
                      className={`relative ${card.styles.container} p-4 rounded-xl backdrop-blur-sm group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300`}
                    >
                      <Image
                        src={card.icon}
                        alt={card.title}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain"
                        priority={index < 2}
                      />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-bold tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Action Button */}
                  <div className="pt-4">
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg ${card.styles.button} font-medium transition-all duration-300`}
                      aria-label={`Learn more about ${card.title}`}
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
