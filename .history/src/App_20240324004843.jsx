import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/css";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import Banner from "./components/banner/Banner";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>

          <Route path="/" element={<Banner></Banner>
          <HomePage></HomePage>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
