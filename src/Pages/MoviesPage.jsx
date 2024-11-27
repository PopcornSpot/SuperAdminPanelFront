import React from "react";

const MoviesPage = () => {
  const movies = [
    {
      id: 1,
      title: "Amaran",
      genre: "Drama",
      rating: 9.3,
      image: "https://m.media-amazon.com/images/M/MV5BNTI4NDdlOWMtZTcxYS00MGMxLTk1MDctODUyOTFjZTQ3YTIxXkEyXkFqcGdeQXVyMTQ4MTg3Njcx._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 2,
      title: "Vettaiyan",
      genre: "Crime",
      rating: 9.2,
      image: "https://images.ottplay.com/images/vettaiyan-1725688439.jpg",
    },
    {
      id: 3,
      title: "Lucky Basker",
      genre: "Action",
      rating: 9.0,
      image: "https://i.ytimg.com/vi/CpHSazUTSC8/maxresdefault.jpg",
    },
    {
      id: 4,
      title: "Kanguva",
      genre: "Crime",
      rating: 8.9,
      image: "https://newsroompost.com/wp-content/uploads/2023/11/kanguva-1.jpg",
    },
    {
      id: 5,
      title: "Sorgavasal",
      genre: "Drama",
      rating: 8.8,
      image: "https://static.moviecrow.com/marquee/first-look-of-rj-balajis-upcoming-movie-sorgavasal-released/236346_thumb_665.jpg",
    },
    {
      id: 6,
      title: "Zebra",
      genre: "Drama",
      rating: 8.8,
      image: "https://i.ytimg.com/vi/6ihPRgjVrH4/maxresdefault.jpg",
    },
    // {
    //   id: 7,
    //   title: "Forrest Gump",
    //   genre: "Drama",
    //   rating: 8.8,
    //   image: "https://via.placeholder.com/300x450?text=The+Dark+Knight",
    // },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Movies</h1>
      <div className="grid grid-cols-1 sm:max-lg:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white shadow rounded-lg overflow-hidden border border-gray-200"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-56 object-center"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {movie.title}
              </h2>
              <p className="text-gray-600">Genre: {movie.genre}</p>
              <p className="text-gray-600">Language: Tamil</p>
              <p className="text-gray-600">Rating: {movie.rating}</p>
              
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
