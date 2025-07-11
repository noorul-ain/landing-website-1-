import React from 'react';

const Programs = () => {
  return (
    <section className="bg-[#f5f5f5] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#212ea0] text-sm font-medium uppercase tracking-wider mb-3">
            OUR PROGRAM
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            What We Offer
          </h2>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Image 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <img
              src="/gallery-1.png"
              alt="Graduate with diploma and sash"
              className="w-full h-64 sm:h-72 lg:h-80 object-cover"
            />
          </div>

          {/* Image 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <img
              src="/gallery-3.png"
              alt="Happy graduate celebrating with arms raised"
              className="w-full h-64 sm:h-72 lg:h-80 object-cover"
            />
          </div>

          {/* Image 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <img
              src="/gallery-3.png"
              alt="Graduate holding diploma certificate"
              className="w-full h-64 sm:h-72 lg:h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
