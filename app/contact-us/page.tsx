"use client"

import { useState } from "react";
import Image from "next/image";

const ContactPage = () => {
 
  // useState is false before clicking!
  const [submitted, setSubmitted] = useState(false);

  // handles button submit state where it is clicked or not!
  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    // reseting the page after viewing the message for 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-accent p-10 mg-auto">
      <div className="grid grid-cols-1 md:grid-cols-2  bg-white shadow-lg shadow-cyan-300/50 rounded-2xl overflow-hidden max-w w-full">
        <section className="p-4">
          <Image
            src="/trend.jpg"
            alt="grid-img-1"
            width={400}
            height={400}
            className="w-full h-full object-cover rounded-lg shadow-xl/60 grayscale-65"
          />
        </section>

         <section className="p-8 flex flex-col justify-center">
          {!submitted ? (
            <>
              <h2 className="text-2xl font-bold mb-6 text-gray-700">
                Contact Form
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="fname"
                    className="block text-sm font-medium text-gray-600"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name..."
                    className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lname"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Your last name..."
                    className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email@.com"
                    className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="Continents"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Country
                  </label>
                  <select
                    name="Continents"
                    id="Continents"
                    className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                    <option value="South America">South America</option>
                    <option value="Africa">Africa</option>
                    <option value="Australia">Australia</option>
                    <option value="North America">North America</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="Message"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Write your message..."
                    className="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyan-500 text-white py-2 rounded-lg shadow-cyan-500/50 font-medium hover:bg-blue-600 transition-colors"
                >
                  Submit
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                Thank You!
              </h2>
              <p className="text-gray-600">We got your message 🎉</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};




export default ContactPage;
