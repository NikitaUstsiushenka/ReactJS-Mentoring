import React, { useEffect, useState } from 'react';
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
import { getMovies } from '../../store/action/movies';

const MovieList = ({ movies }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(Tabs.ALL);
  const [sortBy, setSortBy] = useState(SortParams.RELEASE_DATE);

  useEffect(() => {
    dispatch(getMovies({
      searchBy: 'genres',
      filter: activeTab === Tabs.ALL ? '' : activeTab,
      sortBy,
      limit: DEFAULT_PAGE_SIZE,
    }));
  }, [activeTab, sortBy]);

  return (
    <div className="container">
      <Nav tabs className="tabs">
        <NavItem className="nav-item">
          <NavLink active={activeTab === Tabs.ALL} onClick={() => setActiveTab(Tabs.ALL)}>
            {'All'}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={activeTab === Tabs.DOCUMENTARY} onClick={() => setActiveTab(Tabs.DOCUMENTARY)}>
            {'Documentary'}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={activeTab === Tabs.COMEDY} onClick={() => setActiveTab(Tabs.COMEDY)}>
            {'Comedy'}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={activeTab === Tabs.HORROR} onClick={() => setActiveTab(Tabs.HORROR)}>
            {'Horror'}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={activeTab === Tabs.CRIME} onClick={() => setActiveTab(Tabs.CRIME)}>
            {'Crime'}
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="tabs-content" activeTab="1">
        <TabPane tabId="1">
          <div className="sort-dropdown-component">
            <div>
              <h5 className="count-label">{`${movies?.totalAmount} movies found`}</h5>
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
                onChange={(e) => setSortBy(e.target.value)}
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
          <div className="movies-container">
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
