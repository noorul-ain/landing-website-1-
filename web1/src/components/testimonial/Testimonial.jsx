import React, { useState } from "react";

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "William Jackson",
      location: "Edusity, USA",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
      testimonial:
        "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      id: 2,
      name: "Emily Williams",
      location: "Edusity, USA",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b332bd5c?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
      testimonial:
        "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      location: "Edusity, USA",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
      testimonial:
        "The professors here are not just educators, but mentors who genuinely care about student success. The hands-on learning approach and innovative curriculum have prepared me well for my future career.",
    },
    {
      id: 4,
      name: "Sarah Davis",
      location: "Edusity, USA",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
      testimonial:
        "Edusity has provided me with opportunities I never imagined possible. From research projects to internships, the university has opened doors that will shape my career for years to come.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= testimonials.length ? 0 : prevIndex + 2
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 2 : prevIndex - 2
    );
  };

  return (
    <div className="bg-[#f5f5f5] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-blue-600 font-semibold mb-3 tracking-wider text-sm uppercase">
          TESTIMONIALS
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          What Student Says
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Left Arrow with Image */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#212ea0] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md hover:bg-blue-900 transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/545/545682.png" // ← Replace with your own left arrow
              alt="left arrow"
              className="w-4 h-4 sm:w-5 sm:h-5 invert"
            />
          </button>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mx-10">
            {[testimonials[currentIndex], testimonials[(currentIndex + 1) % testimonials.length]].map(
              (item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl px-6 py-5 text-left shadow-md max-w-sm mx-auto"
                >
                  <div className="flex gap-4 items-start">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-blue-700 font-semibold text-base">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500">{item.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                    {item.testimonial}
                  </p>
                </div>
              )
            )}
          </div>

          {/* Right Arrow with Image */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#212ea0] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md hover:bg-blue-900 transition"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/545/545680.png" // ← Replace with your own right arrow
              alt="right arrow"
              className="w-4 h-4 sm:w-5 sm:h-5 invert"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
