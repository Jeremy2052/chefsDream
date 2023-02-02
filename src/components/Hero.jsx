import React, { useEffect, useRef, useState } from "react";
import saladBowl from "../img/salad_bowl.jpg";
import ramen from "../img/ramen.jpg";
// import burger_sides from "../img/burger_sides.jpg"
import glazed_donut from "../img/glazed_donut.jpg";

const Hero = () => {
  const images = [saladBowl, ramen, glazed_donut];
  const [index, setIndex] = useState(0);
  const delay = 4000;
  const timeoutRef = useRef(null)

  const resetTimeout = () => {
    if(timeoutRef.current){
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {resetTimeout();};
  }, [index]);

  return (
    <div className="max-w-[1640px] mx-auto ">
      <div className="max-h-[500px] relative">
        {/* overlay */}
        <div className="absolute w-full h-full max-h-[500px] z-10 text-white bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            {" "}
            <span className="text-orange-500">Foods </span>Delivered
          </h1>
        </div>
        {/* add slider */}
        {/* <img className='w-full max-h-[500px] object-cover' src={images[2]} alt="/" /> */}
        <div className="m-auto overflow-hidden ">
          <div
            className="whitespace-nowrap transition ease-in duration-500"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                className="inline-block w-full max-h-[500px] object-cover"
                src={image}
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
