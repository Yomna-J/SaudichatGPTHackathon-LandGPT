import React from "react";
const LandingOne = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero section */}
      <section className="py-12 px-4 h-screen flex justify-center items-center">
        <div className="max-w-screen-lg text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Sunny&amp;Creamy</h1>
          <p className="text-gray-600 text-lg mb-12">
            We provide sun creams, skin care products tested to be effective for different types of skins
          </p>
          <button className="bg-yellow-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-yellow-600">
            Shop Now
          </button>
        </div>
      </section>

      {/* Product section */}
      <section className="py-12 px-4 max-w-screen-lg mx-auto">
        <h2 className="text-2xl font-bold mb-8">Our Products</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-72 max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <img
              src="https://dummyimage.com/600x400/000/fff"
              alt="Sun Cream"
              className="w-full h-40 object-cover"
            />
            <div className="px-4 py-2">
              <h3 className="text-xl font-bold mb-2">Sun Cream 50+</h3>
              <p className="text-gray-700 text-base">
                Protect your skin with the power of SPF 50+. Our sun cream is perfect for all skin
                types.
              </p>
              <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg block mt-6 mx-auto">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="w-72 max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <img
              src="https://dummyimage.com/600x400/000/fff"
              alt="Skin Care"
              className="w-full h-40 object-cover"
            />
            <div className="px-4 py-2">
              <h3 className="text-xl font-bold mb-2">Skin Care Pack</h3>
              <p className="text-gray-700 text-base">
                Achieve the perfect skin with our skin care pack consisting of a cleanser, toner,
                and moisturizer.
              </p>
              <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg block mt-6 mx-auto">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="w-72 max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <img
              src="https://dummyimage.com/600x400/000/fff"
              alt="Lip Balm"
              className="w-full h-40 object-cover"
            />
            <div className="px-4 py-2">
              <h3 className="text-xl font-bold mb-2">Lip Balm</h3>
              <p className="text-gray-700 text-base">
                Keep your lips moisturized and soft with our lip balm infused with natural
                ingredients.
              </p>
              <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg block mt-6 mx-auto">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      <section className="bg-white py-12 px-4">
        <h2 className="text-2xl font-bold mb-8">What our customers are saying</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-yellow-100 p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                "Sunny&amp;Creamy sun cream is amazing! I have sensitive skin and I didn't have any
                issues with it. Definitely recommend!"
              </p>
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-700">Verified Customer</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-yellow-100 p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                "I love the skin care pack! My skin feels so soft and moisturized."
              </p>
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-gray-700">Verified Customer</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-yellow-100 p-8 rounded-lg shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                "The lip balm is my new favorite! It doesn't leave a greasy feeling on my lips and
                it smells amazing."
              </p>
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="text-gray-700">Verified Customer</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-yellow-500 py-12 px-4 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Get 10% off your first order!</h2>
        <p className="text-lg mb-8">
          Sign up for our newsletter and get 10% off your first order.
        </p>
        <form className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="border border-white rounded-lg py-2 px-4 mb-4 w-full"
          />
          <button className="bg-white text-yellow-500 font-bold py-2 px-4 rounded-lg hover:bg-gray-100">
            Sign up
          </button>
        </form>
      </section>
    </div>
  );
};

export default LandingOne;