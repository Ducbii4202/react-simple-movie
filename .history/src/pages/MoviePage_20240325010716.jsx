import useSWR from "swr";
import MovieList from "../components/movie/MovieList";
import { fetcher } from "../config";

const MoviePage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=b732faa46cbc35a7c4297401454ffbb0`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <div className="py-10 ">
      <div className="grid grid-cols-4 gap-10"></div>
    </div>
  );
};

export default MoviePage;
