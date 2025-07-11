import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      }}
    >
      {/* Purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 opacity-75"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            We Ensure Better Education
            <br />
            for a Better World
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Our cutting-edge curriculum is designed to empower students with the knowledge,
            skills, and experiences needed to excel in the dynamic field of education.
          </p>

          {/* CTA Button */}
          <button className="inline-flex items-center bg-white text-indigo-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105">
            Explore More
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>

      
    </div>
  );
}
