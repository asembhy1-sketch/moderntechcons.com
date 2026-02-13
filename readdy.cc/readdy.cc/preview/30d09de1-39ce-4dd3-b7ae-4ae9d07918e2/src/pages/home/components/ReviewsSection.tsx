
const ReviewsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            What Our <span className="text-red-600">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what Calgary homeowners are saying about our roofing and construction services.
          </p>
        </div>

        {/* Review Widget Embed Container */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-8">
            {/* Elfsight Google Reviews Widget */}
            <div className="elfsight-app-2716d873-e27d-47ac-939b-15fd0ab15b18" data-elfsight-app-lazy></div>
          </div>
        </div>

        {/* Call to Action for Reviews */}
        <div className="text-center mt-12">
          <div className="bg-slate-100 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Share Your Experience
            </h3>
            <p className="text-gray-600 mb-6">
              Had a great experience with Modern Tech Construction? We'd love to hear from you! 
              Your feedback helps us improve and helps other Calgary homeowners make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://moderntechcons.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-google-fill"></i>
                <span>Leave Google Review</span>
              </a>
              <a
                href="tel:647-867-2444"
                className="bg-transparent border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer"
              >
                <i className="ri-phone-line"></i>
                <span>Call to Share Feedback</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
