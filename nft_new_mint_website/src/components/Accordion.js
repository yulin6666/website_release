import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
cursor:pointer;
padding: 1rem 0.5rem;

display: flex;
flex-direction: column;
border-bottom: 1px soliid ${props => props.theme.carouselColor};
margin: 3rem 0;
`

const Title = styled.div`
font-size:${ props => props.theme.fontlg};
display: flex;
justify-content: space-between;
aligin-items: center;
`

const Reveal = styled.div`

diplay: ${ props => props.clicked ? 'block' : 'none'};
margin-top: 1rem;
color: ${ props => props.theme.text};
font-size: ${props => props.theme.fontsm};
font-weight: 300;
line-weight: 1.1rem;
`

const Accordion = ({title,children}) => {
    const [collapse, setCollapse] = useState(false)
  return (
    <Container>
        <Title onClick={ () => setCollapse(!collapse)}> 
        {title} 
        </Title>
        <Reveal clicked = {collapse}> 
        {children}
        </Reveal>
    </Container>
  )
}

export default Accordion