
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: 'ri-home-4-line',
      title: 'Roofing Services',
      description: 'Complete roofing solutions including installation, repair, and replacement with premium materials.',
      features: ['New Roof Installation', 'Roof Repairs', 'Roof Replacement', 'Emergency Services']
    },
    {
      icon: 'ri-building-line',
      title: 'Siding & Hardie Board',
      description: 'Professional siding installation and repair services to protect and beautify your home.',
      features: ['Vinyl Siding', 'Hardie Board', 'Siding Repair', 'Color Matching']
    },
    {
      icon: 'ri-water-percent-line',
      title: 'Eavestroughs (Gutters)',
      description: 'Expert gutter installation and maintenance to protect your property from water damage.',
      features: ['Gutter Installation', 'Gutter Cleaning', 'Downspout Repair', 'Leaf Guards']
    },
    {
      icon: 'ri-home-gear-line',
      title: 'Soffit & Fascia',
      description: 'Complete soffit and fascia services to enhance your home\'s appearance and ventilation.',
      features: ['Soffit Installation', 'Fascia Repair', 'Ventilation Solutions', 'Custom Colors']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive construction and roofing services with a focus on quality, 
            durability, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <i className="ri-check-line text-red-500 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center space-x-2 whitespace-nowrap cursor-pointer"
          >
            <span>View All Services</span>
            <i className="ri-arrow-right-line"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
