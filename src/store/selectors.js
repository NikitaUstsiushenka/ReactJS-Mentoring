const getMovies = (state) => state.movieReducer.movies;

const getMovie = (movieId) => {
  return (state) => state.movieReducer.movies.data.find(movie => movie.id === movieId);
};

const getModalWindowParams = (state) => state.modalWindowReducer;

export {
  getMovies,
  getMovie,
  getModalWindowParams,
};
