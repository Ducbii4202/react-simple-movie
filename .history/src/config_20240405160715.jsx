export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "b732faa46cbc35a7c4297401454ffbb0";
const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key={apiKey}`,
  getMovieDetail: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
  getMovieMeta: (movieId, type) =>
    `${tmdbEndpoint}/${movieId}/$(type}?api_key=${apiKey}`,
  getMovieVideos: (movieId) =>
    `${tmdbEndpoint}${movieId}/videos?api_key=${apiKey}`,
  getMovieSimilar: (movieId) =>
    `${tmdbEndpoint}/${movieId}/similar?api_key=${apiKey}`,
};
