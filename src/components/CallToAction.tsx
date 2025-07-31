export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] relative">
      {/* Faded line from top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column - Logo and Addresses */}
          <div className="space-y-8">
            {/* Logo */}
            <div>
              <h3 className="text-3xl font-bold text-white">
                DigitalEdge
              </h3>
              <p className="text-gray-400 text-sm mt-1">Marketing Solutions</p>
            </div>
            
            {/* Two Addresses in Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* India Address */}
              <div className="text-left">
                <h4 className="text-lg font-bold mb-3 text-white">India Office</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  WeWork Galaxy<br />
                  43, Residency Road<br />
                  Bangalore, KA 560025<br />
                  <span className="text-white">india@digitaledge.com</span><br />
                  +91 80 4718-9000
                </p>
              </div>
              
              {/* USA Address */}
              <div className="text-left">
                <h4 className="text-lg font-bold mb-3 text-white">USA Office</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  1250 Broadway Avenue<br />
                  Suite 2800<br />
                  New York, NY 10001<br />
                  <span className="text-white">usa@digitaledge.com</span><br />
                  +1 (555) 247-8900
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Subscribe Section */}
          <div className="text-left">
            <div className="max-w-md">
              <h2 className="font-bold text-4xl sm:text-5xl tracking-tighter mb-6 text-white">
                Stay Ahead of the Digital Curve
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Get exclusive marketing insights, industry trends, and growth strategies 
                delivered straight to your inbox. Join 10,000+ marketers who trust our expertise.
              </p>
            </div>
            
            <form className="flex flex-col gap-3 w-full max-w-sm sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 bg-white/10 border border-white/20 rounded-lg px-5 font-medium placeholder:text-gray-400 flex-1 focus:outline-none focus:border-gray-400 focus:bg-white/15 transition-all text-white"
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
        </div>
      </div>
      
      {/* Faded line from bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </div>
  );
};
