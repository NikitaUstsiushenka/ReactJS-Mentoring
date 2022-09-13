import React from 'react';
import './Header.scss';
import Search from '../search/Search';
import MovieDetails from '../movie/MovieDetails';
import { useSearchParams } from 'react-router-dom';

const Header = () => {
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get('movie');

  return !movieId ? <Search /> : <MovieDetails movieId={Number(movieId)} />;
};

export default Header;
