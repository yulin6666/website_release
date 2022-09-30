import React from 'react'
import styled from 'styled-components'

const LogoText = styled.h1`
font-family: 'logotype';
font-size:5em;
color:#88ee88;
line-height: 1em;
margin-top: 10px;
margin-bottom: 20px;
text-shadow:4px 4px opx #444;
`

const Logo = () => {
  return (
    <LogoText>
        AsianCat
    </LogoText>
  )
}

export default Logo