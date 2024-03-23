import React from "react";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path } = item;
  return (
    <div className="p-3 text-white rounded-lg movie-cart bg-slate-800">
      <img
        src="https://th.bing.com/th/id/R.fc7726568a4c51f0640f22199f233b20?rik=FyIoE3EbBMt8Dw&riu=http%3a%2f%2fwww.filmofilia.com%2fwp-content%2fuploads%2f2012%2f02%2fThe_Avengers.jpg&ehk=H06Lke4LHSAgRMtY72OV%2blnz7gpEPLFJd9qX3W6J99o%3d&risl=&pid=ImgRaw&r=0"
        alt=""
        className="w-full rounded-lg h-[250px] object-cover mb-5"
      />
      <h3 className="mb-3 text-xl font-bold ">{title}</h3>
      <div className="flex items-center justify-between mb-10 text-sm opacity-50">
        <span>{new Date(release_date).getFullYear}</span>
        <span>{vote_average}</span>
      </div>
      <button className="w-full px-6 py-3 capitalize rounded-lg bg-primary">
        Watch now
      </button>
    </div>
  );
};

export default MovieCard;
