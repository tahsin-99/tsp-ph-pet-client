import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";
import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const data = [
    {
      id: 1,
      coverPhoto: "https://i.ibb.co.com/BVxJjNxT/pets.jpg",
      title: "Find Your Furry Friend!",
      subtitle: "Adopt, Don’t Shop — Give a Pet a Home.",
    },
    {
      id: 2,
      coverPhoto: "https://i.ibb.co.com/BVhHnK9V/food.jpg",
      title: "Because Every Pet Deserves Love",
      subtitle: "Bring happiness home today!",
    },
    {
      id: 3,
      coverPhoto: "https://i.ibb.co.com/N2ybkftQ/withowners.jpg",
      title: "Adopt a Pet, Save a Life",
      subtitle: "Join our mission to care for animals.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <motion.div
        className="sm:w-[1440px] h-full mx-auto mt-3"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
       
        <div className="text-center space-y-5 mt-5 md:w-[1200px] mx-auto">
          <AnimatedTitle
            text="Welcome"
            className="font-bold text-5xl text-white"
          />

         
          <motion.div className="mt-50 ml-8 lg:w-[1400px] lg:mx-auto">
            <Slider {...settings} className="mt-6 w-full">
              {data.map((d) => (
                <div key={d.id}>
                  <div>
                    <img
                      className="h-[450px] mx-auto w-full max-w-[1000px] rounded-xl object-cover"
                      src={d.coverPhoto}
                      alt={d.title}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>

          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-5xl font-bold text-center mt-20"
          >
            Our Services
          </motion.p>

         
          <motion.div className="mt-20 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
           
            <Link
              to="/pets"
              className="card transform transition-transform duration-150 hover:-translate-y-4 border-[#c74d2f] active:scale-95 bg-base-200 w-85 shadow-sm mx-auto"
            >
              <figure className="px-8 pt-10">
                <img
                  src="https://images.pexels.com/photos/1452717/pexels-photo-1452717.jpeg"
                  alt="Pets"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Pets</h2>
                <p>
                  Discover adorable pets waiting for a forever home. Adoption
                  brings joy to both you and your new companion. Give love, get
                  love — start your adoption journey today.
                </p>
              </div>
            </Link>

           
            <Link
              to="/petsfood"
              className="card transition-transform duration-150 hover:-translate-y-4 border-[#c74d2f] active:scale-95 bg-base-200 w-85 shadow-sm mx-auto"
            >
              <figure className="px-8 pt-10">
                <img
                  src="https://images.pexels.com/photos/8434744/pexels-photo-8434744.jpeg"
                  alt="Pet Food"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Pet Food</h2>
                <p>
                  Keep your pets strong with nutritious meals made for them. We
                  offer top-quality food for dogs, cats, birds, and more. Feed
                  them the best and see their tails wag in delight.
                </p>
              </div>
            </Link>

           
            <Link
              to="/petaccessories"
              className="card transition-transform duration-150 hover:-translate-y-4 border-[#c74d2f] active:scale-95 bg-base-200 w-85 shadow-sm mx-auto"
            >
              <figure className="px-8 pt-10">
                <img
                  src="https://images.pexels.com/photos/8625115/pexels-photo-8625115.jpeg"
                  alt="Accessories"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Accessories</h2>
                <p>
                  Explore stylish and comfortable accessories your pets deserve.
                  From cozy beds to playful toys, we’ve got it all. Make every
                  moment fun and fashionable for your furry friend.
                </p>
              </div>
            </Link>

           
            <Link
              to="/petcare"
              className="card transition-transform duration-150 hover:-translate-y-4 border-[#c74d2f] active:scale-95 bg-base-200 w-85 shadow-sm mx-auto"
            >
              <figure className="px-8 pt-10">
                <img
                  src="https://images.pexels.com/photos/17605540/pexels-photo-17605540.jpeg"
                  alt="Pet Care"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Pet Care Products</h2>
                <p>
                  Ensure your pet’s health with trusted care products. Our range
                  includes shampoos, brushes, and hygiene essentials. Keep your
                  furry buddy clean, fresh, and happy every day.
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.div> 
    </>
  );
};

export default Banner;
