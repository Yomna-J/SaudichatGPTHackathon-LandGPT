import React from "react";

const LandingTwo = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-800 py-4 px-8 flex justify-between">
        <div>
          <img src="https://tuwaiq.hackathon.sa/static/media/logo.50eb6a9bef05f42c146b.png" alt="logo" className="w-24" />
        </div>
        <div>
          <button className="font-bold text-lg text-gray-100 py-2 px-6 rounded-md mr-2 hover:bg-gray-700 transition">Register</button>
          <button className="font-bold text-lg text-gray-100 py-2 px-6 rounded-md hover:bg-gray-700 transition">Login</button>
        </div>
      </nav>
      {/* Hero */}
      <section className="py-20 px-8 text-center">
        <h1 className="text-4xl text-gray-100 font-bold mb-4">Join SaudiChatGPT Hackathon Now</h1>
        <p className="text-gray-300 text-lg mb-12">Create and develop products/applications seamlessly and quickly using ChatGPT & Whisper APIs. Learn and test your skills and don't miss the opportunity to get support for your project. With amounts up to 500,000 SAR financing for your project.</p>
        <button className="bg-green-500 hover:bg-green-600 py-3 px-12 font-bold text-lg text-gray-100 rounded-md">Join Now</button>
      </section>
      {/* Features */}
      <section className="py-20 px-8 text-center bg-gray-800">
        <h2 className="text-3xl text-gray-100 font-bold mb-12">Why Join SaudiChatGPT Hackathon?</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 px-8 mb-12">
            <h3 className="text-2xl text-gray-100 font-bold mb-4">Learn New Technologies</h3>
            <p className="text-gray-300">You will have the chance to learn cutting-edge technologies in NLP, AI and more.</p>
          </div>
          <div className="w-full md:w-1/3 px-8 mb-12">
            <h3 className="text-2xl text-gray-100 font-bold mb-4">Improve Your Skills</h3>
            <p className="text-gray-300">You will get hands-on experience on developing and deploying production-level software applications.</p>
          </div>
          <div className="w-full md:w-1/3 px-8 mb-12">
            <h3 className="text-2xl text-gray-100 font-bold mb-4">Win Prizes</h3>
            <p className="text-gray-300">The winners will get great prizes of up to 500,000 SAR funding for their projects.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-8 text-center bg-gray-900">
        <h2 className="text-3xl text-gray-100 font-bold mb-12">Ready to Join?</h2>
        <button className="bg-green-500 hover:bg-green-600 py-3 px-12 font-bold text-lg text-gray-100 rounded-md">Join Now</button>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-gray-300 text-center">
        <p className="text-lg">&copy; 2021 SaudiChatGPT Hackathon. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingTwo;