import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 
export const Footer = () => {
  return (
    <footer className=" text-white py-6 mt-12 border-t-2 border-t-gray-300 border-opacity-20">
    <div className="w-full mx-auto text-center">
      <p className="text-xl mb-2">Created by TLE_Smashers</p>

      {/* Social Media Links */}
      <div className="flex justify-center gap-4 mb-4">
        <a href="https://www.linkedin.com/in/kanhaiyasahu01" target="_blank" rel="noopener noreferrer" className="text-white hover:text-richblack-yellow">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/member1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-richblack-yellow">
          <FaGithub size={24} />
        </a>
      </div>

      {/* Dummy Content Section */}
      <div className="text-sm mb-4">
        <p className="font-bold">Our Mission:</p>
        <p>We strive to provide the best environmental solutions through innovative technology and community engagement.</p>
      </div>

      {/* Contact Information */}
      <div className="text-sm mb-4">
        <p>Email: <a href="mailto:info@example.com" className="text-white hover:text-richblack-yellow">kanhaiyasahutools@gmail.com</a></p>
      </div>

      {/* Legal Information */}
      <div className="text-sm">
        <p>&copy; {new Date().getFullYear()} TLE_Smashers. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}
