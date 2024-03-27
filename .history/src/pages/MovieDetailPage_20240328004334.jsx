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
  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <div className="py-10">
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

      {genres.length > 0 && (
        <div className="flex items-center justify-center mb-10 gap-x-5">
          {genres.map((item) => (
            <span
              key={item.id}
              className="px-4 py-2 border rounded border-primary text-primary"
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
      <p className="leading-relaxed text-center max-w-[600px] mx-auto mb-10">
        {overview}
      </p>
      <MovieCredits></MovieCredits>
    </div>
  );
};

function MovieCredits() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `
    https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
    fetcher
  );

  if (!data) return null;
  const { cast } = data;
  return (
    <>
      <h2 className="mb-10 text-2xl text-center">Casts</h2>
      <div className="grid grid-cols-4 gap-5"></div>
    </>
  );
}

function CastsItem() {
return (
  
)
}
export default MovieDetailPage;
