import React from "react";

const MoviesPage = () => {
  const movies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      genre: "Drama",
      rating: 9.3,
      image: "https://via.placeholder.com/300x450?text=The+Dark+Knight",
    },
    {
      id: 2,
      title: "The Godfather",
      genre: "Crime",
      rating: 9.2,
      image: "https://via.placeholder.com/300x450?text=The+Dark+Knight",
    },
    {
      id: 3,
      title: "The Dark Knight",
      genre: "Action",
      rating: 9.0,
      image: "https://via.placeholder.com/300x450?text=The+Dark+Knight",
    },
    {
      id: 4,
      title: "Pulp Fiction",
      genre: "Crime",
      rating: 8.9,
      image: "https://via.placeholder.com/300x450?text=The+Dark+Knight",
    },
    {
      id: 5,
      title: "Forrest Gump",
      genre: "Drama",
      rating: 8.8,
      image: "https://via.placeholder.com/300x450?text=The+Dark+Knight",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white shadow rounded-lg overflow-hidden border border-gray-200"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {movie.title}
              </h2>
              <p className="text-gray-600">Genre: {movie.genre}</p>
              <p className="text-gray-600">Rating: {movie.rating}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
