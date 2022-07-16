import styled from 'styled-components';

export const HeaderS = styled.header`
  display:flex;
  justify-content: space-between;
  margin:0 2rem;
  border-bottom:1px solid #CCC;
  font-size: 1.1rem;
  ul {
    display:flex;
    margin-right: 5rem;
    li {
      margin-left: 1rem;
      list-style: none;
    }
    a {
      text-decoration: none;
      color:#333;
      &:hover {
        color:#2ff;
        cursor: pointer;
      }
    }
  }
`;