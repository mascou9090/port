import styled from 'styled-components';

export const TecS = styled.section`
  display:flex;
  width:50rem;
  margin:5rem 2rem;
  background-color: #347fc4;
  border-radius: 10px;
  img {
    width:7rem;
    height:10rem;
    margin:2rem;
    padding:0 auto;
    cursor:pointer;
  }
  ul {
    display:flex;
    flex-wrap: wrap;
    transition:2s ease-in-out;

    li {
      list-style: none;
      margin:1rem;
    }
  }
`;