import React, { useState } from 'react';
import { ImgContainer, ImgWrapper, Img, NextBtn, PrevBtn } from './ImgSlider.style';

const ImgSlider = ({ imgUrl }) => {
  const [current, setCurrent] = useState(0);

  const nextBtnHandler = () => setCurrent(prev => prev === imgUrl.length - 1 ? 0 : prev + 1);
  const prevBtnHandler = () => setCurrent(prev => prev === 0 ? imgUrl.length - 1 : prev - 1);

  return(
    <ImgContainer>
      <NextBtn onClick={nextBtnHandler} />
      <PrevBtn onClick={prevBtnHandler} />
      {imgUrl.map((slide, index) => {return(
        <ImgWrapper isCurrent={current === index}>
          <Img src={slide.url} key={index} alt='IONIC 5'/>
        </ImgWrapper>
      )})}
    </ImgContainer>
  )
}

export default ImgSlider