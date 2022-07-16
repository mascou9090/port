import styled, { keyframes } from 'styled-components';

export const ProfileS = styled.section`
  display:flex;
  margin: 5rem;
  height:20rem;
  h4 {
    font-size: 4rem;
    margin:1rem 3rem;
  }
  p {
    font-size: 1.6rem;
    margin:1rem;
  }
  img {
    margin-left:20rem;
    width:12rem;
    animation: anime 2s alternate infinite;
  }
  @keyframes anime {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(10px);
    }
  }
`;