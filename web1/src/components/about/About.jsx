import React from 'react';

const About = () => {
  return (
    <div className="bg-[#f5f5f5] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Video Section */}
          <div className="w-full max-w-md mx-auto lg:max-w-full">
            <video
              src="/vedio.mp4"
              controls
              className="rounded-xl w-full h-64 sm:h-80 md:h-96 object-cover shadow-md"
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Text Content */}
          <div>
            <p className="text-[#212ea0] text-sm font-semibold uppercase tracking-wide mb-3">
              About University
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Nurturing Tomorrow's <br /> Leaders Today
            </h2>
            <div className="text-gray-600 text-sm sm:text-base space-y-4 leading-relaxed">
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

export default About;
