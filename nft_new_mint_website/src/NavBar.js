import React from "react";
import {Box,Button,Flex,Image,Link,Spacer} from "@chakra-ui/react";
import Facebook from "./assets/social-media-icons/facebook_32x32.png";
import Twitter from "./assets/social-media-icons/twitter_32x32.png";
import Discord from "./assets/social-media-icons/discord.png";
import logo from "./assets/logo.png";

import Email from "./assets/social-media-icons/email_32x32.png";

const NavBar = ({ accounts, setAccounts})=>{
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            setAccounts(accounts);
        }
    }

    return (
        <Flex justify="space-between" align="center" padding="30px">
            
            {/*left side - social media icons */}
            <Flex justify="start" width="40%" padding="0 75px">
            {/* <Link href="https://twitter.com/GennNFT33">
                        <Image src={logo} boxSize="100" margin="0 15px" />
                    </Link> */}
            </Flex>


            {/*right side - dections and connect */}
            <Flex justify="space-around" align="center" width="40%" padding="30px">
                  <Flex justify="space-around" width="40%" padding="0 75px">
                    <Link href="https://discord.com/invite/GeFg23b3">
                        <Image src={Discord} boxSize="42px" margin="0 15px" />
                    </Link>
                    <Link href="https://twitter.com/GennNFT33">
                        <Image src={Twitter} boxSize="42px" margin="0 15px" />
                    </Link>
                </Flex>

                 {/* connect*/}
                {isConnected ? (
                    <Box margin="0 15px">Connected </Box>
                ):(
                    <Button 
                    backgroundColor = "#D6517D"
                    borderRadius="5px"
                    boxShadow = "0px 2px 2px 1px #0F0F0F"
                    color = "white"
                    cursor = "pointer"
                    fontFamily = "inherit"
                    padding = "15px"
                    margin = "0 15px"
                    onClick={connectAccount}>
                        Connect
                        </Button>
                )}
            </Flex>
        </Flex>
    )
}

export default NavBar