import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { mobile, medium } from '../responsive';

const Container = styled.div`
  display: flex;
  
  ${medium({ flexDirection: "column" })}
  // ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  
  ${medium({ alignItems: "center", justifyContents: "center" })}
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  
  ${medium({ display: "flex", flexDirection: "column", alignItems: "center", justifyContents: "center" })}
  ${mobile({ display: "none" })}
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const Title = styled.h3`
   margin-bottom: 30px;
   
   ${medium({ textAlign: "center" })}
`;

const List = styled.ul`
   list-style: none;
   margin: 0;
   padding: 0;
   display: flex;
   flex-wrap: wrap;
   
   ${medium({ flexWrap: "none" })}
   
`;

const ListItem = styled.li`
   width: 50%;
   margin-bottom: 10px;

   
   ${medium({ textAlign: "center" })}
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
  
  ${medium({ margin: "10px 0px" })}
`;
const SocialCont = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover{
      transform: scale(1.1);
  }
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`
const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-contents: center;
`

const P = styled.p`
  flex: 1;
  ${medium({ textAlign: "center", fontSize: "15px" })}
`
const Payment = styled.img`
  width: 100%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Exclusive Ideas</Logo>
        <Desc>Innovating one business at a time.</Desc>
        <SocialCont>
          <SocialIcon color='3B5999'>
            <Facebook />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <Instagram />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <Twitter />
          </SocialIcon>
          <SocialIcon color='E60023'>
            <Pinterest />
          </SocialIcon>
        </SocialCont>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Div>
            <Room style={{ marginRight: '10px' }} />
            <P>622 Dixie Path, South Tobinchester 98336</P>
          </Div>
        </ContactItem>
        <ContactItem>
          <Div>
            <Phone style={{ marginRight: '10px' }} />
            <P>+1 234 567 8910</P>
          </Div>
        </ContactItem>
        <ContactItem>
          <Div>
            <Mail style={{ marginRight: '10px' }} />
            <P>contact@exclusiveideas.com</P>
          </Div>
        </ContactItem>
        <Payment src="" />
      </Right>
    </Container>
  )
}

export default Footer