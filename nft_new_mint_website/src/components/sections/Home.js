import React from "react";
import styled from "styled-components";
import CoverVideo from "../CoverVideo";
import Mint from "../Mint";

const Section = styled.section`
min-height: ${ props => `calc(100vh - ${props.theme.navHeight})` };
width: 100vw;
position: relative;
background-color: ${props => props.theme.body} ;
`

const Container = styled.div `
width : 75%;
min-height : 80vh;
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


const Home = ({accounts,supply})=>{
    return (
        <Section>
            <Container>
                <Box> <CoverVideo />  </Box>
                <Box> <Mint accounts={accounts} supply={supply}/></Box>
            </Container>
        </Section>
    )
}

export default Home