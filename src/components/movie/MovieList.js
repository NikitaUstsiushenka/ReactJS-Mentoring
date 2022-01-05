import React, { useEffect, useState } from 'react';
import MovieItem from './MovieItem';
import './MovieList.scss';
import {
  Col,
  Input,
  Nav,
  NavItem,
  NavLink, TabContent, TabPane,
} from 'reactstrap';
import { Tabs } from '../../utils/utils';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../store/action/movies';

const MovieList = ({ movies }) => {
  const dispatch = useDispatch();
  const [ activeTab, setActiveTab ] = useState(Tabs.ALL);

  useEffect(() => {
    dispatch(getMovies({
      searchBy: 'genres',
      filter: activeTab === Tabs.ALL ? '' : activeTab
    }));
  }, [activeTab]);

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
          <h5 className="count-label">{`${movies?.totalAmount} movies found`}</h5>
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
