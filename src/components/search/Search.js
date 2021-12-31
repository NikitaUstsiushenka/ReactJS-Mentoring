import React, { useState } from 'react';
import { Button, FormGroup, Input } from 'reactstrap';
import './Search.scss';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../store/action/movies';

const Search = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    dispatch(getMovies({ searchBy: 'title', search: searchValue }));
    setSearchValue('');
  };
  const handleSearchValueChange = (e) => setSearchValue(e.target.value);

  return (
    <FormGroup className={'search-container'}>
      <Input
        id="input-search"
        type="text"
        className="input-search"
        value={searchValue}
        placeholder="What do you want to watch?"
        onChange={handleSearchValueChange}
      />
      <Button className="btn-search" onClick={handleSearch}>
        {'Search'}
      </Button>
    </FormGroup>
  );
};

export default Search;
