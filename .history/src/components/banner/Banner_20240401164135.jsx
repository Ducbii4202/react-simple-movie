import useSWR from "swr";
import { fetcher } from "../../config";
import { SwiperSlide, Swiper } from "swiper/react";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=b732faa46cbc35a7c4297401454ffbb0`,
    fetcher
  );
  const movies = data?.results || [];

  return (
    <section className="h-[800px] mb-20 overflow-hidden banner page-container select-none">
      <Swiper grabCursor="true" slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

// eslint-disable-next-line react/prop-types
function BannerItem({ item }) {
  // eslint-disable-next-line react/prop-types
  const { title, poster_path, id } = item;
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-full rounded-lg">
      <div className="absolute inset-0 rounded-lg overlay bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] "></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="object-center object-top w-full h-full rounded-lg"
      />
      <div className="absolute w-full text-white bottom-5 left-5">
        <h2 className="mb-5 text-3xl font-bold">{title}</h2>
        <div className="flex items-center mb-8 gap-x-3 ">
          <span className="px-4 py-2 border border-white rounded-md">
            Action
          </span>
          <span className="px-4 py-2 border border-white rounded-md">
            Adventure
          </span>
          <span className="px-4 py-2 border border-white rounded-md">
            Drama
          </span>
        </div>
        <Button onClick={() => navigate(`/movie/${id}`)} className="w-auto ">
          Watch Now
        </Button>
      </div>
    </div>
  );
}

export default Banner;
