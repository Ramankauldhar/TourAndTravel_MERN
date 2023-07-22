import React, { useState, useEffect } from 'react';

const TextRotator = () => {
  const texts = ["Welcome To Tour and Travel company!", "Wants to start your trip journey with us?", "Hurry Up! Book Your next trip with us."];

  const [currentText, setCurrentText] = useState(texts[0]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = texts.indexOf(prevText);
        return texts[(currentIndex + 1) % texts.length];
      });
    }, 4000);
    return () => {
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div>
      <p className='hurryText'>{currentText}</p>
    </div>
  );
};

export default TextRotator;