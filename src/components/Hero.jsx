export default function Hero() {
          return(
      <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 text-sm bg-white/20 rounded-full">
              AI-powered growth platform
            </span>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Convert More Leads with
              <span className="block text-yellow-300">Smart AI Conversations</span>
            </h1>

            <p className="text-base md:text-lg mb-8 text-white/90">
              Ryze AI helps businesses automate customer conversations,
              qualify leads, and close deals faster using AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-transparent text-white px-6 py-3 rounded-md font-bold border-2 border-white 
                 transition-all duration-300 ease-in-out 
                    hover:bg-white hover:text-indigo-600 active:scale-95">
                Book a Demo
              </button>
              <button className="bg-transparent text-white px-6 py-3 rounded-md font-bold border-2 border-white 
                 transition-all duration-300 ease-in-out 
                 md:hover:bg-white md:hover:text-indigo-600 md:hover:border-white active:scale-95">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex justify-center mt-12 md:mt-0">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 w-full max-w-md shadow-lg">
              <p className="text-sm mb-4">Live AI Assistant</p>
              <div className="space-y-3 text-sm">
                <div className="bg-white/20 p-3 rounded-md">
                  👤 Customer: I want pricing details
                </div>
                <div className="bg-indigo-500 p-3 rounded-md">
                  🤖 Ryze AI: Sure! Let me help you choose the best plan.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      );
}