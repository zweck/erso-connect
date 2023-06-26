import React, {useRef, useEffect} from 'react';
import {PropTypes} from 'prop-types';

function MatrixRainingLetters({customClass = ''}) {
  const ref = useRef();
  const thisClassName = `mrl-container ${customClass}`;
  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops = [];

    for (let x = 0; x < columns; x += 1) {
      rainDrops[x] = 1;
    }

    const render = () => {
      context.fillStyle = 'rgba(0, 0, 0, 0.05)'; // black w a tiny bit of alpha
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = '#0F0'; // pure green
      context.font = `${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i += 1) {
        // randomize the string of characters to render
        const text = alphabet.charAt(
          Math.floor(Math.random() * alphabet.length),
        );
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (
          rainDrops[i] * fontSize > canvas.height
          && Math.random() > 0.975
        ) {
          rainDrops[i] = 0;
        }
        rainDrops[i] += 1;
      }
    };

    return () => {
      setInterval(render, 50);
    };
  });

  return (
    <canvas className={thisClassName} ref={ref} />
  );
}

MatrixRainingLetters.propTypes = {
  customClass: PropTypes.string,
};

export default MatrixRainingLetters;
