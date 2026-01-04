import { Link } from "react-router";

const CTA = () => {
  return (
    <section className="py-20 mt-80 bg-gradient-to-r from-orange-300 to-orange-600">
      <div className="max-w-6xl mx-auto px-5 text-center text-white">
        <h2 className="text-4xl font-bold mb-5">
          Give a Loving Home to a Pet Today 🐾
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-white/90">
          Adopt pets, buy quality food & accessories, and care products
          all in one trusted platform.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/petsandsupplies"
            className="btn bg-white text-orange-500 hover:bg-base-200 rounded-full px-8"
          >
            Explore Products
          </Link>

          <Link
            to="/pets"
            className="btn btn-outline text-white border-white hover:bg-white hover:text-orange-500 rounded-full px-8"
          >
            Adopt a Pet
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
