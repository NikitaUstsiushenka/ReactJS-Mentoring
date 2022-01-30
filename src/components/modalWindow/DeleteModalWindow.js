import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
} from 'reactstrap';
import './ModalWindow.scss';
import { useDispatch } from 'react-redux';
import { closeModalWindowAction } from '../../store/action/actionCreators';
import { deleteMovie } from '../../store/action/movies';
import { useFormik } from 'formik';

const DeleteModalWindow = ({ showModal, movieId, onClose }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {
      dispatch(deleteMovie(movieId));
      dispatch(closeModalWindowAction());
    },
  });

  return (
    <Modal isOpen={showModal} toggle={onClose}>
      <Form onSubmit={formik.handleSubmit}>
        <ModalHeader className="modal-header" toggle={onClose}>
          <h2>{'Delete movie'}</h2>
        </ModalHeader>
        <ModalBody className="modal-body">
          <p className="modal-body-text">{'Are you sure you want to delete this movie?'}</p>
        </ModalBody>
        <ModalFooter className="modal-footer">
          <Button
            id="btn-submit"
            className="btn-submit"
            type="submit"
          >
            {'Confirm'}
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

DeleteModalWindow.propTypes = {
  showModal: PropTypes.bool.isRequired,
  movieId: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default DeleteModalWindow;
