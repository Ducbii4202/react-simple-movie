import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
  const { movieId } = useParams();

  return <div>Movie Detail Page</div>;
};

export default MovieDetailPage;
