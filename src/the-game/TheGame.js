import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MatrixRainingLetters from './DigitalRain';
import story from './story.json';
import { DecisionButton, GameWrapper } from './TheGame.styles';

function TheGame({ hideGame }) {
  const [currentStory, setCurrentStory] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setCurrentStory(story.find(({ id }) => Number(id) === Number(params.get('progress'))) || story[0]);
  }, []);

  const handleDecision = (decisionIndex) => {
    const { nextStoryId } = currentStory.decisions[decisionIndex];
    const nextStory = story.find((s) => s.id === nextStoryId);

    window.history.pushState('', '', `?progress=${nextStoryId}`);

    setCurrentStory(nextStory);
  };

  if (!currentStory) {
    return <div>Loading...</div>;
  }

  return (
    <GameWrapper>
      {currentStory.end && (
        <div
          onClick={hideGame}
          style={{
            width: '100%', height: '100%', top: 0, left: 0, position: 'absolute',
          }}
        >
          <MatrixRainingLetters />
        </div>
      )}
      <h1>{currentStory.title}</h1>
      <p>{currentStory.text}</p>
      {currentStory.decisions.map((decision, index) => (
        <DecisionButton key={decision.text} onClick={() => handleDecision(index)}>
          {decision.text}
        </DecisionButton>
      ))}
    </GameWrapper>
  );
}

TheGame.propTypes = {
  hideGame: PropTypes.func.isRequired,
};

export default TheGame;
