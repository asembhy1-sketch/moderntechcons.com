
const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: 'ri-shield-check-line',
      title: 'Professional & Reliable',
      description: 'Licensed professionals with years of experience delivering consistent, high-quality results.'
    },
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Affordable Pricing',
      description: 'Competitive rates without compromising on quality. We provide transparent, upfront pricing.'
    },
    {
      icon: 'ri-award-line',
      title: 'High-Quality Materials',
      description: 'We use only premium materials from trusted suppliers to ensure long-lasting results.'
    },
    {
      icon: 'ri-file-text-line',
      title: 'Free Estimates',
      description: 'Get detailed, no-obligation estimates for all your roofing and construction needs.'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Local Calgary Expertise',
      description: 'Deep understanding of Calgary\'s climate and building requirements for optimal solutions.'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Customer Satisfaction',
      description: 'Dedicated to exceeding expectations with personalized service and attention to detail.'
    }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-red-500">Modern Tech Construction</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're committed to delivering exceptional construction and roofing services 
            that stand the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-slate-700 rounded-xl p-8 hover:bg-slate-600 transition-colors duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <i className={`${reason.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-red-500 mb-2">500+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-500 mb-2">15+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-500 mb-2">100%</div>
            <div className="text-gray-300">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-500 mb-2">24/7</div>
            <div className="text-gray-300">Emergency Service</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
