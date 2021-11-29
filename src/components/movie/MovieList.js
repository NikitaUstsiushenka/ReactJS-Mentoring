import React from 'react';
import MovieItem from './MovieItem';
import './MovieList.scss';
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

let movies = [
  {
    id: 1,
    image: 'test',
    title: 'Pulp Fiction',
    genre: 'Action & Adventure',
    releaseDate: 1999,
  }
];

const MovieList = () => {
  return (
    <div className="container">
      <Nav tabs className="tabs">
        <NavItem className="nav-item">
          <NavLink>
            {'All'}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            {'Documentary'}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            {'Comedy'}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            {'Horror'}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            {'Crime'}
          </NavLink>
        </NavItem>
      </Nav>
      <p>{movies.length}</p>
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          image={movie.image}
          title={movie.title}
          genre={movie.genre}
          releaseDate={movie.releaseDate}
        />
      ))}
    </div>
  );
};

export default MovieList;
