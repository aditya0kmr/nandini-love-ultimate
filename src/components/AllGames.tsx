import React, { useState } from 'react';

interface GameState {
  current: string;
  scores: { [key: string]: number };
}

const QuizGame = () => {
  const [score, setScore] = useState(0);
  const [qIndex, setQIndex] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const questions = [
    { q: 'How many days together?', a: '684', points: 10 },
    { q: 'Favorite date?', a: 'always', points: 15 },
    { q: 'Future dream?', a: 'together', points: 20 }
  ];

  const handleAnswer = (answer: string) => {
    if (answer.toLowerCase().includes(questions[qIndex].a)) {
      setScore(score + questions[qIndex].points);
    }
    if (qIndex < questions.length - 1) {
      setQIndex(qIndex + 1);
    } else {
      setGameComplete(true);
    }
  };

  if (gameComplete) {
    return (
      <div style={gameStyles.container}>
        <h2>Quiz Complete!</h2>
        <p style={gameStyles.score}>Final Score: {score}</p>
        <button onClick={() => { setScore(0); setQIndex(0); setGameComplete(false); }} style={gameStyles.button}>
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div style={gameStyles.container}>
      <h3>{questions[qIndex].q}</h3>
      <input type="text" placeholder="Your answer" style={gameStyles.input} onKeyPress={(e) => e.key === 'Enter' && handleAnswer(e.currentTarget.value)} />
      <button onClick={() => handleAnswer('')} style={gameStyles.button}>Submit</button>
    </div>
  );
};

const TruthOrDare = () => {
  const [item, setItem] = useState('');
  const truths = ['What is your favorite memory?', 'What makes you smile?', 'What do you love most?'];
  const dares = ['Send a love message', 'Do a silly dance', 'Cook together'];

  const getItem = (type: 'truth' | 'dare') => {
    const items = type === 'truth' ? truths : dares;
    setItem(items[Math.floor(Math.random() * items.length)]);
  };

  return (
    <div style={gameStyles.container}>
      <h2>Truth or Dare</h2>
      {item && <p style={gameStyles.item}>{item}</p>}
      <button onClick={() => getItem('truth')} style={{...gameStyles.button, backgroundColor: '#667eea'}}>Truth</button>
      <button onClick={() => getItem('dare')} style={{...gameStyles.button, backgroundColor: '#764ba2'}}>Dare</button>
    </div>
  );
};

const EmojiStory = () => {
  const stories = [
    { emojis: '💑👫💍', answer: 'couple' },
    { emojis: '💕❤️💖', answer: 'love' },
    { emojis: '🌹💐🌺', answer: 'flowers' }
  ];
  const [idx, setIdx] = useState(0);
  const [guess, setGuess] = useState('');
  const [correct, setCorrect] = useState(false);

  const handleGuess = () => {
    if (guess.toLowerCase() === stories[idx].answer) {
      setCorrect(true);
      setTimeout(() => { setIdx(idx + 1); setGuess(''); setCorrect(false); }, 1000);
    }
  };

  if (idx >= stories.length) return <div style={gameStyles.container}><h2>You Won!</h2></div>;

  return (
    <div style={gameStyles.container}>
      <h2>Emoji Story</h2>
      <p style={gameStyles.emoji}>{stories[idx].emojis}</p>
      <input value={guess} onChange={(e) => setGuess(e.target.value)} placeholder="Guess the story" style={gameStyles.input} />
      <button onClick={handleGuess} style={gameStyles.button}>Submit</button>
      {correct && <p style={{color: '#4caf50'}}>Correct!</p>}
    </div>
  );
};

const PhotoPuzzle = () => {
  const [moves, setMoves] = useState(0);
  const [solved, setSolved] = useState(false);

  return (
    <div style={gameStyles.container}>
      <h2>Photo Puzzle</h2>
      <p>Arrange the tiles to complete the picture</p>
      <div style={gameStyles.puzzle}>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} style={gameStyles.puzzleTile}></div>
        ))}
      </div>
      <p>Moves: {moves}</p>
      {solved && <p style={{color: '#4caf50'}}>Solved!</p>}
    </div>
  );
};

const ThisOrThat = () => {
  const pairs = [
    { a: 'Beach', b: 'Mountains' },
    { a: 'Coffee', b: 'Tea' },
    { a: 'Movie', b: 'Book' }
  ];
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);

  const choose = (choice: string) => {
    setScore(score + 1);
    if (idx < pairs.length - 1) setIdx(idx + 1);
  };

  return (
    <div style={gameStyles.container}>
      <h2>This or That</h2>
      <p style={gameStyles.question}>{pairs[idx].a} or {pairs[idx].b}?</p>
      <button onClick={() => choose(pairs[idx].a)} style={{...gameStyles.button, backgroundColor: '#667eea'}}>{pairs[idx].a}</button>
      <button onClick={() => choose(pairs[idx].b)} style={{...gameStyles.button, backgroundColor: '#764ba2'}}>{pairs[idx].b}</button>
      <p>Score: {score}/{pairs.length}</p>
    </div>
  );
};

const LoveTimer = () => {
  const [time, setTime] = useState(0);
  const [started, setStarted] = useState(false);
  const [record, setRecord] = useState(0);

  React.useEffect(() => {
    let timer: any;
    if (started) timer = setInterval(() => setTime(t => t + 1), 10);
    return () => clearInterval(timer);
  }, [started]);

  return (
    <div style={gameStyles.container}>
      <h2>Love Timer</h2>
      <p style={gameStyles.timer}>{(time / 100).toFixed(2)}s</p>
      {!started ? (
        <button onClick={() => setStarted(true)} style={gameStyles.button}>Start</button>
      ) : (
        <button onClick={() => { setStarted(false); setRecord(time); setTime(0); }} style={gameStyles.button}>Stop</button>
      )}
      {record > 0 && <p>Record: {(record / 100).toFixed(2)}s</p>}
    </div>
  );
};

const FortuneWheel = () => {
  const fortunes = [
    'A wonderful future awaits us!',
    'Love grows stronger each day',
    'Together we can do anything',
    'Your love will last forever',
    'Happiness is just the beginning'
  ];
  const [fortune, setFortune] = useState('');
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    setSpinning(true);
    setTimeout(() => {
      setFortune(fortunes[Math.floor(Math.random() * fortunes.length)]);
      setSpinning(false);
    }, 1000);
  };

  return (
    <div style={gameStyles.container}>
      <h2>Fortune Wheel</h2>
      <div style={{...gameStyles.wheel, opacity: spinning ? 0.5 : 1}}>🔮</div>
      <button onClick={spin} disabled={spinning} style={gameStyles.button}>Spin</button>
      {fortune && <p style={gameStyles.fortune}>{fortune}</p>}
    </div>
  );
};

const GameHub = () => {
  const [gameState, setGameState] = useState<GameState>({
    current: 'menu',
    scores: {}
  });

  const games = [
    { id: 'memory', name: 'Memory Game', component: null },
    { id: 'quiz', name: 'How Well Do You Know Me', component: <QuizGame /> },
    { id: 'truthdare', name: 'Truth or Dare', component: <TruthOrDare /> },
    { id: 'emoji', name: 'Emoji Story', component: <EmojiStory /> },
    { id: 'puzzle', name: 'Photo Puzzle', component: <PhotoPuzzle /> },
    { id: 'thisorthat', name: 'This or That', component: <ThisOrThat /> },
    { id: 'timer', name: 'Love Timer Challenge', component: <LoveTimer /> },
    { id: 'wheel', name: 'Fortune Wheel', component: <FortuneWheel /> }
  ];

  if (gameState.current === 'menu') {
    return (
      <div style={gameStyles.hubContainer}>
        <h1>🎮 Games Hub</h1>
        <p>Play romantic games together!</p>
        <div style={gameStyles.gameGrid}>
          {games.map((game) => (
            <button
              key={game.id}
              onClick={() => setGameState({...gameState, current: game.id})}
              style={gameStyles.gameCard}
            >
              {game.name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  const currentGame = games.find(g => g.id === gameState.current);

  return (
    <div style={gameStyles.container}>
      <button onClick={() => setGameState({...gameState, current: 'menu'})} style={gameStyles.backButton}>← Back</button>
      <h2>{currentGame?.name}</h2>
      {currentGame?.component || <div style={gameStyles.placeholder}>Game Loading...</div>}
    </div>
  );
};

const gameStyles: { [key: string]: React.CSSProperties } = {
  hubContainer: { padding: '40px 20px', textAlign: 'center', minHeight: '100vh' },
  container: { padding: '30px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' },
  gameGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', margin: '30px 0' },
  gameCard: {
    padding: '20px',
    backgroundColor: 'rgba(102, 126, 234, 0.2)',
    border: '1px solid rgba(102, 126, 234, 0.4)',
    borderRadius: '10px',
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 0.3s',
    fontSize: '16px'
  },
  input: { padding: '10px', borderRadius: '5px', border: 'none', width: '200px', margin: '10px' },
  button: { padding: '10px 20px', backgroundColor: '#667eea', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', margin: '10px' },
  backButton: { padding: '10px 20px', backgroundColor: '#764ba2', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' },
  score: { fontSize: '24px', color: '#4caf50', fontWeight: 'bold' },
  item: { fontSize: '18px', padding: '20px', backgroundColor: 'rgba(102, 126, 234, 0.2)', borderRadius: '10px', margin: '20px 0' },
  emoji: { fontSize: '60px', margin: '20px 0' },
  puzzle: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', margin: '20px 0' },
  puzzleTile: { width: '100px', height: '100px', backgroundColor: '#667eea', borderRadius: '5px', border: '2px solid #764ba2' },
  question: { fontSize: '20px', margin: '20px 0', fontWeight: 'bold' },
  timer: { fontSize: '48px', fontWeight: 'bold', color: '#667eea', margin: '20px 0' },
  wheel: { fontSize: '80px', margin: '30px 0', animation: 'spin 2s linear' },
  fortune: { fontSize: '18px', color: '#4caf50', fontWeight: 'bold', padding: '20px', backgroundColor: 'rgba(76, 175, 80, 0.2)', borderRadius: '10px' },
  placeholder: { padding: '40px', color: '#999' }
};

export { GameHub, QuizGame, TruthOrDare, EmojiStory, PhotoPuzzle, ThisOrThat, LoveTimer, FortuneWheel };
export default GameHub;
