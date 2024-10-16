import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { ContactUs } from '../components/ContactUs';
export const About = () => {
  return (
    <div className="min-h-screen bg-richblack-900 flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl font-bold mb-8 text-blue-400">About TLE_Smashers</h1>
      <p className="text-lg text-center max-w-3xl mb-10 text-gray-300">
        We are a team of passionate developers, competitive coders, and tech enthusiasts who strive to build innovative solutions. Our team, TLE_Smashers, is driven by the desire to solve real-world problems and bring efficient, scalable, and creative products to life. With a focus on modern technologies and cutting-edge practices, we continuously push the boundaries to achieve excellence.
      </p>

      {/* Contact Information */}
      <div className="w-full md:w-3/4 lg:w-1/2 bg-richblack-800 p-6 rounded-lg shadow-lg">
        <div className='flex items-center justify-center'>
          <h2 className='text-2xl font-semibold text-left mb-6 text-blue-400'>Contact Us</h2>
        </div>

        <div className='flex items-start justify-between pl-4 pr-4'>
          {/* LinkedIn Section */}
          <div className="space-y-4">
          <div className="flex items-center text-gray-300">
              <FaLinkedin className="text-xl text-blue-500 mr-3" />
              <a href="https://www.linkedin.com/in/kanhaiyasahu01" target="_blank" rel="noopener noreferrer" className="text-md hover:underline">
                Kanhaiya Sahu
              </a>
            </div>
            <div className="flex items-center text-gray-300">
              <FaLinkedin className="text-xl text-blue-500 mr-3" />
              <a href="https://www.linkedin.com/in/ch-shakish-14bb45254" target="_blank" rel="noopener noreferrer" className="text-md hover:underline">
                Ch. Shakish
              </a>
            </div>
            <div className="flex items-center text-gray-300">
              <FaLinkedin className="text-xl text-blue-500 mr-3" />
              <a href="https://www.linkedin.com/in/prahlad-yadav-478040257" target="_blank" rel="noopener noreferrer" className="text-md hover:underline">
                Prahlad Yadav
              </a>
            </div>
            <div className="flex items-center text-gray-300">
              <FaLinkedin className="text-xl text-blue-500 mr-3" />
              <a href="https://www.linkedin.com/in/venktesh-badgaiyan-935a19263" target="_blank" rel="noopener noreferrer" className="text-md hover:underline">
                Venktesh Badgaiyan
              </a>
            </div>
            
            
          </div>

          {/* Email Section */}
          <div className="space-y-4">
          <div className="flex items-center text-gray-300">
              <FaEnvelope className="text-xl text-blue-500 mr-3" />
              <a href="mailto:kanhaiyasahutools@gmail.com" className="text-md hover:underline">
                kanhaiyasahutools@gmail.com
              </a>
            </div>
            <div className="flex items-center text-gray-300">
              <FaEnvelope className="text-xl text-blue-500 mr-3" />
              <a href="mailto:ch.shakish11123@gmail.com" className="text-md hover:underline">
                ch.shakish11123@gmail.com
              </a>
            </div>
            <div className="flex items-center text-gray-300">
              <FaEnvelope className="text-xl text-blue-500 mr-3" />
              <a href="mailto:prahlady444@gmail.com" className="text-md hover:underline">
                prahlady444@gmail.com
              </a>
            </div>
            <div className="flex items-center text-gray-300">
              <FaEnvelope className="text-xl text-blue-500 mr-3" />
              <a href="mailto:venkteshbadgaiyan@gmail.com" className="text-md hover:underline">
                venkteshbadgaiyan@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ContactUs/>
      </div>
    </div>
  );
};
