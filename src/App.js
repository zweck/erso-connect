import React, { useState } from 'react';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import BedroomBabyIcon from '@mui/icons-material/BedroomBaby';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import {
  Logo, Nav, AppWrapper, GlobalStyle, TitleText, NavItem,
} from './App.styles';
import { Principles } from './Principles';
import { Memes } from './Memes';
import { Philosophy } from './Philosophy';

const quotes = [
  (
    <span>
      <em>"What is time?"</em>
      {' '}
      - Michael Smyth
    </span>
  ),
  (
    <span>
      <em>"Ask chatGPT!"</em>
      {' '}
      - Barry Hall
    </span>
  ),
  (
    <span>
      <em>"Have you seen this isometric, fractal, rubix, sudoku solver?"</em>
      {' '}
      - Unknown
    </span>
  ),
  (
    <span>
      <em>"Isn't that proof we're in a simulation?"</em>
      {' '}
      - Phil Hauser
    </span>
  ),
  (
    <span>
      <em>"I'm scared to ask... why keyboards?"</em>
      {' '}
      - Elaine Parker
    </span>
  ),
];

const tabContent = [
  {
    name: 'Principles',
    Component: Principles,
    Icon: ChangeHistoryIcon,
  },
  {
    name: 'Memes',
    Component: Memes,
    Icon: BedroomBabyIcon,
  },
  {
    name: 'Philosophy',
    Component: Philosophy,
    Icon: PsychologyAltIcon,
  },
];

function HomeContent() {
  return (
    <>
      <TitleText>
        Progress, over perfection
      </TitleText>
      <p style={{ color: 'white', textAlign: 'center' }}>{quotes[Math.floor(Math.random() * quotes.length)]}</p>
    </>
  );
}

function App() {
  const [selectedTab, setSelectedTab] = useState();
  const { Component: TabContent } = tabContent.find(({ name }) => name === selectedTab) || { Component: HomeContent };

  return (
    <AppWrapper>
      <GlobalStyle />

      <div style={{ width: '100vw', height: '10vh' }} />

      <Logo onClick={() => setSelectedTab()}>
        #
      </Logo>

      <TabContent />

      <Nav>
        <ul>
          {tabContent.map(({ name, Icon }) => (
            <NavItem key={name} active={selectedTab === name} onClick={() => setSelectedTab(name)}>
              <Icon />
              {name}
            </NavItem>
          ))}
        </ul>
      </Nav>
    </AppWrapper>
  );
}

export default App;
