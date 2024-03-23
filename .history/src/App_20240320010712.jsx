import { Fragment } from "react";
// import { NavLink } from "react-router-dom";
const App = () => {
  return (
    <Fragment>
      <header className="flex items-center justify-center py-10 mb-10 text-white header gap-x-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[400px] page-container">
        <div className="relative w-full h-full rounded-lg">
          <img
            src="https://assets.puzzlefactory.pl/puzzle/363/504/original.jpg"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute bottom-0 w-full left-5"></div>
        </div>
      </section>
    </Fragment>
  );
};

export default App;
