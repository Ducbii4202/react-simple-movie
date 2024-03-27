import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";

const MoiveDetailPage = () => {
  const { moiveId } = useParams();
  const { data } = useSWR(
    `
  https://api.themoviedb.org/3/movie/${moiveId}?api_key${apiKey}`,
    fetcher
  );
  console.log("data: ", data);
  return <div>Moive Detail Page</div>;
};

export default MoiveDetailPage;
