import React from 'react';
import {
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';
import './ModalWindow.scss';
import PropTypes from 'prop-types';

const SuccessModalWindow = ({ showModal, message, onClose }) => {
  return (
    <Modal isOpen={showModal} toggle={onClose}>
      <ModalHeader toggle={onClose} />
      <ModalBody className="modal-success-body">
        <h2>{'CONGRATULATIONS!'}</h2>
        <p className="modal-success-body-text">{message}</p>
      </ModalBody>
    </Modal>
  );
};

SuccessModalWindow.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default SuccessModalWindow;
