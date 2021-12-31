import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';
import './ModalWindow.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalWindowAction } from '../../store/action/actionCreators';
import { deleteMovie } from '../../store/action/movies';

const DeleteModalWindow = ({ movieId }) => {
  const dispatch = useDispatch();
  const showModal = useSelector(state => state.modalWindowReducer.showModal);

  const handleClose = () => dispatch(closeModalWindowAction());
  const handleConfirm = () => {
    dispatch(deleteMovie(movieId));
    dispatch(closeModalWindowAction());
  };

  return (
    <Modal isOpen={showModal} toggle={handleClose}>
      <ModalHeader className="modal-header" toggle={handleClose}>
        <h2>{'Delete movie'}</h2>
      </ModalHeader>
      <ModalBody className="modal-body">
        <p className="modal-body-text">{'Are you sure you want to delete this movie?'}</p>
      </ModalBody>
      <ModalFooter className="modal-footer">
        <Button className="btn-submit" onClick={handleConfirm}>
          {'Confirm'}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

DeleteModalWindow.propTypes = {
  movieId: PropTypes.number.isRequired,
}

export default DeleteModalWindow;
