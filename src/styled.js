import styled from 'styled-components';
import backTeatro from './assets/img/backTeatro.png';

export const Button = styled.button`
    background: ${props => props.primary ? "#75cfb8" : "#596e79"};
    color: ${props => props.primary ? "#ffc478" : "#ffc478"};
    font-size: 1em;
    margin-right: 1em;
    padding: 0.25em 1em;
    border: 2px solid #596e79;
    border-radius: 3px;
  
`;

export const Container = styled.div`
   padding: 2rem;
   background-image:url(${backTeatro});
   height: 100vh;
   background-position: center;
   max-width:100vw;
   background-size:cover;
  
`;

export const Jumbotron = styled.div`
    background-color: #bbdfc8;
    color: #596e79;
    padding: 3rem;
    margin-top: 3rem;
    margin-right: 10rem;
  
`;

export const Guion = styled.p`
    background-color: #75cfb8;
    color: #596e79;
    padding:1rem;

`;





