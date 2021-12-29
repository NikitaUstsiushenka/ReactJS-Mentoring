import React from 'react';
import PropTypes from 'prop-types';
import {
  Badge, Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
} from 'reactstrap';
import './MovieItem.scss';
import { useDispatch } from 'react-redux';
import { ModalWindowType } from '../../utils/utils';

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();

  const handleEditSubmit = () => dispatch({
    type: 'OPEN_MODAL',
    payload: {
      movieId: movie.id,
      type: ModalWindowType.EDIT_MODAL,
    }
  });

  const handleDeleteSubmit = () => dispatch({
    type: 'OPEN_MODAL',
    payload: {
      movieId: movie.id,
      type: ModalWindowType.DELETE_MODAL
    }
  });

  return (
    <>
      <Card className="card">
        <CardImg src={movie.url} top/>
        <CardBody className="card-body">
          <CardTitle className="card-title" tag="h6">
            {movie.title}
            <Badge className="release-date">
              {movie.releaseDate.split('-')[0]}
            </Badge>
          </CardTitle>
          <CardSubtitle className="card-subtitle mb-2 text-muted">
            {movie.genre}
          </CardSubtitle>
          <div className="button-container">
            <Button className="btn-edit" onClick={handleEditSubmit}>
              {'Edit'}
            </Button>
            <Button className="btn-delete" onClick={handleDeleteSubmit}>
              {'Delete'}
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
