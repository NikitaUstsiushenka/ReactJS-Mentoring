import React from 'react';
import PropTypes from 'prop-types';
import './ModalWindow.scss';
import { ModalWindowType } from '../../utils/utils';
import DeleteModalWindow from './DeleteModalWindow';
import AddEditModalWindow from './AddEditModalWindow';
import { useDispatch, useSelector } from 'react-redux';
import SuccessModalWindow from './SuccessModalWindow';
import { getModalWindowParams } from '../../store/selectors';
import { closeModalWindowAction } from '../../store/action/actionCreators';

const ModalWindow = ({ type }) => {
  const dispatch = useDispatch();
  const params = useSelector(getModalWindowParams);
  const onClose = () => dispatch(closeModalWindowAction());

  switch (type) {
    case ModalWindowType.DELETE_MODAL:
      return (
        <DeleteModalWindow
          showModal={params.showModal}
          movieId={params.movieId}
          onClose={onClose}
        />
      );
    case ModalWindowType.ADD_MODAL:
      return (
        <AddEditModalWindow
          showModal={params.showModal}
          movieId={params.movieId}
          onClose={onClose}
        />
      );
    case ModalWindowType.EDIT_MODAL:
      return (
        <AddEditModalWindow
          showModal={params.showModal}
          movieId={params.movieId}
          onClose={onClose}
        />
      );
    case ModalWindowType.SUCCESS_MODAL:
      return (
        <SuccessModalWindow
          showModal={params.showModal}
          onClose={onClose}
          message={params.message}
        />
      );
    default:
      return null;
  }
};

ModalWindow.propTypes = {
  type: PropTypes.string,
};

export default ModalWindow;
