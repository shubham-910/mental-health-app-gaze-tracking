import React from "react";
import { Link } from "react-router-dom"; // Import Link if using React Router
import NavbarMenu from "../components/NavbarMenu";

const LandingPage = () => {
  return (
    <div className="bg-theme-background min-h-screen text-white">
      {/* Navbar */}
      <NavbarMenu />
      {/* Information Section */}
      <div className="flex justify-between items-center pt-20 py-16 px-10">
        {/* Image Section */}
        <div className="w-1/2">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Information Image"
            className="rounded shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-1/2 px-10">
          <h2 className="text-4xl font-bold mb-6">Informative Title</h2>
          <p className="text-lg mb-6">
            This is a brief description about the content on this page. You can
            provide more information here about the topic or service. The text
            here can be customized to match your product or service description.
          </p>
        </div>
      </div>

      {/* Button Section */}
      <div className="text-center mt-12">
        {/* "Get Started" Button */}
        <Link
          to="/next-page" // If using React Router, otherwise href for external link
          className="py-3 px-8 bg-white text-[#7579E7] rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
        <h4 className="mt-3">By clicking above button, we will access your camera for eye tracking.</h4>

        {/* Down Arrow and Read More */}
        <div className="mt-12 flex flex-col items-center">
          <span className="text-xl font-medium mb-2">Read More</span>
          <a href="#more-content" className="animate-bounce">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* More Content Section */}
      <div
        id="more-content"
        className="py-20 px-10 bg-theme-background text-white mt-10"
      >
        <h2 className="text-3xl font-bold mb-4">More Information</h2>
        <p className="text-lg">
          Here you can continue to provide more detailed information. The user
          has clicked the "Read More" button to explore this additional content.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
