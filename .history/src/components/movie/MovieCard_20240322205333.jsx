import React from "react";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path } = item;
  return (
    <div className="h-full p-3 text-white rounded-lg movie-cart bg-slate-800">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full rounded-lg h-[250px] object-cover mb-5"
      />
      <h3 className="mb-3 text-xl font-bold ">{title}</h3>
      <div className="flex items-center justify-between mb-10 text-sm opacity-50">
        <span>{new Date(release_date).getFullYear()}</span>
        <span>{vote_average}</span>
      </div>
      <button className="w-full px-6 py-3 capitalize rounded-lg bg-primary">
        Watch now
      </button>
    </div>
  );
};

export default MovieCard;
