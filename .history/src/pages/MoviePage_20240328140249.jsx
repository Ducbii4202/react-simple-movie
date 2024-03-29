import useSWR from "swr";

import { fetcher } from "../config";
import MovieCard from "../components/movie/MovieCard";
import { useEffect, useState } from "react";
import useDebounce from "../hook/useDebounce";

//https://api.themoviedb.org/3/search/movie

const MoviePage = () => {
  const [filter, setFilter] = useState("");
  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/movie/popular?api_key=b732faa46cbc35a7c4297401454ffbb0"
  );
  const filterDebounce = useDebounce(filter, 500);
  const hanldeFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const { data } = useSWR(url, fetcher);
  useEffect(() => {
    if (filterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=b732faa46cbc35a7c4297401454ffbb0&query=${filterDebounce}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=b732faa46cbc35a7c4297401454ffbb0`
      );
    }
  }, [filterDebounce]);
  const movies = data?.results || [];
  return (
    <div className="py-10 page-container">
      <div className="flex mb-10">
        <div className="flex-1">
          <input
            type="text"
            className="w-full p-4 font-medium text-white outline-none bg-slate-800"
            placeholder="Type here to search ..."
            onChange={hanldeFilterChange}
          />
        </div>
        <button className="p-4 text-white bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-10">
        {movies.length > 0 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default MoviePage;
