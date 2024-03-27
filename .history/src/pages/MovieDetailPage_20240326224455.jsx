import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey } from "../config";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `
        https://api.themoviedb.org/3/movie/${movieId}${apiKey}`
  );
  return (
    <>
      <div
        className="w-full h-screen"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`,
        }}
      ></div>
    </>
  );
};

export default MovieDetailPage;
