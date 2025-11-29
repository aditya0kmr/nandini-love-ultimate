import React, { useState, useEffect } from 'react';
import '../styles/BlocksPage.css';

const MEMORY_BLOCKS = [
  { id: 1, emoji: '💕', front: 'First Memory', back: 'The day we first met - you smiled and my heart skipped a beat' },
  { id: 2, emoji: '😍', front: 'Why I Love You', back: 'Because you make every moment special with your presence' },
  { id: 3, emoji: '🌟', front: 'Best Quality', back: 'Your kindness and compassion inspire me every single day' },
  { id: 4, emoji: '💑', front: 'Our Love', back: 'Growing stronger with each passing day together' },
  { id: 5, emoji: '🎵', front: 'Our Song', back: 'That song will forever remind me of you' },
  { id: 6, emoji: '✨', front: 'Magic Moment', back: 'When you first said I love you - best moment ever' },
  { id: 7, emoji: '🌹', front: 'Forever', back: 'I want to spend forever creating memories with you' },
  { id: 8, emoji: '💫', front: 'Dreams', back: 'Building our future, one dream at a time' },
  { id: 9, emoji: '👫', front: 'Together', back: 'Better together than apart - always' },
  { id: 10, emoji: '🎁', front: 'Gift', back: 'You are the greatest gift life could give me' },
  { id: 11, emoji: '🏠', front: 'Home', back: 'Home is wherever you are' },
  { id: 12, emoji: '💍', front: 'Forever Starts', back: 'Excited for the forever we will build together' },
];

interface Block {
  id: number;
  emoji: string;
  front: string;
  back: string;
}

export const BlocksPage: React.FC = () => {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());
  const [opened, setOpened] = useState<Set<number>>(() => {
    const saved = localStorage.getItem('openedBlocks');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  const toggleFlip = (id: number) => {
    const newFlipped = new Set(flipped);
    if (newFlipped.has(id)) {
      newFlipped.delete(id);
    } else {
      newFlipped.add(id);
      const newOpened = new Set(opened);
      newOpened.add(id);
      setOpened(newOpened);
      localStorage.setItem('openedBlocks', JSON.stringify([...newOpened]));
    }
    setFlipped(newFlipped);
  };

  const resetAll = () => {
    setFlipped(new Set());
    setOpened(new Set());
    localStorage.removeItem('openedBlocks');
  };

  return (
    <div className="blocks-page">
      <div className="blocks-container">
        <h1 className="blocks-title">✨ Our Special Memories ✨</h1>
        <p className="blocks-subtitle">Click each memory block to reveal the story behind it</p>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(opened.size / MEMORY_BLOCKS.length) * 100}%` }}></div>
          <p className="progress-text">{opened.size} / {MEMORY_BLOCKS.length} memories discovered</p>
        </div>

        <div className="blocks-grid">
          {MEMORY_BLOCKS.map((block) => (
            <div
              key={block.id}
              className={`memory-block ${flipped.has(block.id) ? 'flipped' : ''} ${opened.has(block.id) ? 'opened' : ''}`}
              onClick={() => toggleFlip(block.id)}
            >
              <div className="block-inner">
                <div className="block-front">
                  <span className="block-emoji">{block.emoji}</span>
                  <p className="block-number">#{block.id}</p>
                </div>
                <div className="block-back">
                  <p className="block-title">{block.front}</p>
                  <p className="block-content">{block.back}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="action-buttons">
          <button className="reset-btn" onClick={resetAll}">🔄 Reset All</button>
          <button className="share-btn" onClick={() => alert(`You've discovered ${opened.size} memories! Share your journey ❤️`)}">📤 Share Progress</button>
        </div>
      </div>
    </div>
  );
};

export default BlocksPage;
