import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeScreen from './components/WelcomeScreen';
import MainContent from './components/MainContent';

function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleOpenInvitation = () => {
    setShowMainContent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-gold-50">
      <AnimatePresence mode="wait">
        {!showMainContent ? (
          <WelcomeScreen key="welcome" onOpenInvitation={handleOpenInvitation} />
        ) : (
          <MainContent key="main" />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;