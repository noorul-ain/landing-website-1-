import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "William Jackson",
      location: "Edusity, USA",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
      testimonial: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
    },
    {
      id: 2,
      name: "Emily Williams",
      location: "Edusity, USA",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332bd5c?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
      testimonial: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
    },
    {
      id: 3,
      name: "Michael Johnson",
      location: "Edusity, USA",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
      testimonial: "The professors here are not just educators, but mentors who genuinely care about student success. The hands-on learning approach and innovative curriculum have prepared me well for my future career."
    },
    {
      id: 4,
      name: "Sarah Davis",
      location: "Edusity, USA",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
      testimonial: "Edusity has provided me with opportunities I never imagined possible. From research projects to internships, the university has opened doors that will shape my career for years to come."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gray-50 py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-3 tracking-wider text-sm uppercase">TESTIMONIALS</p>
          <h2 className="text-5xl font-bold text-gray-900">What Student Says</h2>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          {/* Left Navigation Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-blue-700 hover:bg-blue-800 text-white w-12 h-12 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>
          
          {/* Right Navigation Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-blue-700 hover:bg-blue-800 text-white w-12 h-12 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>

          {/* Testimonials Grid */}
          <div className="flex justify-center gap-8 px-16">
            {[currentIndex, (currentIndex + 1) % testimonials.length].map((index) => (
              <div
                key={testimonials[index].id}
                className="bg-white rounded-2xl p-8 shadow-lg max-w-md w-full"
              >
                <div className="flex items-start gap-4">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <img
                      src={testimonials[index].avatar}
                      alt={testimonials[index].name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-blue-700 mb-1">
                        {testimonials[index].name}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {testimonials[index].location}
                      </p>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {testimonials[index].testimonial}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}