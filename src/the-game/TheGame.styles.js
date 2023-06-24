import styled from 'styled-components';

export const DecisionButton = styled.button`
  margin: 0.5rem;
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  font-weight: 600;
  border: 0;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  cursor: pointer;
`;

export const GameWrapper = styled.div`
 padding: 1rem;
 display: flex;
 flex-direction: column;
 h1, p {
   color: white;
   text-align: center;
 }
`;
