import React from 'react';

const Gallery = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 text-sm font-medium uppercase tracking-wider mb-3">
            GALLERY
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Campus Photos
          </h2>
        </div>

        {/* Responsive Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Photo 1 */}
          <div className="rounded-lg overflow-hidden shadow-sm">
            <img
              src="/gallery-1.png"
              alt="Students studying in library"
              className="w-full h-56 sm:h-64 object-cover"
            />
          </div>

          {/* Photo 2 */}
          <div className="rounded-lg overflow-hidden shadow-sm">
            <img
              src="/gallery-3.png"
              alt="Students working at desk"
              className="w-full h-56 sm:h-64 object-cover"
            />
          </div>

          {/* Photo 3 */}
          <div className="rounded-lg overflow-hidden shadow-sm">
            <img
              src="/gallery-4.png"
              alt="Graduates celebrating"
              className="w-full h-56 sm:h-64 object-cover"
            />
          </div>

          {/* Photo 4 */}
          <div className="rounded-lg overflow-hidden shadow-sm">
            <img
              src="/gallery.png"
              alt="Graduate with diploma"
              className="w-full h-56 sm:h-64 object-cover"
            />
          </div>
        </div>

        {/* See More Button */}
        <div className="text-center">
          <button className="bg-[#212ea0] text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition-colors duration-300 inline-flex items-center space-x-2">
            <span>See more here</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
