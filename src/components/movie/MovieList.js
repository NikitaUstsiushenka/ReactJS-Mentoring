import React, { useEffect } from 'react';
import MovieItem from './MovieItem';
import './MovieList.scss';
import {
  Input,
  Label,
  Nav,
  NavItem,
  NavLink, TabContent, TabPane,
} from 'reactstrap';
import { DEFAULT_PAGE_SIZE, SortParams, Tabs } from '../../utils/utils';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies as getMoviesSelector } from '../../store/selectors';
import { getMovies } from '../../store/action/movies';
import { useSearchParams } from 'react-router-dom';

const MovieList = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const movies = useSelector(getMoviesSelector);

  // search query params
  const sortBy = searchParams.get('sortBy');
  const genre = searchParams.get('genre');

  const handleSortChange = (e) => {
    const updatedParams = Object.fromEntries(searchParams.entries());
    Object.assign(updatedParams, { sortBy: e.target.value });
    setSearchParams(updatedParams);
  };

  const handleTabChange = (tabName) => {
    const updatedParams = Object.fromEntries(searchParams.entries());
    Object.assign(updatedParams, { genre: tabName });
    setSearchParams(updatedParams);
  };

  useEffect(() => {
    dispatch(getMovies({
      searchBy: 'genres',
      filter: genre === Tabs.ALL ? '' : genre,
      sortBy,
      limit: DEFAULT_PAGE_SIZE,
    }));
  }, [genre, sortBy]);

  return (
    <div className="container">
      <Nav tabs className="tabs">
        <NavItem className="nav-item">
          <NavLink
            active={genre === Tabs.ALL || !genre}
            onClick={() => handleTabChange(Tabs.ALL)}
          >
            {'All'}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={genre === Tabs.DOCUMENTARY}
            onClick={() => handleTabChange(Tabs.DOCUMENTARY)}
          >
            {'Documentary'}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={genre === Tabs.COMEDY}
            onClick={() => handleTabChange(Tabs.COMEDY)}
          >
            {'Comedy'}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={genre === Tabs.HORROR}
            onClick={() => handleTabChange(Tabs.HORROR)}
          >
            {'Horror'}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            active={genre === Tabs.CRIME}
            onClick={() => handleTabChange(Tabs.CRIME)}
          >
            {'Crime'}
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="tabs-content" activeTab="1">
        <TabPane tabId="1">
          <div className="sort-dropdown-component">
            <div>
              <h5 id="count-label" className="count-label">
                {`${movies?.totalAmount} movie${movies?.totalAmount === 1 ? '' : 's'} found`}
              </h5>
            </div>
            <div className="sort-dropdown-container">
              <Label for="sort-dropdown" className="sort-dropdown-label text-muted">
                {'Sort by'}
              </Label>
              <Input
                id="sort-dropdown"
                name="sort-dropdown"
                className="sort-dropdown"
                type="select"
                onChange={handleSortChange}
              >
                <option key={SortParams.RELEASE_DATE} value={SortParams.RELEASE_DATE}>
                  {'RELEASE DATE'}
                </option>
                <option key={SortParams.RATING} value={SortParams.RATING}>
                  {'RATING'}
                </option>
              </Input>
            </div>
          </div>
          <div id="movies-container" className="movies-container">
            {movies.data?.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </div>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default MovieList;
