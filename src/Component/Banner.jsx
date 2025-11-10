import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <div>
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
      <div>
        
      </div>
    </>
  );
};

export default Banner;
