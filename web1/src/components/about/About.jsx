import React from 'react';

const UniversityEducationSection = () => {
  return (
    <div className="bg-[#f5f5f5] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div className="relative w-full h-full max-w-md mx-auto">
            <img
              src="/vedio.mp4"
              alt="Graduates"
              className="rounded-xl w-full h-full object-cover shadow-md"
            />

            {/* Play Button Overlay */}
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div> */}
          </div>

          {/* Text Content */}
          <div>
            <p className="text-[#212ea0] text-sm font-semibold uppercase tracking-wide mb-3">
              About University
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Nurturing Tomorrow's <br /> Leaders Today
            </h2>
            <div className="text-gray-600 text-base space-y-4 leading-relaxed">
              <p>
                Embark on a transformative educational journey with our university's
                comprehensive education programs. Our cutting-edge curriculum is
                designed to empower students with the knowledge, skills, and
                experiences needed to excel in the dynamic field of education.
              </p>
              <p>
                With a focus on innovation, hands-on learning, and personalized
                mentorship, our programs prepare aspiring educators to make a
                meaningful impact in classrooms, schools, and communities.
              </p>
              <p>
                Whether you aspire to become a teacher, administrator, counselor, or
                educational leader, our diverse range of programs offers the perfect
                pathway to achieve your goals and unlock your full potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityEducationSection;
