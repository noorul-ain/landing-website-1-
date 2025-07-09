import React from 'react';

const Programs = () => {
  return (
    <section className="bg-[#f5f5f5] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#212ea0] text-sm font-medium uppercase tracking-wider mb-3">
            OUR PROGRAM
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            What We Offer
          </h2>
        </div>

        {/* Images Grid with Smaller Width and Gap */}
        <div className="flex flex-row justify-center gap-6 flex-wrap">
          {/* Image 1 */}
          <div className="max-w-xs w-full">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img 
                src="/api/placeholder/350/400" 
                alt="Graduate with diploma and sash" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Image 2 */}
          <div className="max-w-xs w-full">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img 
                src="/api/placeholder/350/400" 
                alt="Happy graduate celebrating with arms raised" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Image 3 */}
          <div className="max-w-xs w-full">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img 
                src="/api/placeholder/350/400" 
                alt="Graduate holding diploma certificate" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
