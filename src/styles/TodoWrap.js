import styled from 'styled-components';

const TodoWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  h2 {
    font-family: 'Roboto Mono', monospace;
    text-align: center;
  }
  div {
    &:first-child {
      h2 {
        color: #eee;
        span {
          &.underline {
            border-bottom: 2px solid #eee;
          }
        }
      }
    }
    &:last-child {
      h2 {
        color: #333;
        span {
          &.underline {
            border-bottom: 2px solid #333;
          }
        }
      }
    }
  }
`;

export default TodoWrap;
