import React from "react";

const HomePage = () => {
  return (
    <div>
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
    </div>
  );
};

export default HomePage;
