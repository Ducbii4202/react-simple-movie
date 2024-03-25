import { useParams } from "react-router-dom";
import useSWR from "swr";

const MovieDetailPage = () => {
  const { movieId } = useParams();

  return <div>Movie Detail Page</div>;
};

export default MovieDetailPage;
