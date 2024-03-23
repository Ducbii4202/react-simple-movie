import { Fragment } from "react";

import MovieList from "./components/movie/MovieList";
import Banner from "./components/banner/Banner";
import "swiper/css";

const App = () => {
  return (
    <Fragment>
      <header className="flex items-center justify-center py-10 mb-5 text-white header gap-x-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <Banner></Banner>
      <section className="pb-20 moive-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Now pLaying
        </h2>
        <MovieList></MovieList>
      </section>
      <section className="pb-20 moive-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Top rated
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="pb-20 moive-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Trending
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
};

export default App;
