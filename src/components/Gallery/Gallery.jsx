import React from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import galleryArray from './GalleryArr';

const Gallery = () => {
  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3, 992:4}}> 
        <Masonry gutter='1rem'>
            {
                galleryArray.map((item, index) => (
                    <img 
                      src={item} 
                      key={index} 
                      alt="gallery" 
                      style={{width: "100%", height: "auto", display:"block", borderRadius:"10px"}}
                      className='masonryImages'/>
                ))
            }
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}

export default Gallery;
