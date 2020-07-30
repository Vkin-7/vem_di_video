import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

import Right from '../../../../assets/img/arrow_right.svg'
import Left from '../../../../assets/img/arrow_left.svg'

const Container = styled.ul`
  padding: 0;
  margin: 0;

  .arrowRight, .arrowLeft {
    z-index: 5000;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    display: 'flex';
    justify-content: 'center';
    align-items: 'center';
    cursor: pointer;
  }

  .arrowRight {
    right: 16px;
  }

  .arrowLeft {
    left: 0
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const ArrowRight = (props) => {
  const {onClick} = props
  return (
      <div
          style={{position: 'absolute', background: 'transparent'}}
          className='arrowRight'
          onClick={onClick}
      >
        <img src={Right} alt='Seta que aponta para a direita' />
      </div> 
          
  );
}

const ArrowLeft = (props) => {
  const {onClick} = props
  return (
      <div
          style={{position: 'absolute', background: 'transparent'}}
          className='arrowLeft'
          onClick={onClick}
      >
        <img src={Left} alt='Seta que aponta para a esquerda' />
      </div> 
          
  );
}

const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      slidesToScroll: 2,
      prevArrow: <ArrowLeft />,
      nextArrow: <ArrowRight />
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 