import { Fragment } from "react";
import { NavLink } from "react-router-dom";
const App = () => {
  return (
    <Fragment>
      <header className="flex items-center justify-center py-1header gap-x-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
    </Fragment>
  );
};

export default App;
