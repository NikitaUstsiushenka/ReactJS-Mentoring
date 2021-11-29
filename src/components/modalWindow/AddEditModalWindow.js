import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Label,
  Input,
  Col,
  Row,
} from 'reactstrap';
import './ModalWindow.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalWindowAction } from '../../store/action/actionCreators';
import { addMovie } from '../../store/action/movies';

const AddEditModalWindow = ({ isEditMode, movieId }) => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movieReducer.movies);
  const showModal = useSelector(state => state.modalWindowReducer.showModal);
  const editableMovie = !movieId ? {} : movies.find(movie => movie.id === movieId);

  const handleClose = () => dispatch(closeModalWindowAction());
  const handleSubmit = () => dispatch(addMovie(editableMovie));
  const handleReset = () => {
    Object.assign(editableMovie, { title: '' });
  };

  const handleTitleChange = (e) => Object.assign(editableMovie, { title: e.target.value });
  const handleReleaseDateChange = (e) => Object.assign(editableMovie, { release_date: e.target.value });
  const handlePosterPathChange = (e) => Object.assign(editableMovie, { poster_path: e.target.value });
  const handleVoteAverageChange = (e) => Object.assign(editableMovie, { vote_average: Number(e.target.value) });
  const handleGenreChange = (e) => Object.assign(editableMovie, { genre: e.target.value });
  const handleRuntimeChange = (e) => Object.assign(editableMovie, { runtime: Number(e.target.value) });
  const handleOverviewChange = (e) => Object.assign(editableMovie, { overview: e.target.value });

  return (
    <Modal isOpen={showModal} toggle={handleClose}>
      <ModalHeader className="modal-header" toggle={handleClose}>
        <h2>{!isEditMode ? 'Add movie' : 'Edit movie'}</h2>
      </ModalHeader>
      <ModalBody className="modal-body">
        <Row>
          <Col md={8}>
            <Label for="title" className="label">
              {'Title'}
            </Label>
            <Input
              id="title"
              name="title"
              className="input"
              placeholder="with a placeholder"
              type="text"
              value={editableMovie?.title}
              onChange={handleTitleChange}
            />
          </Col>
          <Col md={4}>
            <Label for="releaseDate" className="label">
              {'Release date'}
            </Label>
            <Input
              id="releaseDate"
              name="releaseDate"
              className="input"
              type="date"
              value={editableMovie?.release_date}
              onChange={handleReleaseDateChange}
            />
          </Col>
        </Row>
        <Row className="row">
          <Col md={8}>
            <Label for="movieUrl" className="label">
              {'Movie URL'}
            </Label>
            <Input
              id="movieUrl"
              name="movieUrl"
              className="input"
              placeholder="https://"
              type="url"
              value={editableMovie?.poster_path}
              onChange={handlePosterPathChange}
            />
          </Col>
          <Col md={4}>
            <Label for="rating" className="label">
              {'Rating'}
            </Label>
            <Input
              id="rating"
              name="rating"
              className="input"
              placeholder="7.8"
              type="number"
              value={editableMovie?.vote_average}
              onChange={handleVoteAverageChange}
            />
          </Col>
        </Row>
        <Row className="row">
          <Col md={8}>
            <Label for="genre" className="label">
              {'Genre'}
            </Label>
            <Input
              id="genre"
              name="genre"
              className="input"
              type="select"
              onChange={handleGenreChange}
            >
              <option>{'Crime'}</option>
              <option>{'Documentary'}</option>
              <option>{'Horror'}</option>
              <option>{'Comedy'}</option>
            </Input>
          </Col>
          <Col md={4}>
            <Label for="runtime" className="label">
              {'Runtime'}
            </Label>
            <Input
              id="runtime"
              name="runtime"
              placeholder="minutes"
              className="input"
              type="text"
              value={editableMovie?.runtime}
              onChange={handleRuntimeChange}
            />
          </Col>
        </Row>
        <Row className="row">
          <Col md={12}>
            <Label for="overview" className="label">
              {'Overview'}
            </Label>
            <Input
              id="overview"
              name="overview"
              className="input"
              placeholder="Movie description"
              type="textarea"
              value={editableMovie?.overview}
              onChange={handleOverviewChange}
            />
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter className="modal-footer">
        <Button className="btn-reset" onClick={handleReset}>
          {'Reset'}
        </Button>
        <Button className="btn-submit" onClick={handleSubmit}>
          {'Submit'}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

AddEditModalWindow.propTypes = {
  isEditMode: PropTypes.bool.isRequired,
  movieId: PropTypes.number,
}

export default AddEditModalWindow;
