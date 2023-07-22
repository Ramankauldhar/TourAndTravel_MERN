import React, { useState, useEffect } from 'react';
import backgroundImg from '../../Images/backgroundImg.jpg';
import backgroundImg2 from '../../Images/background2.jpeg';

const ImageRotator = () => {
 
  const imagesUrls = [
    backgroundImg, backgroundImg2
  ];

  const [currentimagesUrl, setCurrentimagesUrls] = useState(imagesUrls[0]);

  useEffect(() => {
    const imagesInterval = setInterval(() => {
      setCurrentimagesUrls((prevImageUrl) => {
        const currentIndex = imagesUrls.indexOf(prevImageUrl);
        return imagesUrls[(currentIndex + 1) % imagesUrls.length];
      });
    }, 4000);

    return () => {
      clearInterval(imagesInterval);
    };
  }, []);

  return (
    <div>
      <img src={currentimagesUrl} alt="background" className='backgroundImage'/>
    </div>
  );
};

export default ImageRotator;