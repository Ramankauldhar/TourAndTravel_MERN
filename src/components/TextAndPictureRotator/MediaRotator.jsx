import React, { useState, useEffect } from 'react';
import backgroundImg from '../../Images/backgroundImg.jpeg';
import backgroundImg2 from '../../Images/backgroundImg2.jpeg';
import backgroundVideo from '../../Images/backgroundVideo.mp4';

const MediaRotator = () => {

  const mediaUrls = [
    backgroundImg, backgroundVideo, backgroundImg2,
  ];

  const [currentmediaUrl, setCurrentMediaUrls] = useState(mediaUrls[0]);
  const isVideo = mediaUrls.includes(currentmediaUrl) && currentmediaUrl.endsWith('.mp4');

  useEffect(() => {
    const imagesInterval = setInterval(() => {
      setCurrentMediaUrls((prevImageUrl) => {
        const currentIndex = mediaUrls.indexOf(prevImageUrl);
        return mediaUrls[(currentIndex + 1) % mediaUrls.length];
      });
    }, 4000);

    return () => {
      clearInterval(imagesInterval);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {isVideo ? (
        <video src={currentmediaUrl} autoPlay muted loop className='backgroundVideo' />
      ) : (
        <img src={currentmediaUrl} alt="background" className='backgroundImage' />
      )}
      <div className='textOnImages'>
        <p className='firstText animation fadeBottom'>It's time to travel</p>
        <p className='secondText animation fadeBottom'>Let's start your travel journey with us!</p>
      </div>
    </div>
  );
};

export default MediaRotator;