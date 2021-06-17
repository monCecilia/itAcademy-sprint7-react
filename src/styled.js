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
   background-image:url(${backTeatro});
   height: 100vh;
   background-position: center;
   width:100vw;
   background-size:cover;
   padding:2rem;
	@media only screen and (min-width: 768px) {
        padding: 2rem;
	}
  
`;

export const Jumbotron = styled.div`
    background-color: #bbdfc8;
    color: #596e79;
    padding: 2rem;
    margin-top: 2rem;
    
    @media only screen and (min-width: 768px) {
        padding: 3rem;
        margin-top: 10rem;
        margin-right: 10rem;
       
	}
    @media only screen and (min-width: 768px) {
        max-width:60vw;
	}
  
`;

export const Guion = styled.p`
    background-color: #75cfb8;
    color: #596e79;
    padding:1rem;

`;





