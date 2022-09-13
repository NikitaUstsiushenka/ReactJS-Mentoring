export const ModalWindowType = {
  ADD_MODAL: 'ADD_MODAL',
  EDIT_MODAL: 'EDIT_MODAL',
  DELETE_MODAL: 'DELETE_MODAL',
  SUCCESS_MODAL: 'SUCCESS_MODAL',
};

export const Tabs = {
  ALL: 'All',
  DOCUMENTARY: 'Documentary',
  COMEDY: 'Comedy',
  HORROR: 'Horror',
  CRIME: 'Crime',
};

export const SortParams = {
  RELEASE_DATE: 'release_date',
  RATING: 'vote_average',
};

export const MovieGenres = [
  'Documentary',
  'Comedy',
  'Horror',
  'Crime',
];

export const DEFAULT_PAGE_SIZE = 12;

export const scrollTop = () => window.scrollTo(0, 0);
