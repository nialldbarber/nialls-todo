import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// Styles

const Todos = ({ todo }) => (
  <Fragment>
    <p>{todo}</p>
  </Fragment>
);

export default Todos;

Todos.propTypes = {
  todo: PropTypes.string,
};
