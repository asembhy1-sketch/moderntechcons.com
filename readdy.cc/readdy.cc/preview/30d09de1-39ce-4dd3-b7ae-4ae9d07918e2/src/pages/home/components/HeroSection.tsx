
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20construction%20site%20with%20professional%20roofing%20work%20in%20progress%2C%20Calgary%20skyline%20in%20background%2C%20construction%20workers%20installing%20high-quality%20roofing%20materials%2C%20clean%20and%20organized%20worksite%2C%20professional%20construction%20equipment%2C%20bright%20daylight%20with%20clear%20blue%20sky%2C%20modern%20residential%20buildings%2C%20emphasis%20on%20quality%20craftsmanship%20and%20attention%20to%20detail%2C%20realistic%20photography%20style&width=1920&height=1080&seq=hero-construction&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="https://static.readdy.ai/image/5d0ccf30aedece29e5e51bf37e1751bd/1c82617016ffde93cfab4905daef4d7a.png" 
              alt="Modern Tech Construction Logo" 
              className="w-32 h-32 object-contain"
            />
          </div>

          {/* Hero Content */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Building the Future,<br />
            <span className="text-red-500">One Roof at a Time</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Professional roofing and construction services in Calgary. We deliver exceptional quality, 
            reliability, and craftsmanship with every project we undertake.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center space-x-2 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-file-text-line"></i>
              <span>Get a Free Estimate</span>
            </Link>
            <a
              href="tel:647-867-2444"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center space-x-2 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-line"></i>
              <span>Call Now</span>
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-200">
            <div className="flex items-center space-x-2">
              <i className="ri-phone-line text-red-500"></i>
              <span>647-867-2444</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-mail-line text-red-500"></i>
              <span>GurpreetChhina7474@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-map-pin-line text-red-500"></i>
              <span>Calgary & Surrounding Areas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
