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
      <div className="w-full h-[600px]">
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
          className="w-full h-full bg-no-repeat bg-cover rounded-3xl"
          }}
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
      </div>
    </>
  );
};

export default MovieDetailPage;
