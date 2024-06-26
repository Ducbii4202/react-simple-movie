import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

// eslint-disable-next-line react/prop-types
const MovieList = ({ type = "now_playing" }) => {
  const { data, error } = useSWR(tmdbAPI.getMovieList(type), fetcher);
  const isLoading = !data && !error;
  const movies = data?.results || [];

  return (
    <div className="movie-list">
      {!isLoading && <p>loading</p>}
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
MovieList.propTypes = {
  type: PropTypes.string.isRequired,
};
// eslint-disable-next-line react-refresh/only-export-components
function FallbackComponent() {
  return (
    <p className="text-red-400 bg-red-50">
      Something went wrong with this component{" "}
    </p>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export default withErrorBoundary(MovieList, {
  FallbackComponent,
});
