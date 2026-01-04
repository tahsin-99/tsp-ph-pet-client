const FAQ = () => {
  return (
    <section className="py-20 bg-base-100 mt-80 mb-80">
      <div className="max-w-5xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center text-base-content mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <div className="collapse collapse-arrow bg-base-200 rounded-xl">
            <input type="radio" name="faq" defaultChecked />
            <div className="collapse-title text-lg font-semibold text-base-content">
              How can I adopt a pet?
            </div>
            <div className="collapse-content text-base-content/80">
              <p>
                Browse pets, view details, and place an adoption request.
                Our team will contact you for verification.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 rounded-xl">
            <input type="radio" name="faq" />
            <div className="collapse-title text-lg font-semibold text-base-content">
              Do you deliver pet products nationwide?
            </div>
            <div className="collapse-content text-base-content/80">
              <p>
                Yes, we deliver pet food and accessories all over the country.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 rounded-xl">
            <input type="radio" name="faq" />
            <div className="collapse-title text-lg font-semibold text-base-content">
              Is online payment secure?
            </div>
            <div className="collapse-content text-base-content/80">
              <p>
                Absolutely. We use secure and encrypted payment systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
