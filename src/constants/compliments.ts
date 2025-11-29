// Comprehensive compliment system for all interactions
export const COMPLIMENTS = {
  action: {
    dreamAdded: 'What a beautiful dream! Your future is looking bright!',
    dreamArchived: 'You\'ve got amazing dreams!',
    gameStarted: 'Let\'s have some fun! I love your playful side!',
    gameWon: 'You absolutely crushed it! Impressive!',
    letterRead: 'Your love is inspiring!',
    photoViewed: 'Precious memories you two share!',
    galleryVisited: 'What a beautiful collection of moments!',
    aiGenerated: 'Your creativity is endless!',
  },
  general: [
    'You two are absolutely adorable!',
    'Your love story is truly inspiring!',
    'Together, you shine brighter!',
    'Perfect match made in heaven!',
    'Every moment with you is special!',
    'Love looks good on you!',
    'You make each other better!',
    'You\'re a power couple!',
    'Your chemistry is incredible!',
    'You\'re each other\'s greatest gift!',
    'Together you create magic!',
    'You deserve all the happiness!',
    'The way you look at each other is beautiful!',
    'Your bond is unbreakable!',
    'Love is written all over your faces!',
    'You\'re each other\'s biggest fan!',
    'This love deserves celebration!',
    'Couple goals right here!',
    'Two hearts, one love!',
    'Your love lights up the world!',
  ],
  page: {
    home: 'Welcome to your love story!',
    games: 'Time for some romantic fun!',
    gallery: 'Cherish these beautiful moments!',
    letters: 'Pour your heart out here!',
    timeline: 'Your journey together is beautiful!',
    future: 'Dream big together!',
    aiGenerator: 'Let\'s create something magical!',
  },
};

export function getRandomCompliment(): string {
  return COMPLIMENTS.general[Math.floor(Math.random() * COMPLIMENTS.general.length)];
}
