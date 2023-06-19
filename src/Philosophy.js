import React from 'react';
import {
  TitleText,
} from './App.styles';

import { philosophy } from './quotes';

const getQuote = () => philosophy[Math.floor(Math.random() * philosophy.length)];

export function Philosophy() {
  const someQuotes = [...new Array(3)].map(getQuote);

  return (
    <>
      <TitleText>
        Philosophy
      </TitleText>
      {someQuotes.map(({ source, quote }) => (
        <p style={{ color: 'white', textAlign: 'center', fontSize: '1.5rem' }}>
          <span>
            <em>{quote}</em>
            {' '}
            -
            {' '}
            {source}
          </span>
        </p>
      ))}
    </>
  );
}
