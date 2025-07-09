import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isHuman, setIsHuman] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (isHuman && formData.name && formData.phone && formData.email && formData.message) {
      console.log('Form submitted:', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', phone: '', email: '', message: '' });
      setIsHuman(false);
    } else {
      alert('Please fill all fields and verify you are human');
    }
  };

  return (
    <div className="bg-[#f5f5f5] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-4 tracking-wider text-sm uppercase">CONTACT US</p>
          <h2 className="text-5xl font-bold text-gray-900">Get in Touch</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 ">
          {/* Right Side - Form */}
          <div className="space-y-6 lg:order-2 ">
            {/* Name Field */}
            <div>
              <label className="block text-black  font-medium mb-3 text-base">
                Your name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="w-full px-4 py-4 bg-blue-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all text-gray-700 placeholder-gray-500"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-3 text-base">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your mobile number"
                className="w-full px-4 py-4 bg-blue-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all text-gray-700 placeholder-gray-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-3 text-base">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email id"
                className="w-full px-4 py-4 bg-blue-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all text-gray-700 placeholder-gray-500"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-3 text-base">
                Write your messages here
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Enter your message"
                rows="6"
                className="w-full px-4 py-4 bg-blue-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all resize-none text-gray-700 placeholder-gray-500"
              />
            </div>

            {/* Captcha */}
            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="human-check"
                  checked={isHuman}
                  onChange={(e) => setIsHuman(e.target.checked)}
                  className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                />
                <label htmlFor="human-check" className="text-gray-700 text-sm font-medium">
                  I am human
                </label>
              </div>
              <div className="text-right">
                <div className="bg-teal-500 text-white px-3 py-1 rounded text-xs font-bold inline-block">
                  hCaptcha
                </div>
                <div className="text-xs text-gray-500 mt-1">Privacy - Terms</div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={!isHuman}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-4 px-8 rounded-full transition-all duration-200 flex items-center gap-2"
            >
              Submit now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* -----------Left Side - Contact Info---------------- */}
          <div className="space-y-8 lg:order-1 ml-20">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Send us a message 📧
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 mt-12">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <p className="text-gray-900 font-medium text-lg">Contact@GreatStack.dev</p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <p className="text-gray-900 font-medium text-lg">+1 123-456-7890</p>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="text-gray-900 font-medium text-lg">77 Massachusetts Ave, Cambridge</p>
                  <p className="text-gray-600 text-lg">MA 02139, United States</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}