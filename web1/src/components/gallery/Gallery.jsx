import React from 'react';

const CampusGallery = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-medium uppercase tracking-wider mb-3">
            GALLERY
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Campus Photos
          </h2>
        </div>

        {/* Photo Grid - 4 photos in one row */}
        <div className="flex flex-row gap-4 justify-center mb-12">
          {/* Photo 1 */}
          <div className="flex-1 max-w-xs">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/api/placeholder/280/300" 
                alt="Students studying in library" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Photo 2 */}
          <div className="flex-1 max-w-xs">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/api/placeholder/280/300" 
                alt="Students working at desk" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Photo 3 */}
          <div className="flex-1 max-w-xs">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/api/placeholder/280/300" 
                alt="Graduates celebrating" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Photo 4 */}
          <div className="flex-1 max-w-xs">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/api/placeholder/280/300" 
                alt="Graduate with diploma" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* See More Button */}
        <div className="text-center">
          <button className="bg-blue-700 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition-colors duration-300 inline-flex items-center space-x-2">
            <span>See more here</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CampusGallery;