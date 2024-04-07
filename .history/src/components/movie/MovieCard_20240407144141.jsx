import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { tmdbAPI } from "../../config";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";

// eslint-disable-next-line react/prop-types
const MovieCard = ({ item }) => {
  // eslint-disable-next-line react/prop-types
  const { title, vote_average, release_date, poster_path, id } = item;

  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-cart bg-slate-800">
      <img
        src={tmdbAPI.image500(poster_path)}
        alt=""
        className="w-full rounded-lg h-[250px] object-cover mb-5"
      />
      <div className="flex flex-col flex-1">
        <h3 className="mb-3 text-xl font-bold ">{title}</h3>
        <div className="flex items-center justify-between mb-10 text-sm opacity-50">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <Button bgColor="secondary" onClick={() => navigate(`/movie/${id}`)}>
          Watch Now
        </Button>
      </div>
    </div>
  );
};
MovieCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    id: PropTypes.string,
  }),
};

function FallbackComponent() {
  return <p className="text-red-400 bg-red-50">Something went wrong with this component </p>
}

export default withErrorBoundary(MovieCard, {
  FallbackComponent: 
});
