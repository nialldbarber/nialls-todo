import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import TodoWrap from './styles/TodoWrap';
import './App.scss';

const Container = styled.div`
  max-width: 920px;
  margin: 0 auto;
`;

class App extends Component {
  state = {
    todo: '',
    todoList: [
      {
        id: 1,
        item: 'one',
      },
      {
        id: 2,
        item: 'two',
      },
      {
        id: 3,
        item: 'three',
      },
    ],
  };

  handleChange = e => {
    this.setState({
      todo: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      todo: e.target.value,
    });
  };

  render() {
    const { todo, todoList } = this.state;
    return (
      <Container>
        <TodoForm
          todo={todo}
          change={this.handleChange}
          submit={this.handleSubmit}
        />
        <Fragment>
          <TodoWrap>
            <div>
              <h2>
                To<span className="underline">DO</span>s
              </h2>
            </div>
            <div>
              <h2>
                To<span className="underline">DONE</span>s
              </h2>
            </div>
          </TodoWrap>
          <div className="grid">
            <div className="col-2">
              {todoList.map(todoItem => (
                <Todos key={todoItem.id} todo={todoItem.item} />
              ))}
            </div>
            <div className="col-2">Complete</div>
          </div>
        </Fragment>
      </Container>
    );
  }
}

export default App;
