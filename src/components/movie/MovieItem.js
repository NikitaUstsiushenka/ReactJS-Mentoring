import React from 'react';
import PropTypes from 'prop-types';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
} from 'reactstrap';
import './MovieItem.scss';
import { useDispatch } from 'react-redux';
import { ModalWindowType, scrollTop } from '../../utils/utils';
import { openModalWindowAction, openMovieDetailsWindowAction } from '../../store/action/actionCreators';
import { useSearchParams } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleEditSubmit = () => dispatch(openModalWindowAction({
    type: ModalWindowType.EDIT_MODAL,
    movieId: movie.id,
  }));

  const handleDeleteSubmit = () => dispatch(openModalWindowAction({
    type: ModalWindowType.DELETE_MODAL,
    movieId: movie.id,
  }));

  const handleMovieClick = () => {
    setSearchParams({ movie: movie.id });
    dispatch(openMovieDetailsWindowAction());
    scrollTop();
  };

  return (
    <>
      <Card id="card" className="card">
        <CardImg
          src={movie.poster_path}
          top
          className="card-img"
          onClick={handleMovieClick}
        />
        <CardBody className="card-body">
          <CardTitle className="card-title" tag="h6">
            {movie.title}
            <Badge className="release-date">
              {movie.release_date?.split('-')[0]}
            </Badge>
          </CardTitle>
          <CardSubtitle className="card-subtitle mb-2 text-muted">
            {movie.genres.join(' & ')}
          </CardSubtitle>
          <div className="button-container">
            <Button
              id="btn-edit"
              className="btn-edit"
              onClick={handleEditSubmit}
            >
              {'Edit'}
            </Button>
            <Button
              id="btn-delete"
              className="btn-delete"
              onClick={handleDeleteSubmit}
            >
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
