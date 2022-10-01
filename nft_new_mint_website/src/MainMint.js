import { useState } from "react";
import { ethers, BigNumber } from 'ethers';
import {Box,Button,Flex,Input,Text} from "@chakra-ui/react";
import LinFreeMint from './LinFreeMint.json';

const LinFreeMintAddress = "0xf70d3744df65ebecfb3485b692d1b969c54c0089";

const 　MainMint = ({ accounts, setAccounts})=>{
    // const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                LinFreeMintAddress, 
                LinFreeMint.abi, 
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(1),{
                    value: ethers.utils.parseEther((0 * 1).toString())
                }
                );
                console.log('response: ', response);
            } catch (err) {
                console.log("error: ", err);
            }
        }
    }

    // const handleDecrement = () => {
    //     if (mintAmount <= 1) return;
    //     setMintAmount(mintAmount - 1);
    // };
  
    // const handleIncrement = () => {
    //     if (mintAmount >= 2) return ;
    //     setMintAmount(mintAmount + 1);
    // };

    return (
        <Flex justify="center" align="center" height="100vh" padding="150px">
            <Box width="520px" >
                <div>
                    <Text fontSize="48px" textShadow="0 5px #000000">GENNO</Text>
                    <Text
                        fontSize="30px"
                        letterSpacing = "-5.5%"
                        fontFamily = "VT323"
                        textShadow= "0 2px 2px #000000"
                    >
                       In the eastern plateau Phakumda ，the master felt a dark force creeping toward the earth. At the same time, An enlightenment monk felt the change of rivers and mountains. They communicate through spiritual strength to assemble a team of defenders with great psychic powers.
                    </Text>
                </div>
               
                {isConnected ?(
                    <div>
                        <Flex align="center" justify="center">
                            {/* <Button 
                            backgroundColor = "#D6517D"
                            borderRadius="5px"
                            boxShadow = "0px 2px 2px 1px #0F0F0F"
                            color = "white"
                            cursor = "pointer"
                            fontFamily = "inherit"
                            padding = "15px"
                            margin = "10px"
                            onClick={handleDecrement}>
                            -
                            </Button>
                            <Input 
                            readOnly
                            fontFamily = "inherit"
                            width="100px"
                            height="40px"
                            textAlign="cneter"
                            paddingLeft="19px"
                            marginTop ="10px"
                            type="number" 
                            value={mintAmount}/>
                            <Button 
                            backgroundColor = "#D6517D"
                            borderRadius="5px"
                            boxShadow = "0px 2px 2px 1px #0F0F0F"
                            color = "white"
                            cursor = "pointer"
                            fontFamily = "inherit"
                            padding = "15px"
                            margin = "10px"
                            onClick={handleIncrement}>
                            +
                            </Button> */}
                        </Flex>
                        <Button 
                        backgroundColor = "#D6517D"
                        borderRadius="5px"
                        boxShadow = "0px 2px 2px 1px #0F0F0F"
                        color = "white"
                        cursor = "pointer"
                        fontFamily = "inherit"
                        padding = "15px"
                        margin = "10px"
                        onClick={handleMint}>
                            1 free mint
                            </Button>
                    </div>
                ):(
                    <Text 
                    marginTop="70px"
                    fontSize="30px" 
                    letterSpacing="-5.5%"
                    fontFmaily="VT323"
                    textShadow="0 3px #000000"
                    color= "#D6517D"
                    >you must be connected to Mint</Text>

                )
                }
            </Box>
            
        </Flex>
    )

};

export default MainMint;
