import React from 'react'
import styled from 'styled-components'
import Accordion from '../Accordion'

const Section = styled.section`
min-height:100vh;
width:100vw;
background-color: ${ props => props.theme.body};
position: relative;
font-family: 'logotype-small';


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Title = styled.h1`
font-size: ${props => props.theme.fontxxl};
text-transform: uppercase;
color : ${ props => props.theme.text};

margin: 1rem auto;
border-bottom: 2px solid ${(props) => props.theme.carouselColor};
width: fit-content;
`

const Container = styled.div`
width: 75%;
margin: 2rem auto;
`
const Box = styled.div `
width:100%;
color : ${ props => props.theme.text};

`


const Faq = () => {
  return (
    <Section>
      <Title>Faq</Title>
    <Container>
      <Box>
        <Accordion  title="When is the launch? How much does it cost?">
            TBD. The price is 0.02 eth each. You can have 2 for free(for the first 1000),and you can maximumly mint 10 NFTs per wallet.
        </Accordion>
        <Accordion  title="is there all the panda-like cat?">
            No,you can only have 5% possibile to own one panda-like cat, but don't worry, others is also very cut.
        </Accordion>
      </Box>
    </Container>
    </Section>
  )
}

export default Faq