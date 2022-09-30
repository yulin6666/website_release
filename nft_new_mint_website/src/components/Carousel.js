import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination,Navigation,Autoplay, EffectCards } from "swiper";

import img1 from '../assets/Nfts/001.png';
import img2 from '../assets/Nfts/002.png';
import img3 from '../assets/Nfts/003.png';
import img4 from '../assets/Nfts/004.png';
import img5 from '../assets/Nfts/005.png';
import img6 from '../assets/Nfts/006.png';
import img7 from '../assets/Nfts/007.png';
import img8 from '../assets/Nfts/008.png';
import img9 from '../assets/Nfts/009.png';

import Arrow from '../assets/Arrow.svg';

const Container = styled.div `
width: 25vw;
height: 70vh;

.swiper{
    width:100%;
    height: 100%;
}

.swiper-slide{
    background-color: ${ props => props.theme.carouselColor };
    border-radius: 20px;
}

.swiper-button-next{
    color : ${ props => props.theme.text};
    right : 0 ;
    width: 4rem;
    top: 60%;

    background-image:url(${Arrow});
    background-position: center;
    background-size: cover;

    &:after{
      display: none;
    }
}

.swiper-button-prev{
  color : ${ props => props.theme.text};
  left : 0 ;
  top: 60%;
  width: 4rem;
  transform:rotate(180deg);

  background-image:url(${Arrow});
  background-position: center;
  background-size: cover;

  &:after{
    display: none;
  }
}
`

const Carousel = () => {
  return (
    <Container>
        <Swiper
        autoplay = {{
            delay: 2000,
            disableOnInteraction: true
        }}
        pagination = {{
            type : 'fraction',
        }}
        scrollbar = {{
            draggable:true
        }}
        navigation = {true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards,Pagination,Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="the weirdos"/></SwiperSlide>
        <SwiperSlide><img src={img2} alt="the weirdos"/></SwiperSlide>
        <SwiperSlide><img src={img3} alt="the weirdos"/></SwiperSlide>
        <SwiperSlide><img src={img4} alt="the weirdos"/></SwiperSlide>
        <SwiperSlide><img src={img5} alt="the weirdos"/></SwiperSlide>
        <SwiperSlide><img src={img6} alt="the weirdos"/></SwiperSlide>
        <SwiperSlide><img src={img7} alt="the weirdos"/></SwiperSlide>
        <SwiperSlide><img src={img8} alt="the weirdos"/></SwiperSlide>
        <SwiperSlide><img src={img9} alt="the weirdos"/></SwiperSlide>

      </Swiper>
    </Container>
  )
}

export default Carousel