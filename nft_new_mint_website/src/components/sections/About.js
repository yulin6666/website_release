import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Carousel from '../Carousel'
import Button from '../Button'
import {dark} from '../../styles/Themes'

const Section = styled.section`
min-height: 100vh;
width :100%;
background-color: ${props => props.theme.text};

display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const Container = styled.div `
width : 75%;
margin:0 auto;

display: flex;
justify-content: center;
align-items: center;
`

const Box = styled.div `
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Title = styled.h2`
font-size: ${props => props.theme.fontxxxl};
text-transform: capitalize;
font-family: 'logotype-small';
color: #88ee88;
width : 80%;

align-self: flex-start;
margin:0 auto;
`

const SubText = styled.p`
font-size: ${props => props.theme.fontlg};
color : ${ props => props.theme.body};
font-family: 'logotype-small';
align-self: flex-start;
width : 80%;
margin:1rem auto;
font-weight:400;
`

const SubTextLight = styled.p`
font-size: ${props => props.theme.fontsm};
color : ${ props => `rgba(${props.theme.bodyRgba},0.6)`};
font-family: 'logotype-small';
align-self: flex-start;
width : 80%;
margin:1rem auto;
font-weight:400;
`

const ButtonContainer = styled.div`
width: 80%;
margin: 1rem auto;
align-self: flex-start;
`


const About = () => {
  return (
    <Section>
       <Container>
          <Box> <Carousel /> </Box>
          <Box> 
            <Title>
              THE STORY 
            </Title>
            <SubText>
            The Asian Cats are a collection of 10,000 randomly generated NFTs ,They come from Japan, China, Korea, etc. You can find ramen, kung fu, kimono, bushido spirit, any asian spirit，You even have a 5% chance of getting a panda cat from china。Artists from China show you the beauty of Asia~

            </SubText>
            <SubTextLight>
            there are 500 cute pandk-like Cat,so You have a 5% chance of getting a unique one! 
            also everyone can mint 2 for free! there are total 1000 free NFTs for you！
            </SubTextLight>
           </Box>
       </Container>
    </Section>
  )
}

export default About