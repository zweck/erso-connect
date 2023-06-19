import React from 'react';
import {
  TitleText, Image, CenterAlign,
} from './App.styles';

export function Memes() {
  return (
    <>
      <TitleText>
        Memes
      </TitleText>

      <CenterAlign>
        <Image
          alt="cowboy-meme"
          src="https://media.giphy.com/media/vvxOWqmRCwaROhcHVD/giphy.gif"
        />
      </CenterAlign>

      <CenterAlign>
        <Image
          alt="cowboy-meme"
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3g2MWJ6bHcyM2ExdzFobGZoZWd2cXh0cTUyYjZ1NG9jbTluaDdocyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8mmWwncaGHhKgowbzZ/giphy.gif"
        />
      </CenterAlign>
    </>
  );
}
