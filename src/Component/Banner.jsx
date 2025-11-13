import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";

const Banner = () => {
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
      <div className="mt-50">
        <Slider {...settings} className="mt-6 w-full">
          {data.map((d) => (
            <div key={d.id}>
              <div>
                <img
                  className="h-[450px]
                            mx-auto w-full max-w-[1000px] rounded-xl object-cover"
                  src={d.coverPhoto}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mt-80  p-6 grid grid-cols-1 sm:grid-cols-4 gap-5">
        <Link to="/pets" className="card bg-base-200 w-85 shadow-sm mx-auto">
          <figure className="px-8 pt-10">
            <img
              src="https://images.pexels.com/photos/1452717/pexels-photo-1452717.jpeg?_gl=1*1tg4rmb*_ga*Njg3NjI2NTY3LjE3NTE4OTUzNTA.*_ga_8JE65Q40S6*czE3NjI4NjA1MDIkbzMkZzEkdDE3NjI4NjA1NjMkajU5JGwwJGgw"
              alt=""
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Pets</h2>
            <p>
              Discover adorable pets waiting for a forever home. Adoption brings
              joy to both you and your new companion. Give love, get love —
              start your adoption journey today."
            </p>
            <div className="card-actions"></div>
          </div>
        </Link>
        <Link
          to="/petsfood"
          className="card bg-base-200 w-85 shadow-sm mx-auto"
        >
          <figure className="px-8 pt-10">
            <img
              src="https://images.pexels.com/photos/8434744/pexels-photo-8434744.jpeg?_gl=1*1f6d6e8*_ga*Njg3NjI2NTY3LjE3NTE4OTUzNTA.*_ga_8JE65Q40S6*czE3NjI4NjA1MDIkbzMkZzEkdDE3NjI4NjA2NTEkajMxJGwwJGgw"
              alt=""
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Pet Food</h2>
            <p>
              Keep your pets strong with nutritious meals made for them. We
              offer top-quality food for dogs, cats, birds, and more. Feed them
              the best and see their tails wag in delight.
            </p>
            <div className="card-actions"></div>
          </div>
        </Link>
        <Link
          to="/petaccessories"
          className="card bg-base-200 w-85 shadow-sm mx-auto"
        >
          <figure className="px-8 pt-10">
            <img
              src="https://images.pexels.com/photos/8625115/pexels-photo-8625115.jpeg?_gl=1*bdzjc2*_ga*Njg3NjI2NTY3LjE3NTE4OTUzNTA.*_ga_8JE65Q40S6*czE3NjI4NjA1MDIkbzMkZzEkdDE3NjI4NjA4MzQkajgkbDAkaDA."
              alt=""
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
            <div className="card-actions"></div>
          </div>
        </Link>
        <Link
          to="/petcare"
          className="card bg-base-200 w-85 shadow-sm
      mx-auto"
        >
          <figure className="px-8 pt-10">
            <img
              src="https://images.pexels.com/photos/17605540/pexels-photo-17605540.jpeg?_gl=1*1gp696w*_ga*Njg3NjI2NTY3LjE3NTE4OTUzNTA.*_ga_8JE65Q40S6*czE3NjI4NjA1MDIkbzMkZzEkdDE3NjI4NjA5MjMkajIyJGwwJGgw"
              alt=""
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
            <div className="card-actions"></div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Banner;
