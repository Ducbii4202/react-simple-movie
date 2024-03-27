import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";

const MoiveDetailPage = () => {
  const { moiveId } = useParams();
  const { data } = useSWR(
    `
  https://api.themoviedb.org/3/movie/${moiveId}${apiKey}`,
    fetcher
  );
  console.log("data: ", data);
  return (
    <>
      <div
        className="w-full h-[screen]"
        style={{
          backgroundImage: `https://image.tmdb.org/t/p/w500/${data.poster_path}`,
        }}
      ></div>
    </>
  );
};

export default MoiveDetailPage;
