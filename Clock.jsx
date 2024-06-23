import React, { useContext } from 'react';
import { LanguageContext, languages } from './LanguageContext';

const Clock = () => {
  const language = useContext(LanguageContext);
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div>
      {languages[language]}: {currentTime}
    </div>
  );
};

export default Clock;
