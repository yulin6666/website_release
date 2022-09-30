import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/show.jpeg';


const VideoContainer = styled.div`
width : 100%;

`

const Img = styled.img`
border-radius: 20px;
margin: 5rem 0;

`

const CoverVideo = () => {
  return (
    <VideoContainer>
        <Img src={img1} alt="the weirdos" />
    </VideoContainer>
  )
}

export default CoverVideo