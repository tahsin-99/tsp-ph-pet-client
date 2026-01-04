const Statistics = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-5 text-center">
        <h2 className="text-4xl font-bold text-base-content mb-12">
          Our Impact in Numbers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="stat bg-base-100 shadow-lg rounded-2xl">
            <div className="stat-title text-base-content/70">
              Happy Customers
            </div>
            <div className="stat-value text-orange-500">5K+</div>
          </div>

          <div className="stat bg-base-100 shadow-lg rounded-2xl">
            <div className="stat-title text-base-content/70">
              Pets Adopted
            </div>
            <div className="stat-value text-orange-500">1.2K+</div>
          </div>

          <div className="stat bg-base-100 shadow-lg rounded-2xl">
            <div className="stat-title text-base-content/70">
              Products Sold
            </div>
            <div className="stat-value text-orange-500">8K+</div>
          </div>

          <div className="stat bg-base-100 shadow-lg rounded-2xl">
            <div className="stat-title text-base-content/70">
              Cities Covered
            </div>
            <div className="stat-value text-orange-500">64+</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
