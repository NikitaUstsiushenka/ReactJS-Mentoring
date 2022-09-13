import React, { useState } from 'react';
import { Button, FormGroup, Input } from 'reactstrap';
import './Search.scss';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../store/action/movies';
import backgroundImage from '../../../public/img/background.jpg';
import { openModalWindowAction } from '../../store/action/actionCreators';
import { ModalWindowType } from '../../utils/utils';

const Search = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    dispatch(getMovies({ searchBy: 'title', search: searchValue }));
    setSearchValue('');
  };

  const handleSearchValueChange = (e) => setSearchValue(e.target.value);

  const handleAddMovie = () => dispatch(openModalWindowAction({ type: ModalWindowType.ADD_MODAL }));

  return (
    <div className="header">
      <div className="background" style={{'backgroundImage': `url(${backgroundImage})`}}>
        <div className="blur"/>
      </div>
      <Button
        id="btn-add-movie"
        className="btn-add-movie"
        onClick={handleAddMovie}
      >
        {'+ Add movie'}
      </Button>
      <div className="search">
        <h2 className="title">{'Find your movie'}</h2>
        <FormGroup className="search-container">
          <Input
            id="input-search"
            type="text"
            className="input-search"
            value={searchValue}
            placeholder="What do you want to watch?"
            onChange={handleSearchValueChange}
          />
          <Button
            id="btn-search"
            className="btn-search"
            onClick={handleSearch}
          >
            {'Search'}
          </Button>
        </FormGroup>
      </div>
    </div>
  );
};

export default Search;
