import React, { useState, useEffect } from 'react';

interface Card {
  id: number;
  symbol: string;
  flipped: boolean;
  matched: boolean;
}

export const MemoryGame: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  const symbols = ['❤', '💕', '💖', '💝', '💘', '💗', '💞', '💓'];

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    const cardPairs = [...symbols, ...symbols].map((symbol, index) => ({
      id: index,
      symbol,
      flipped: false,
      matched: false,
    }));
    
    cardPairs.sort(() => Math.random() - 0.5);
    setCards(cardPairs);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setGameWon(false);
  };

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      if (cards[first].symbol === cards[second].symbol) {
        setMatched([...matched, first, second]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 600);
      }
      setMoves(moves + 1);
    }
  }, [flipped]);

  useEffect(() => {
    if (matched.length === cards.length && cards.length > 0) {
      setGameWon(true);
    }
  }, [matched, cards.length]);

  const handleCardClick = (index: number) => {
    if (flipped.length < 2 && !flipped.includes(index) && !matched.includes(index)) {
      setFlipped([...flipped, index]);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Memory Game</h2>
      <div style={styles.stats}>
        <p>Moves: {moves}</p>
        {gameWon && <p style={styles.won}>You Won! Congratulations!</p>}
      </div>
      <div style={styles.grid}>
        {cards.map((card, index) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(index)}
            style={{
              ...styles.card,
              backgroundColor: flipped.includes(index) || matched.includes(index) ? '#667eea' : '#764ba2',
              cursor: matched.includes(index) ? 'default' : 'pointer',
              opacity: matched.includes(index) ? 0.5 : 1,
            }}
          >
            {(flipped.includes(index) || matched.includes(index)) && (
              <span style={styles.symbol}>{card.symbol}</span>
            )}
          </div>
        ))}
      </div>
      {gameWon && (
        <button onClick={initializeGame} style={styles.button}>
          Play Again
        </button>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '30px',
    textAlign: 'center',
    maxWidth: '600px',
    margin: '0 auto',
  },
  title: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#fff',
  },
  stats: {
    marginBottom: '20px',
    color: '#fff',
  },
  won: {
    color: '#4caf50',
    fontSize: '20px',
    fontWeight: 'bold',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
    marginBottom: '30px',
  },
  card: {
    aspectRatio: '1',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '40px',
    transition: 'all 0.3s ease',
    border: '2px solid rgba(255, 255, 255, 0.2)',
  },
  symbol: {
    animation: 'pulse 0.3s ease',
  },
  button: {
    padding: '12px 30px',
    fontSize: '16px',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};
