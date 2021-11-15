import React from 'react';
import { Button, FormGroup, Input } from 'reactstrap';
import './Search.scss';

const Search = (props) => {
  return (
    <FormGroup className={`search-container ${props.className}`}>
      <Input
        id="input-search"
        type="text"
        className="input-search"
        placeholder="What do you want to watch?"
      />
      <Button className="btn-search">
        {'Search'}
      </Button>
    </FormGroup>
  );
};

export default Search;
