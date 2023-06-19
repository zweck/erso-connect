import styled, { createGlobalStyle } from 'styled-components';
import splash from './images/splash.jpeg';
import StarJedi from './fonts/starjedi/Starjedi.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'StarJedi';
    src: url(${StarJedi}) format('truetype');
    font-style: normal;
    font-display: auto;
  }
`;

export const AppWrapper = styled.div`
  background: url(${splash});

  background-size: cover;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
`;

export const TitleText = styled.h1`
  font-family: 'StarJedi';
  font-weight: 100;
  color: white;
  font-size: 3rem;
  margin: 0;
  width: 100%;
  text-align: center;
  position: relative;
   p {
     margin: 0;
     font-size: 5rem;
   }
`;

export const Logo = styled(TitleText)`
  cursor: pointer;
  font-size: 8rem;
`;

export const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(20px);
  width: 100%;
  position: absolute;
  bottom: 0;

  ul {
    padding: 0;
    display: flex;
    list-style-type: none;
    justify-content: space-evenly;
    color: white;
    margin: 0;
  }
`;

export const NavItem = styled.li`
  padding: 1rem;;
  font-size: 1rem;
  flex-grow: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ active }) => active && `
    font-weight: 600;
    background: rgba(0, 0, 0, 0.4);
  `}
  
  &:hover {
    background: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    font-weight: 600;
  }
}
`;

export const Box = styled.div`
  width: 80vw;
  background: white;
  margin: 20vh calc( 10vw - 2rem ) 10vh;
  padding: 1rem 2rem;
  p {
    font-size: 1.2rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 50rem;
 `;

export const CenterAlign = styled.div`
  display: flex;
  justify-content: center;
`;
