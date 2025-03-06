import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Hero(params) {
  const { title, height, imageUrl, isHome } = params; 
  
    const [sliderContent, setSliderContent] = useState({
      images: [
        imageUrl, 
        "https://www.tinbuilding.com/wp-content/uploads/2024/09/download-6-scaled-920x518.webp",
        "https://www.ille-et-vilaine-tourisme.bzh/app/uploads/bretagne-35/2020/06/thumbs/restaurant-jason-leung-unsplash-1920x960.jpg"
      ],
      title: ["Welcome To YumKings", "Welcome To YumKings", "Welcome To YumKings"],
      subtitle: ["Your Favorite Food Gets Even Yummier", "Your Favorite Food Gets Even Yummier", "Your Favorite Food Gets Even Yummier"] ,
      description: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic voluptatem reprehenderit alias magni eum maxime error rem saepe pariatur.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic voluptatem reprehenderit alias magni eum maxime error rem saepe pariatur.",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit hic voluptatem reprehenderit alias magni eum maxime error rem saepe pariatur."
      ]
    })
    const [contentIndex, setContentIndex] = useState(0);

  const handleSliderClick = (direction) => {
    if (direction === "forward"){
      if (contentIndex === sliderContent.images.length - 1){
        setContentIndex(0);
      }
      else{
        setContentIndex(prev => prev+1);
      }
    }

    else if(direction === "backward"){
      if (contentIndex === 0){
        setContentIndex(sliderContent.images.length - 1);
      }
      else{
        setContentIndex(prev => prev-1);
      }
    }
  }
  return (
    <section className="mb-20">
      <div
        className="hero w-full relative"
        style={{
          height: `${height}`,
          backgroundImage: `url(${sliderContent.images[contentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute left-0 top-0 inset-0 bg-black opacity-60"></div>

        {isHome ? (
          (
            <>
            <div className="flex text-center items-center justify-center absolute left-1/2 -translate-x-1/2 w-7xl h-full mt-20 mx-auto px-5 sm:px-12 mb-20 home-hero-wraper">
                
                <div className="absolute md:w-full px-5 sm:px-12 h-[50%] flex items-center justify-between">

                  <button
                  onClick={() => handleSliderClick("forward")}
                  className="text-[#FFC107] text-xl md:text-3xl bg-white flex items-center justify-center p-3 rounded-full cursor-pointer">
                    <FaArrowLeft/>
                  </button>

                  <button 
                  onClick={() => handleSliderClick("backward")}
                  className="text-[#FFC107] text-xl md:text-3xl bg-white flex items-center justify-center p-3 rounded-full cursor-pointer">
                    <FaArrowRight/>
                  </button>


                </div>

                <div className="flex flex-col justify-center items-center gap-8 w-[80%]">
                  <h1 className='section-title text-5xl md:text-6xl text-[#FFC107]'>
                    {sliderContent.title[contentIndex]}
                  </h1>

                  <h2 className='text-4xl md:text-7xl text-white'>
                    {sliderContent.subtitle[contentIndex]}
                  </h2>

                  <h3 className="text-white text-sm md:text-xl">
                    {sliderContent.description[contentIndex]}
                  </h3>

                  <div className="flex gap-10 z-20">
                    <Link className="py-3 px-6 group bg-[#FFC107] rounded-3xl cta-button text-white" to={"/about"}>
                      About More
                    </Link>

                    <Link to={"/menu"} className="py-3 px-6 group bg-[#c1564c] rounded-3xl cta-button text-white">
                      Check Menu
                    </Link>

                  </div>
                </div>

            </div>
            </>
          )
        ) : (
          <div className="absolute w-full h-full text-white flex items-center justify-center flex-col gap-2">
            <h2 className="text-5xl"> {title}</h2>

            <div className="text-xl flex items-center gap-2">
              <Link
                to={"/"}
                className="hover:text-[#FFC107] transition duration-300"
              >
                Home
              </Link>

              <span className="">
                <FaAngleDoubleRight />
              </span>

              <p>{title}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
