import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";
//https://api.themoviedb.org/3/collection/

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/collection/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  console.log("data: ", data);
  return <div>Movie Detail Page</div>;
};

export default MovieDetailPage;
