import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";

const cardData = [
  {
    icon: "/assets/images/pill.png", // Replace with your icons
    title: "Adxity DSP",
    description:
      "Scale Smarter with Precision. Reach high-intent users at scale using our demand-side platform built for deep audience targeting and transparent media buying.",
    color: "cyan",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: "/assets/images/cuboid.png", // Replace with your icons
    title: "AdPocket SDK",
    description:
      "Power Direct Installs with Clean Traffic. Our SDK ecosystem connects you to millions of real users — enabling faster, cleaner, and more cost-effective app growth.",
    color: "fuchsia",
    gradient: "from-fuchsia-500/20 to-purple-500/20",
  },
];

export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black via-[#5D2CA8] to-[#12002f] py-[72px]">
      <div className="container flex flex-col justify-center items-center">
        <h2 className="text-center text-5xl font-bold tracking-tighter">
          Ideas made Impact
        </h2>
        <div className="max-w-5xl">
          <p className="text-xl text-center text-white/70 mt-5 mb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, eos ea autem laboriosam soluta libero quos eum
            accusantium itaque, quas! Nam, repellendus.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cardData.map((card, index) => (
            <div key={index} className="group relative">
              {/* Glow Effect Background */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10`}
              ></div>

              {/* Main Card */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 mb-16 cursor-pointer">
                {/* Floating Icon */}
                <div className="flex justify-center -mt-16 mb-8">
                  <div className="relative">
                    {/* Icon Shadow */}
                    <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-black/50 rounded-full blur-md group-hover:bg-black/30 transition-all duration-300"></div>

                    {/* Glow behind icon */}
                    <div
                      className={`absolute inset-0 rounded-xl bg-${card.color}-500/30 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300`}
                    ></div>

                    {/* Icon Container */}
                    <div
                      className={`relative bg-gradient-to-br from-${card.color}-500/20 to-${card.color}-600/20 p-4 rounded-xl backdrop-blur-sm border border-${card.color}-500/30 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300`}
                    >
                      <Image
                        src={card.icon}
                        alt={card.title}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Action Button */}
                  <div className="pt-4">
                    <button
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-${card.color}-500/10 border border-${card.color}-500/30 text-${card.color}-400 font-medium group-hover:bg-${card.color}-500/20 group-hover:border-${card.color}-500/50 transition-all duration-300`}
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
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
