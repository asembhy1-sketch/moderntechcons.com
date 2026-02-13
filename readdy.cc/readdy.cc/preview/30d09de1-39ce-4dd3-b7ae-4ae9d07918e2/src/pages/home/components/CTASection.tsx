
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section 
      className="py-20 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.9), rgba(220, 38, 38, 0.9)), url('https://readdy.ai/api/search-image?query=Professional%20construction%20team%20working%20on%20a%20modern%20residential%20roofing%20project%20in%20Calgary%2C%20high-quality%20roofing%20materials%20being%20installed%2C%20clear%20blue%20sky%2C%20well-organized%20construction%20site%2C%20emphasis%20on%20teamwork%20and%20professionalism%2C%20realistic%20photography%20with%20warm%20lighting&width=1920&height=600&seq=cta-background&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Get your free estimate today and discover why Calgary homeowners trust 
            Modern Tech Construction for all their roofing and construction needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center space-x-2 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-file-text-line"></i>
              <span>Get Free Estimate</span>
            </Link>
            <a
              href="tel:647-867-2444"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center space-x-2 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-phone-line"></i>
              <span>Call 647-867-2444</span>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="flex items-center justify-center space-x-3">
              <i className="ri-time-line text-2xl"></i>
              <span className="text-lg">Quick Response</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <i className="ri-shield-check-line text-2xl"></i>
              <span className="text-lg">Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <i className="ri-star-line text-2xl"></i>
              <span className="text-lg">5-Star Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
