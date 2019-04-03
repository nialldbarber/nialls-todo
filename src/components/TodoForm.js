import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Add, AddCircle } from 'grommet-icons';

const AddWrap = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  background: #333;
  border-radius: 100%;
  padding: 0.5rem;
  cursor: pointer;
  svg {
    width: 35px;
    height: 35px;
    stroke: #eee;
  }
`;

const TodoForm = ({ submit, todo, change }) => (
  <Fragment>
    <AddWrap>
      <Add />
    </AddWrap>
    <div className="form">
      <form onSubmit={submit}>
        <div>
          <label htmlFor="todo">
            <input type="text" id="todo" value={todo} onChange={change} />
          </label>
        </div>
        <div>
          <button type="submit">
            <AddCircle />
          </button>
        </div>
      </form>
    </div>
  </Fragment>
);

export default TodoForm;

TodoForm.propTypes = {
  submit: PropTypes.func,
  todo: PropTypes.string,
  change: PropTypes.func,
};
