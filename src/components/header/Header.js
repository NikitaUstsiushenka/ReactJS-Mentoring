import React from 'react';
import './Header.scss';
import Search from '../search/Search';
import { Button } from 'reactstrap';
import backgroundImage from '../../../public/img/background.jpg';

const Header = () => {
  return (
    <div className="header">
      <div className="background" style={{'backgroundImage': `url(${backgroundImage})`}}>
        <div className="blur"/>
      </div>
      <Button className="btn-add-movie">
        {'+ Add movie'}
      </Button>
      <div className="search">
        <h2 className="title">{'FIND YOUR MOVIE'}</h2>
        <Search />
      </div>
    </div>
  );
};

export default Header;
