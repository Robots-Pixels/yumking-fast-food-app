import React from "react";


const images = [
    "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2023/12/thumb.jpg",
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/10/Rost-beef-sirloin-with-pickled-peppercorn-sauce-44e9182.jpg",
    "https://www.allrecipes.com/thmb/EyBGvx0V0ocb6gSMcIrMkm7QF-Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/40374english-roast-beefReneePaj4x3-b24f992a42aa4f39883ada7c45bcf7a2.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfOCB3lvURPwYxZ7BQB6y5eGX9oWVVG6CtQ&s",

  ];
  
const Test = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={src}
              alt={`Gallery ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Bouton "Load More" */}
      <div className="flex justify-center mt-6">
        <button className="bg-[#FFC107] text-white px-6 py-2 rounded-full shadow-md hover:bg-yellow-500 transition">
          Load more
        </button>
      </div>
    </div>
  );
};

export default Test;
