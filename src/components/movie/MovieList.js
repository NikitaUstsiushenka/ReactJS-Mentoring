import React, { useState } from 'react';
import MovieItem from './MovieItem';
import './MovieList.scss';
import {
  Nav,
  NavItem,
  NavLink, TabContent, TabPane,
} from 'reactstrap';
import { Tabs } from '../../utils/utils';
import { useDispatch } from 'react-redux';

const MovieList = ({ movies }) => {
  const dispatch = useDispatch();
  const [ activeTab, setActiveTab ] = useState(Tabs.ALL);
  const handleTab = (tabName) => dispatch({ type: 'SEARCH_MOVIES', payload: tabName });

  return (
    <div className="container">
      <Nav tabs className="tabs">
        <NavItem className="nav-item">
          <NavLink active={activeTab === Tabs.ALL} onClick={() => {
            setActiveTab(Tabs.ALL);
            handleTab(Tabs.ALL);
          }}>
            {'All'}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={activeTab === Tabs.DOCUMENTARY} onClick={() => {
            setActiveTab(Tabs.DOCUMENTARY);
            handleTab(Tabs.DOCUMENTARY);
          }}>
            {'Documentary'}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={activeTab === Tabs.COMEDY} onClick={() => {
            setActiveTab(Tabs.COMEDY);
            handleTab(Tabs.COMEDY);
          }}>
            {'Comedy'}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={activeTab === Tabs.HORROR} onClick={() => {
            setActiveTab(Tabs.HORROR);
            handleTab(Tabs.HORROR);
          }}>
            {'Horror'}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active={activeTab === Tabs.CRIME} onClick={() => {
            setActiveTab(Tabs.CRIME);
            handleTab(Tabs.CRIME);
          }}>
            {'Crime'}
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent className="tabs-content" activeTab="1">
        <TabPane tabId="1">
          <h5 className="count-label">{`${movies.length} movies found`}</h5>
          <div className="movies-container">
            {movies.map((movie) => (
              <MovieItem
                key={movie.id}
                movie={movie}
              />
            ))}
          </div>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default MovieList;
