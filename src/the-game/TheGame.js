import React, { useState, useEffect } from 'react';
import story from './story.json';
import { DecisionButton, GameWrapper } from './TheGame.styles';

function TheGame() {
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

export default TheGame;
