import React, { useState } from 'react';
import { LanguageProvider } from './LanguageContext';
import Clock from './Clock';

const App = () => {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageProvider language={language}>
      <div>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>
        <Clock />
      </div>
    </LanguageProvider>
  );
};

export default App;
