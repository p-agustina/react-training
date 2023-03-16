import { useState } from 'react';

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  const handleLeftClick = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='Carousel'>
    <div className='CarouselImg'>
      <img src={images[index]} alt="carousel" />
      </div>
      <div className='CarouselBtns'>
      <button onClick={handleLeftClick}>Previous</button>
      <button onClick={handleRightClick}>Next</button>
</div>    
    </div>
  );
}

export default Carousel;
