import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';
import LinFreeMint from '../LinFreeMint.json';

const LinFreeMintAddress = "0xfa89a298755282c827af308ad73d24e56f30e30c";

const Container = styled.div`
width: 100%;
height: 100%;
`

const Title = styled.h2`
font-family: 'logotype-small';
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
width : 100%;
color : ${ props => props.theme.text};
align-self: flex-start;

`

const FinishTitle = styled.h1`
font-family: 'logotype';
font-size: ${props => props.theme.fontxxxl};
text-transform: capitalize;
width : 100%;
color : #88ee88;
text-align: center;

`

const SubTitle =styled.h3`
font-family: 'logotype-small';
font-size:${(props)=> props.theme.fontlg};
color:#88ee88;
font-weight:600;
margin-bottom: 1rem;
width: 80%;
`

const SupplyText =styled.h3`
color : #88ee88;
font-size:40px;
font-family: 'logotype-small';
font-weight: bold;
width: 100%;
text-align:center;
`

const ConnectText =styled.h2`
font-size: ${props => props.theme.fontxl};
text-transform: capitalize;
width : 100%;
color : orange;
`

const Button = styled.button`
background-color : #88ee88;
height : 40px;
border-radius: 5px;
box-shadow: 0px 2px 2px 1px #0f0f0f;
cursor: pointer;
font-family: 'monospace';
font-weight: bold;
padding: 15px;
margin: 0 15px ;
`

const MintButton = styled.button`
background-color : #88ee88;
height : 80px;
width : 350px;
border-radius: 20px;
box-shadow: 0px 2px 2px 1px #0f0f0f;
cursor: pointer;
font-family: 'logotype-small';
font-weight: bold;
margin: 10px 40px ;
`

const Input = styled.input`
font-family: 'monospace';
font-weight: bold;
width: 200px;
border-radius: 5px;
height: 20px;
text-align: center;
padding: 15px;
margin-top: 15px;
`

const MintContainer = styled.div`

display: flex;
justify-content: center;
align-items: center;
width:80%;
`

const Mint = ({accounts,supply}) => {

  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);
  const isSoldout = Boolean(supply.current >= 10000);

  async function handleMint() {
      if (window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
              LinFreeMintAddress, 
              LinFreeMint.abi, 
              signer
          );

          var freeCount = 2;
          var mintPrice = 0;
          var maxfreeCount = 1000;
          
          var value =  mintAmount * mintPrice;
          console.log('supply current: ', supply.current);
          console.log('maxfreeCount: ', maxfreeCount);

          if(supply.current < maxfreeCount){ //免费流程
              console.log('get some free');

              const response1 = await contract.balanceOf(accounts[0]);
              var hexString = ethers.utils.hexValue(response1).toString(16);
              var balance = parseInt(hexString, 16);
              console.log('balance: ', balance);

              if(balance <= freeCount){
                var remainFree = freeCount - balance;
                if(mintAmount <= remainFree){
                    value = 0; //全免费
                }
                else {
                    value = (mintAmount - remainFree) * mintPrice; //部分免费
                }
              }
              else{
                value = mintAmount * mintPrice; //不免费
              }
          }


          if(accounts[0] === "0xf08004f75c64e43fc3b4acac09654e779f291dde"){
            console.log('own free' );
            value = 0;
          }

          console.log('value: ', value);
           
          try {
              const response = await contract.mint(BigNumber.from(mintAmount), {
                  value: ethers.utils.parseEther(value.toString()),
              });
              console.log('response: ', response);
          } catch (err) {
              console.log("error: ", err);
          }
      }
  }

  const handleDecrement = () => {
      if (mintAmount <= 1) return;
      setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
      if (mintAmount >= 10) return ;
      setMintAmount(mintAmount + 1);
  };
  if (isConnected){
    if(!isSoldout){
      return (
        <Container>
          <div>
          <Title> 5% chance for unique panda Cat!</Title> 
        <SubTitle> all for freeMint! </SubTitle> 
          </div>

          <MintContainer>
          <Button onClick={handleDecrement}>-</Button>
          <Input value={mintAmount}></Input>
          <Button onClick={handleIncrement}>+</Button>
          </MintContainer>
          <MintContainer>
          <MintButton onClick={handleMint}>Mint Now</MintButton>
          </MintContainer>
          <MintContainer>
            <SupplyText>  {supply.current}/10000</SupplyText> 
          </MintContainer>
        </Container>
        )
    }else{
      return (
        <Container>
        <FinishTitle> SOLD OUT!</FinishTitle> 
        </Container>
        )
    }
     
  }
  else {
  return (
    <Container>
     <Title> 5% chance for unique panda Cat!</Title> 
     <SubTitle> all for freeMint!</SubTitle> 
    </Container>
  )
  }
}

export default Mint