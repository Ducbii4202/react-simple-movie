import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "swiper/css";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/" element={<Banner></Banner>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
