import React, { useState } from 'react';
import toast from 'react-hot-toast';

export const ContactUs = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
  
      const formData = new FormData(event.target);
      formData.append("access_key", "3bc77d76-4dca-443c-a41b-4014582801fa");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        toast.success("Message Sent Successfully")
      } else {
        console.log("Error", data);
        setResult(data.message);
        toast.error("Message not sent")
      }
    };
  
    return (
      <div className=" text-white py-16 px-8 sm:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-yellow-500 mb-8 text-center">
            Get in Touch
          </h2>
          <p className="text-center mb-12 text-lg">
            If you have any questions or just want to get in touch, please fill out the form below.
          </p>
  
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg bg-richblack-900 text-white placeholder-gray-400"
                placeholder="Your Name"
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block text-lg font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg bg-richblack-900 text-white placeholder-gray-400"
                placeholder="Your Email"
              />
            </div>
  
            <div>
              <label htmlFor="message" className="block text-lg font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="6"
                className="w-full p-3 border border-gray-300 rounded-lg bg-richblack-900 text-white placeholder-gray-400"
                placeholder="Your Message"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full py-3 px-6 bg-yellow-500 text-blue-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition-colors duration-300"
            >
              Send Message
            </button>
  
            {result && (
              <p className="text-center text-caribbeangreen-200 mt-4">
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    );
  };
  