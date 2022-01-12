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
  Form,
} from 'reactstrap';
import './ModalWindow.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalWindowAction } from '../../store/action/actionCreators';
import { addMovie, editMovie } from '../../store/action/movies';
import { useFormik } from 'formik';
import { getMovie } from '../../store/selectors';
import { movieSchema } from '../../validations/movieSchema';
import { MovieGenres } from '../../utils/utils';

const AddEditModalWindow = ({ showModal, movieId, onClose }) => {
  const dispatch = useDispatch();
  const editableMovie = useSelector(getMovie(movieId));

  const handleOnSubmit = (values) => {
    const movie = {
      title: values.title,
      poster_path: values.posterPath,
      runtime: Number(values.runtime),
      vote_average: Number(values.rating),
      genres: [values.genre],
      release_date: values.release_date,
      overview: values.overview,
    };

    if (movieId) {
      Object.assign(movie, { id: movieId });
      dispatch(editMovie(movie));
    } else {
      dispatch(addMovie(movie))
    }

    dispatch(closeModalWindowAction());
  };

  const formik = useFormik({
    initialValues: {
      title: editableMovie ? editableMovie.title : '',
      releaseDate: editableMovie ? editableMovie.release_date : '',
      posterPath: editableMovie ? editableMovie.poster_path : '',
      rating: editableMovie ? editableMovie.vote_average : '',
      runtime: editableMovie ? editableMovie.runtime : '',
      overview: editableMovie ? editableMovie.overview : '',
      genre: editableMovie ? editableMovie.genres[0] : '',
    },
    validationSchema: movieSchema,
    onSubmit: handleOnSubmit,
  });

  return (
    <Modal isOpen={showModal} toggle={onClose}>
      <ModalHeader className="modal-header" toggle={onClose}>
        <h2>{!movieId ? 'Add movie' : 'Edit movie'}</h2>
      </ModalHeader>
      <Form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
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
                placeholder="title"
                type="text"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.title && formik.errors.title ? (
                <div className="error">{formik.errors.title}</div>
              ) : null}
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
                value={formik.values.releaseDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.releaseDate && formik.errors.releaseDate ? (
                <div className="error">{formik.errors.releaseDate}</div>
              ) : null}
            </Col>
          </Row>
          <Row className="row">
            <Col md={8}>
              <Label for="movieUrl" className="label">
                {'Movie URL'}
              </Label>
              <Input
                id="posterPath"
                name="posterPath"
                className="input"
                placeholder="https://"
                type="url"
                value={formik.values.posterPath}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.posterPath && formik.errors.posterPath ? (
                <div className="error">{formik.errors.posterPath}</div>
              ) : null}
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
                value={formik.values.rating}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.rating && formik.errors.rating ? (
                <div className="error">{formik.errors.rating}</div>
              ) : null}
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
                value={formik.values.genre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">{'Select Genre'}</option>
                {MovieGenres.map((genre) => (
                  <option value={genre} key={genre}>{genre}</option>
                ))}
              </Input>
              {formik.touched.genre && formik.errors.genre ? (
                <div className="error">{formik.errors.genre}</div>
              ) : null}
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
                value={formik.values.runtime}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.runtime && formik.errors.runtime ? (
                <div className="error">{formik.errors.runtime}</div>
              ) : null}
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
                value={formik.values.overview}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.overview && formik.errors.overview ? (
                <div className="error">{formik.errors.overview}</div>
              ) : null}
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter className="modal-footer">
          <Button className="btn-reset" type="reset">
            {'Reset'}
          </Button>
          <Button className="btn-submit" type="submit">
            {'Submit'}
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

AddEditModalWindow.propTypes = {
  showModal: PropTypes.bool.isRequired,
  movieId: PropTypes.number,
  onClose: PropTypes.func.isRequired,
}

export default AddEditModalWindow;
