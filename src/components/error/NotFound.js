import React from 'react';
import './NotFound.scss';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <p className="error-code">{'404'}</p>
      <p className="title-text">{'Page not found'}</p>
      <Button
        id="btn-back-to-search"
        className="btn-back-to-search"
        onClick={() => navigate('/search')}
      >
        {'Back to search'}
      </Button>
    </div>
  );
};

export default NotFound;
