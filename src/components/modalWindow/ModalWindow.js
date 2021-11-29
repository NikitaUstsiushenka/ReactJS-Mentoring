import React from 'react';
import PropTypes from 'prop-types';
import './ModalWindow.scss';
import { ModalWindowType } from '../../utils/utils';
import DeleteModalWindow from './DeleteModalWindow';
import AddEditModalWindow from './AddEditModalWindow';
import { useSelector } from 'react-redux';
import SuccessModalWindow from './SuccessModalWindow';

const ModalWindow = ({ type }) => {
  const { modalWindowReducer } = useSelector(state => state);

  switch (type) {
    case ModalWindowType.DELETE_MODAL:
      return <DeleteModalWindow movieId={modalWindowReducer.movieId} />;
    case ModalWindowType.ADD_MODAL:
      return <AddEditModalWindow isEditMode={false} movieId={modalWindowReducer.movieId} />;
    case ModalWindowType.EDIT_MODAL:
      return <AddEditModalWindow isEditMode movieId={modalWindowReducer.movieId} />;
    case ModalWindowType.SUCCESS_MODAL:
      return <SuccessModalWindow />;
    default:
      return null;
  }
};

ModalWindow.propTypes = {
  type: PropTypes.string,
};

export default ModalWindow;
