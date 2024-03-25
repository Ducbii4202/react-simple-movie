import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";
//https://api.themoviedb.org/3/collection/

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/collection/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  console.log("data: ", data);

  return (
    <>
      <div className="w-full h-screen bg-no-repeat bg-cover ">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${data.backdrop_path})`,
          }}
        ></div>
      </div>
    </>
  );
};

export default MovieDetailPage;
