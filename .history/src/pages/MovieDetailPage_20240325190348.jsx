import { useParams } from "react-router-dom";

const MovieDetailPage = () => {
  const param = useParams();
  console.log("param: ", param);
  return <div>Movie Detail Page</div>;
};

export default MovieDetailPage;
