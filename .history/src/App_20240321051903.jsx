import { Fragment } from "react";
// import { NavLink } from "react-router-dom";
const App = () => {
  return (
    <Fragment>
      <header className="flex items-center justify-center py-10 mb-5 text-white header gap-x-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[500px] page-container mb-20">
        <div className="relative w-full h-full rounded-lg">
          <div className="absolute inset-0 rounded-lg overlay bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] "></div>
          <img
            src="https://assets.puzzlefactory.pl/puzzle/363/504/original.jpg"
            alt=""
            className="object-cover w-full h-full rounded-lg"
          />
          <div className="absolute w-full text-white bottom-5 left-5">
            <h2 className="mb-5 text-3xl font-bold">Avengers: Endgame</h2>
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
            <button className="px-6 py-3 font-medium rounded-lg bg-primary">
              Watch Now
            </button>
          </div>
        </div>
      </section>
      <section className="pb-10 moive-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Now pLaying
        </h2>
        <div className="grid grid-cols-4 gap-10 movie-list ">
          <div className="p-3 text-white rounded-lg movie-cart bg-slate-800">
            <img
              src="https://th.bing.com/th/id/R.fc7726568a4c51f0640f22199f233b20?rik=FyIoE3EbBMt8Dw&riu=http%3a%2f%2fwww.filmofilia.com%2fwp-content%2fuploads%2f2012%2f02%2fThe_Avengers.jpg&ehk=H06Lke4LHSAgRMtY72OV%2blnz7gpEPLFJd9qX3W6J99o%3d&risl=&pid=ImgRaw&r=0"
              alt=""
              className="w-full rounded-lg h-[250px] object-cover mb-5"
            />
            <h3 className="mb-3 text-xl font-bold ">Spiderman: Homecoming</h3>
            <div className="flex items-center justify-between mb-10 text-sm opacity-50">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="w-full px-6 py-3 capitalize rounded-lg bg-primary">
              Watch now
            </button>
          </div>
        </div>
      </section>
      <section className="pb-10 moive-layout page-container">
        <h2 className="mb-10 text-3xl font-bold text-white capitalize">
          Top rated
        </h2>
        <div className="grid grid-cols-4 gap-10 movie-list ">
          <div className="p-3 text-white rounded-lg movie-cart bg-slate-800">
            <img
              src="https://th.bing.com/th/id/R.fc7726568a4c51f0640f22199f233b20?rik=FyIoE3EbBMt8Dw&riu=http%3a%2f%2fwww.filmofilia.com%2fwp-content%2fuploads%2f2012%2f02%2fThe_Avengers.jpg&ehk=H06Lke4LHSAgRMtY72OV%2blnz7gpEPLFJd9qX3W6J99o%3d&risl=&pid=ImgRaw&r=0"
              alt=""
              className="w-full rounded-lg h-[250px] object-cover mb-5"
            />
            <h3 className="mb-3 text-xl font-bold ">Spiderman: Homecoming</h3>
            <div className="flex items-center justify-between mb-10 text-sm opacity-50">
              <span>2017</span>
              <span>7.4</span>
            </div>
            <button className="w-full px-6 py-3 capitalize rounded-lg bg-primary">
              Watch now
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default App;
