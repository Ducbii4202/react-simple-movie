import { SwiperSlide, Swiper } from "swiper/react";
import MovieCard from "./MovieCard";
import "swiper/css";
import useSWR from "swr";
import { fetcher } from "../../config";
//https://api.themoviedb.org/3/movie/now_playing?api_key=b732faa46cbc35a7c4297401454ffbb0

const MovieList = () => {
  const { data, error } = useSWR(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=b732faa46cbc35a7c4297401454ffbb0",
    fetcher
  );
  console.log("data, error: ", data, error);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard></MovieCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MovieList;
