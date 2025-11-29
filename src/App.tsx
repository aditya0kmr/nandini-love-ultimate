import React, { useState } from 'react';
import NavigationBar3D from './components/Navigation3D/NavigationBar3D';
import { HomePage, LoveLettersPage, GalleryPage, TimelinePage, GamesPage, MessagesPage, SpecialMessagesPage, ArtisticPage, SurprisePage } from './pages/AllPages';
import './styles/App.css';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'letters':
        return <LoveLettersPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'timeline':
        return <TimelinePage />;
      case 'games':
        return <GamesPage />;
      case 'messages':
        return <MessagesPage />;
      case 'special':
        return <SpecialMessagesPage />;
      case 'art':
        return <ArtisticPage />;
      case 'surprise':
        return <SurprisePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app-container">
      <main className="page-container">{renderPage()}</main>
      <NavigationBar3D currentPage={currentPage} onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
