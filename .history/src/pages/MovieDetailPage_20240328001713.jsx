import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";
//https://api.themoviedb.org/3/collection/

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `
    https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres } = data;
  return (
    <>
      <div className="w-full h-[600px] relative ">
        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-3xl"></div>

        <div
          className="w-full h-full bg-no-repeat bg-cover rounded-3xl"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[500px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          className="object-cover w-full h-full rounded-xl"
          alt=""
        />
      </div>
      <h1 className="mb-10 text-3xl font-bold text-center text-primary">
        {title}
      </h1>
      {genres.lenght > 0 && (
        <div className="flex items-center mb-10 gap-x-5">
          {genres.map((item) => (
            <span key={item.id}>{item.name}</span>
          ))}
        </div>
      )}
    </>
  );
};

export default MovieDetailPage;
