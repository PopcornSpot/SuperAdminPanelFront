import React, { useState, useEffect } from "react";

const FullScreenCarousel = () => {
  const images = [
    "https://moviegalleri.net/wp-content/uploads/2023/12/Thalapathy-Vijay-The-Greatest-Of-All-Time-GOAT-Movie-First-Look-Poster-HD.jpg",
    "https://moviegalleri.net/wp-content/uploads/2024/02/Sivakarthikeyan-Amaran-Movie-First-Look-Poster-HD.jpg",
    "https://m.media-amazon.com/images/M/MV5BZDhlMTUzNTYtZWIwNS00YmU5LTgzNGUtOTg3ZjhlN2E4MGM2XkEyXkFqcGc@._V1_.jpg",
    "https://e1.pxfuel.com/desktop-wallpaper/1004/697/desktop-wallpaper-the-intense-first-look-poster-of-kamal-hassan-vikram-is-out-fans-excited-vikram-movie-kamal-haasan-thumbnail.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next image every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className={`relative w-full h-screen bg-black overflow-hidden `}>
      {/ Carousel Container /}
      <div
        className={`absolute inset-0 flex transition-transform duration-70`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`w-full h-full object-cover flex-shrink-0`}
          />
        ))}
      </div>

      
      

      {/ Indicators /}
      <div className={`absolute bottom-12 w-full flex justify-center space-x-3`}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>

      {/ Action Buttons /}
      <div className={`absolute bottom-1 w-full flex justify-center space-x-4`}>
        <button className={`px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none transition-transform transform hover:scale-105`}>
          Edit
        </button>
        <button className={`px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 focus:outline-none transition-transform transform hover:scale-105`}>
          Delete
        </button>
      </div>
    </div>
  );
};



export default FullScreenCarousel;
