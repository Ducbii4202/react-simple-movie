export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "b732faa46cbc35a7c4297401454ffbb0";
export const tmdbAPI = {
  getMovieList: (type) =>
    `https://api.themoviedb.org/3/movie/${type}?api_key=b732faa46cbc35a7c4297401454ffbb0`,
};
