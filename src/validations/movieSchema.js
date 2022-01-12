import * as yup from 'yup';
import { MovieGenres } from '../utils/utils';

export const movieSchema = yup.object().shape({
  title: yup.string()
    .max(30, 'Must be 30 characters or less')
    .required('Movie title is required'),
  releaseDate: yup.date()
    .required('Movie release date is required'),
  posterPath: yup.string()
    .url('Invalid url')
    .required('Movie url is required'),
  rating: yup.number()
    .min(1, 'Rating can\'t be less than 1')
    .max(10, 'Rating can\'t be more than 10')
    .required('Movie rating is required'),
  genre: yup.string()
    .oneOf(MovieGenres)
    .required('Movie genre is required'),
  runtime: yup.number()
    .min(20, 'Runtime can\'t be less than 20')
    .required('Movie runtime is required'),
  overview: yup.string()
    .max(500, 'Must be 500 characters or less')
    .required('Movie overview is required'),
});
