import React, { useState } from 'react';

// ===== NANDINI & AADI PERSONALIZED PAGES =====

const HomePage = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Our Love Story</h1>
    <p>Aadi & Nandini 💕</p>
    <p>684 Amazing Days Together</p>
    <p>"It all started with a smile, a look, and a feeling."</p>
    <p>"And now you're my favorite chapter in life."</p>
  </div>
);

const LoveLettersPage = () => (
  <div style={styles.container}>
    <h2>💌 Love Letters</h2>
    <div style={styles.card}>
      <h3>Aadi to Nandini</h3>
      <p>Dear Nandini,</p>
      <p>Every moment with you feels like a dream. Your smile lights up my world. You're not just my love, you're my best friend, my adventure, my forever.</p>
      <p>I fall in love with you more each day. You're the reason I believe in love.</p>
      <p>Forever yours, Aadi 💕</p>
    </div>
    <div style={styles.card}>
      <h3>Nandini to Aadi</h3>
      <p>Aadi,</p>
      <p>You're my safe place, my happiness, my everything. With you, I've learned what true love means. You make me want to be the best version of myself.</p>
      <p>Thank you for loving me unconditionally. You're my forever.</p>
      <p>All my love, Nandini 💖</p>
    </div>
  </div>
);

const TimelinePage = () => (
  <div style={styles.container}>
    <h2>📅 Our Timeline</h2>
    <div style={styles.timeline}>
      <div style={styles.timelineItem}>
        <h3>Day 1</h3>
        <p>The day our love story began</p>
      </div>
      <div style={styles.timelineItem}>
        <h3>100 Days</h3>
        <p>First special milestone together</p>
      </div>
      <div style={styles.timelineItem}>
        <h3>365 Days</h3>
        <p>One year of unforgettable moments</p>
      </div>
      <div style={styles.timelineItem}>
        <h3>684 Days</h3>
        <p>And counting forever...</p>
      </div>
    </div>
  </div>
);

const GalleryPage = () => (
  <div style={styles.container}>
    <h2>📸 Our Memories</h2>
    <div style={styles.gallery}>
      {['Our First Photo', 'Adventure Together', 'Sunset Moments', 'Pure Love', 'Happy Times', 'Forever Smiles'].map((name, i) => (
        <div key={i} style={styles.photoCard}>
          <div style={styles.photo}>📷</div>
          <p>{name}</p>
        </div>
      ))}
    </div>
  </div>
);

const FutureBoard = () => {
  const [dreams, setDreams] = useState([
    { id: 1, title: 'Get Married', desc: 'Start our forever journey officially' },
    { id: 2, title: 'Travel Together', desc: 'Explore the world as a couple' },
    { id: 3, title: 'Build Our Home', desc: 'Create our dream house together' },
    { id: 4, title: 'Start a Family', desc: 'Fill our life with love and laughter' }
  ]);

  return (
    <div style={styles.container}>
      <h2>🌟 Our Future Dreams</h2>
      <div style={styles.dreamGrid}>
        {dreams.map(dream => (
          <div key={dream.id} style={styles.dreamCard}>
            <h3>{dream.title}</h3>
            <p>{dream.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SurprisePage = () => (
  <div style={styles.container}>
    <h2>🎁 Special Surprises</h2>
    <div style={styles.card}>
      <h3>Reasons Why We Love Each Other</h3>
      <ul style={styles.list}>
        <li>Your genuine smile brightens my darkest days</li>
        <li>The way you listen and understand me</li>
        <li>Your infectious laugh is my favorite sound</li>
        <li>You make me feel safe and loved</li>
        <li>Our inside jokes and special moments</li>
        <li>How you support my dreams</li>
        <li>Your kindness to everyone around you</li>
        <li>The way you love me unconditionally</li>
      </ul>
    </div>
    <div style={styles.card}>
      <h2>Special Moments</h2>
      <p>Every day with you is a gift. Every laugh, every hug, every moment of silence together is precious.</p>
    </div>
  </div>
);

const MainApp = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const pages = {
    home: <HomePage />,
    letters: <LoveLettersPage />,
    timeline: <TimelinePage />,
    gallery: <GalleryPage />,
    future: <FutureBoard />,
    surprise: <SurprisePage />
  };

  return (
    <div style={styles.app}>
      <div style={styles.navbar}>
        {Object.keys(pages).map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            style={{
              ...styles.navButton,
              backgroundColor: currentPage === page ? '#667eea' : '#764ba2'
            }}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        ))}
      </div>
      <div style={styles.content}>
        {pages[currentPage]}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  app: { minHeight: '100vh', background: 'linear-gradient(135deg, #2c003e 0%, #7e1e9c 100%)', color: '#fff' },
  navbar: { display: 'flex', justifyContent: 'center', gap: '10px', padding: '20px', flexWrap: 'wrap', background: 'rgba(0,0,0,0.3)' },
  navButton: { padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', color: '#fff', transition: 'all 0.3s' },
  container: { maxWidth: '900px', margin: '40px auto', padding: '40px', textAlign: 'center' },
  title: { fontSize: '48px', marginBottom: '20px', textShadow: '0 0 20px rgba(255,120,170,0.5)' },
  card: { background: 'rgba(102, 126, 234, 0.15)', padding: '30px', borderRadius: '15px', marginBottom: '20px', border: '1px solid rgba(102, 126, 234, 0.3)', backdropFilter: 'blur(10px)' },
  gallery: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', margin: '30px 0' },
  photoCard: { background: 'rgba(102, 126, 234, 0.2)', padding: '20px', borderRadius: '10px', cursor: 'pointer', transition: 'all 0.3s', border: '2px solid rgba(255, 120, 170, 0.3)' },
  photo: { fontSize: '60px', marginBottom: '10px' },
  timeline: { display: 'flex', flexDirection: 'column', gap: '30px', margin: '30px 0' },
  timelineItem: { background: 'rgba(102, 126, 234, 0.2)', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #ff78aa' },
  dreamGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' },
  dreamCard: { background: 'rgba(102, 126, 234, 0.2)', padding: '20px', borderRadius: '10px', border: '2px solid #4caf50' },
  list: { textAlign: 'left', listStyle: 'none', padding: '20px' },
  content: { minHeight: '70vh' }
};

export default MainApp;
