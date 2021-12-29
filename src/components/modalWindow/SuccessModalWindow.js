import React from 'react';
import {
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';
import './ModalWindow.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalWindowAction } from '../../store/action/actionCreators';

const SuccessModalWindow = () => {
  const dispatch = useDispatch();
  const showModal = useSelector(state => state.modalWindowStore.showModal);

  const handleClose = () => dispatch(closeModalWindowAction());

  return (
    <Modal isOpen={showModal} toggle={handleClose}>
      <ModalHeader className="modal-header" toggle={handleClose}>
        <h2>{'Delete movie'}</h2>
      </ModalHeader>
      <ModalBody className="modal-body">
        <h6 className="modal-body-text">{'CONGRATULATIONS!'}</h6>
      </ModalBody>
    </Modal>
  );
};

export default SuccessModalWindow;
