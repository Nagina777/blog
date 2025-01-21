import React from "react";

export default function FooterContactForm() {
  return (
    <form
      className="bg-navy px-6 sm:px-8 lg:px-12 py-6 w-full md:w-1/2 rounded-lg shadow-lg"
      style={{ backgroundColor: "#001F3F" }} // Navy blue color hardcoded
    >
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-5 text-white text-center uppercase">
          Contact Us
        </h2>
        <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 mb-4">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="w-full px-4 py-3 text-dark placeholder-gray-500 bg-blue-100 border border-blue-500 rounded-lg focus:ring-4 focus:ring-blue-500 transition duration-300"
            required
          />

          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            className="w-full px-4 py-3 text-dark placeholder-gray-500 bg-blue-100 border border-blue-500 rounded-lg focus:ring-4 focus:ring-blue-500 transition duration-300"
          />
        </div>

        <textarea
          rows={4}
          placeholder="Message"
          name="message"
          className="mb-4 w-full px-4 py-3 text-dark placeholder-gray-500 bg-blue-100 border border-blue-500 rounded-lg focus:ring-4 focus:ring-blue-500 transition duration-300"
          required
        />

        <button className="px-12 py-3 text-xl font-semibold text-navy bg-white hover:bg-gray-200 border-2 border-white hover:border-gray-300 uppercase transition-all duration-150 ease-linear rounded-lg block mx-auto">
          Submit
        </button>
      </div>
    </form>
  );
}
