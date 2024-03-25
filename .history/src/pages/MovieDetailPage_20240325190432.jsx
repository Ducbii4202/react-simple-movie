import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  console.log("param: ", param);
  return <div>Movie Detail Page</div>;
};

export default MovieDetailPage;
