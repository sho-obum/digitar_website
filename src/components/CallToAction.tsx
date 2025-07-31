import Image from "next/image";
import logo from "../assets/images/Digitar_Media_logo_White_Hexagon.png";

export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] relative">
      {/* Faded line from top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      <div className="container max-w-5xl mx-auto">
        {/* Mobile Layout: Email First, Logo Second, Addresses Third */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Email Section - First on Mobile, Right on Desktop */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="max-w-md mx-auto lg:mx-0">
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tighter mb-6 text-white">
                Stay Ahead of the 
                <span className="text-orange-400"> 
                  {" "}Digital Curve 
                </span>
              </h2>

              <p className="text-base lg:text-lg text-gray-300 leading-relaxed mb-8">
                Get exclusive marketing insights, industry trends, and growth
                strategies delivered straight to your inbox. Join 10,000+
                marketers who trust our expertise.
              </p>
            </div>

            <form className="flex flex-col gap-3 w-full max-w-sm mx-auto lg:mx-0 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 bg-white/10 border border-white/20 rounded-lg px-5 font-medium placeholder:text-gray-400 flex-1 focus:outline-none focus:border-gray-400 focus:bg-white/15 transition-all text-white py-2"
              />
              <button
                type="submit"
                className="bg-white text-black hover:bg-gray-200 h-12 rounded-lg px-6 font-bold transition-all whitespace-nowrap"
              >
                Get Insights
              </button>
            </form>

            <p className="text-xs text-gray-400 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>

          {/* Logo and Addresses - Second/Third on Mobile, Left on Desktop */}
          <div className="order-2 lg:order-1 space-y-8">
            
            {/* Logo Section - Second on Mobile */}
            <div className="text-center lg:text-left">
              <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start items-center">
                <Image src={logo} alt="logo" className="h-10 w-auto" />
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Digitar Media</h3>
                  <p className="text-gray-400 text-sm -mt-1">
                    Digitally Born
                  </p>
                </div>
              </div>
            </div>

            {/* Addresses Section - Third on Mobile, Center Aligned */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 lg:gap-8">
              {/* India Address */}
              <div className="text-center lg:text-left">
                <h4 className="text-lg font-bold mb-3 text-white">
                  India Office
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  1st Floor, C-87-88
                  <br />
                  Ramesh Nagar, Delhi-110015 India
                  <br />
                  <span className="text-white">india@digitarmedia.com</span>
                  <br />
                  +91 80 4718-9000
                </p>
              </div>

              {/* USA Address */}
              <div className="text-center lg:text-left">
                <h4 className="text-lg font-bold mb-3 text-white">
                  USA Office
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  30 N Gould St Ste R
                  <br />
                  Sheridan Wyoming 82801, USA
                  <br />
               
                  <span className="text-white">usa@digitarmedia.com</span>
                  <br />
                  +1 (555) 247-8900
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section with HR and Copyright */}
        <div className="mt-4">
          {/* Horizontal Rule */}
          <hr className="border-white/20 mb-6 sm:mt-12" />
          
          {/* Copyright Section */}
          <div className="text-center text-gray-400 text-sm mb-12 sm:mb-0">
            <p>© 2025 Digitar Media. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Faded line from bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </div>
  );
};
