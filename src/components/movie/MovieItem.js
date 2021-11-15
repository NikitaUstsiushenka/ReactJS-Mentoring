import React from 'react';
import PropTypes from 'prop-types';
import {
  Badge,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
} from 'reactstrap';
import './MovieItem.scss';

const MovieItem = (props) => {
  return (
    <>
      <Card className="card">
        <CardImg src={props.image} top/>
        <CardBody className="cardBody">
          <CardTitle className="cardTitle" tag="h6">
            {props.title}
            <Badge className="releaseDate">
              {props.releaseDate}
            </Badge>
          </CardTitle>
          <CardSubtitle
            className="cardSubtitle mb-2 text-muted"
          >
            {props.genre}
          </CardSubtitle>
        </CardBody>
      </Card>
    </>
  );
};

MovieItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
};

export default MovieItem;
