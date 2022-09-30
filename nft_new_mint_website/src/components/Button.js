import React from 'react'
import styled from 'styled-components'
import { ethers, BigNumber } from 'ethers';
import LinFreeMint from '../LinFreeMint.json';

const LinFreeMintAddress = "0xfa89a298755282c827af308ad73d24e56f30e30c";

const Btn = styled.button`
display: inline-block;


background-color:#88ee88;
color:${props => props.theme.body};
outline: none;
boorder: none;

font-size:${props => props.theme.fontlg};
padding: 0.9rem 2rem;
border-radius: 50px;
cursor : pointer;
transition: all 0.2s ease;
font-family: 'logotype-small';

&:hover{
  transform: scale(0.9);
}
`

const BoxContainer = styled.div`
padding: 1rem 0.5rem;
color:#88ee88;

margin: 3rem 0;
width: 30%;

`


const Box = styled.span`
text-transform: uppercase;
color:#88ee88;
display:inline-block; 
width:200px; 
font-family: 'logotype-small';

`

const Button = ({accounts, setAccounts,setSupply,text}) => {
  const isConnected = Boolean(accounts[0]);

  async function connectAccount() {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
        });
        setAccounts(accounts);

        //获取总数
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            LinFreeMintAddress, 
            LinFreeMint.abi, 
            signer
        );
        
        console.info('contract:',contract);
        try {
            const response = await contract.totalSupply();
            console.log('response: ', response);

            var hexString = ethers.utils.hexValue(response).toString(16);
            console.log('hexString: ', hexString);
            var current = parseInt(hexString, 16);
            setSupply({current:current})

        } catch (err) {
            console.log("error: ", err);
        }
    }
  }

  if (isConnected)
  return (
      <BoxContainer>
      <Box >
        {accounts}
      </Box>
      </BoxContainer>
     
    )
  else 
  return (
      <Btn onClick={connectAccount}>
      {text}
  </Btn>
    )
}

export default Button