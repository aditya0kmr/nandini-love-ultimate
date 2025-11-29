import React, { useState } from 'react';

// ----- NANDINI & AADI PERSONALIZED PAGES - ALL 9 IMPROVEMENTS -----

const HomePage = () => ({
  title: "💛 Our Story Begins",
  subtitle: "Nanniii 💖 Aadi - Our Forever Story",
  welcome: "Welcome to our special world, Nanniii. This space exists to celebrate our love. Every pixel, every word, every design - made thinking of YOU. 'You are my greatest adventure, my safest home, and my forever love.' - Aadi",
  content: "<p>Aadi & Nandini 💕</p><p>It all started with a smile, a look, and a feeling.</p><p>'And now you're my favorite chapter in life.'</p>
});

const LoveLettersPage = () => ({
  title: "💌 Love Letters",
  fromAadi: "Dear Nanniii, I'm writing this letter to tell you everything you mean to me. Nanniii, you are: My reason to smile every morning, My safe place when the world feels too big, My greatest adventure, My home, no matter where we are, My forever love. Before you, I didn't know what real love meant. Now I understand - it's you. Forever yours, Aadi 💖",
  fromNandini: "My Love, You created this entire website thinking of me. You put in months of work to make me smile. That's love. Thank you for believing in me, supporting my dreams, loving me completely, creating this beautiful space, and choosing me every day. I love you with everything I am. Forever, Nanniii 💕"
});

const GalleryPage = () => ({
  title: "📸 Our Beautiful Memories",
  memories: [
    { title: "Our First Meeting", caption: "The day I met my forever" },
    { title: "First Kiss", caption: "Nanniii, you are my soulmate" },
    { title: "Adventures Together", caption: "You make life magical" },
    { title: "Special Moments", caption: "Precious memories with you" },
    { title: "Your Smile", caption: "My favorite view in the world" },
    { title: "Us Together", caption: "My greatest blessing" }
  ]
});

const TimelinePage = () => ({
  title: "📅 Our Love Timeline",
  milestones: [
    { day: "Day 1", title: "When We Met", text: "The day everything changed. The day I met my forever." },
    { day: "Day 100", title: "First Milestone", text: "100 days with you and I'm completely in love. Every moment feels precious." },
    { day: "Day 365", title: "First Anniversary", text: "One year with you, Nanniii. One year of laughter, love, and endless moments." },
    { day: "Day 500", title: "Halfway to Infinity", text: "500 days with you - still my favorite person, still my greatest blessing." },
    { day: "Day 684", title: "Today", text: "Our special day. 684 days of loving you more. And I want forever more days with you." }
  ]
});

const GamesPage = () => ({
  title: "🎮 Games & Fun",
  intro: "Games & Fun with Nanniii! Let's Play Together! Nanniii, these games are just excuses to: Laugh together, Know each other better, Create more memories, Play life together. Let's make some beautiful memories, Nanniii!"
});

const MessagesPage = () => ({
  title: "💬 50+ Compliments",
  compliments: [
    "Nanniii, your smile is the reason I smile.",
    "The way you care about others shows your beautiful heart.",
    "You make me want to be the best version of myself.",
    "Nanniii, forever isn't long enough with you.",
    "I love how you see the good in everyone.",
    "Your strength inspires me daily.",
    "Nanniii, you are my greatest dream.",
    "Thank you for loving me.",
    "You make ordinary days extraordinary.",
    "Nanniii, I choose you. Every single day.",
    "Your laugh is the best music I know.",
    "I love how passionate you are about life.",
    "Nanniii, you are so incredibly beautiful.",
    "The way you listen makes me feel heard.",
    "You inspire me to be better every day.",
    "Nanniii, my life is better because you're in it.",
    "I love your adventurous spirit.",
    "Your kindness sets you apart from everyone.",
    "Nanniii, you make me feel like I'm home.",
    "I'm grateful for you every single day.",
    "Your dreams matter to me.",
    "Nanniii, I love every part of you.",
    "You are stronger than you believe.",
    "I love how you make me laugh.",
    "Nanniii, you are my favorite person.",
    "Thank you for being exactly who you are.",
    "I love your mysterious smile.",
    "Nanniii, you make my heart skip a beat.",
    "Your intelligence amazes me.",
    "I love waking up next to you.",
    "Nanniii, I'm obsessed with you.",
    "You are my person.",
    "I love how you challenge me.",
    "Nanniii, you deserve all the happiness.",
    "Your presence brings me peace.",
    "I love your authentic self.",
    "Nanniii, I see forever with you.",
    "Thank you for your unconditional love.",
    "You are my safe place.",
    "Nanniii, I love how you love me.",
    "Your creativity inspires me.",
    "I love your generous heart.",
    "Nanniii, you are my greatest adventure.",
    "Thank you for believing in us.",
    "I love every moment with you.",
    "Nanniii, you are irreplaceable.",
    "Your loyalty means everything.",
    "I love how you see the best in me.",
    "Nanniii, you are my soulmate.",
    "I love you more every day."
  ]
});

const SpecialMessagesPage = () => ({
  title: "💝 Words From My Heart",
  message: "Nanniii, I wanted to create this space to tell you things I sometimes struggle to say out loud. I see you. I see your strength. I see your beauty. I see your heart. I see your dreams. I see your potential. I see forever with you. You are not just my love. You are my greatest blessing. You are my safe place. You are my home. You are my everything. Thank you for being you. Thank you for choosing me. Thank you for loving me. I love you, Nanniii. Forever and always, Aadi 💖"
});

const ArtisticPage = () => ({
  title: "🎨 Creative Love",
  poetry: [
    "If I Could Paint Love (I would paint you, Nanniii) Every beautiful detail, Every perfect imperfection, The way your eyes light up when you smile, The way your presence calms my storms, The way your love makes me whole. You are my masterpiece, Nanniii.",
    "You Are My Home: Before you: I was searching, Now: I'm at peace, Forever: I'm coming home (to you). Because home isn't a place, Nanniii. Home is you.",
    "To My Forever Person: 684 days and counting, But forever isn't enough time, To tell you how much I love you, To show you how special you are, To celebrate every moment with you. But I'll spend forever trying, Nanniii."
  ]
});

const SurprisePage = () => ({
  title: "🎉 Something Special",
  surprise: "Nanniii, if I could give you one thing in this world, it would be the ability to see yourself the way I see you. I see a woman who is: Incredibly strong, Beautifully compassionate, Genuinely kind, Worthy of all the love in the world, My forever love, MY NANNIII. Thank you for being exactly who you are. Thank you for choosing me. Thank you for loving me. I love you, Nanniii. Forever, Aadi 💕"
});

export { HomePage, LoveLettersPage, GalleryPage, TimelinePage, GamesPage, MessagesPage, SpecialMessagesPage, ArtisticPage, SurprisePage };
