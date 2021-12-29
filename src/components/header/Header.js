import React from 'react';
import './Header.scss';
import Search from '../search/Search';
import { Button } from 'reactstrap';
import backgroundImage from '../../../public/img/background.jpg';
import { useDispatch } from 'react-redux';
import { ModalWindowType } from '../../utils/utils';
import { openModalWindowAction } from '../../store/action/actionCreators';

const Header = () => {
  const dispatch = useDispatch();
  const handleAddMovie = () => dispatch(openModalWindowAction({ type: ModalWindowType.ADD_MODAL }));

  return (
    <div className="header">
      <div className="background" style={{'backgroundImage': `url(${backgroundImage})`}}>
        <div className="blur"/>
      </div>
      <Button className="btn-add-movie" onClick={handleAddMovie}>
        {'+ Add movie'}
      </Button>
      <div className="search">
        <h2 className="title">{'Find your movie'}</h2>
        <Search />
      </div>
    </div>
  );
};

export default Header;
