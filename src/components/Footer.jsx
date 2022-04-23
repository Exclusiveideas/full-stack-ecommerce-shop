import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import { flexbox } from '@mui/system';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const Title = styled.h3`
   margin-bottom: 30px;
`;

const List = styled.ul`
   list-style: none;
   margin: 0;
   padding: 0;
   display: flex;
   flex-wrap: wrap;
`;

const ListItem = styled.li`
   width: 50%;
   margin-bottom: 10px;
`;

const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
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
                <Room style={{marginRight: '10px'}} />
                622 Dixie Path, South Tobinchester 98336
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight: '10px'}} />
                +1 234 567 8910
            </ContactItem>
            <ContactItem>
                <Mail style={{marginRight: '10px'}} />
                contact@exclusiveideas.com
            </ContactItem>
            <Payment src="" />
        </Right>
    </Container>
  )
}

export default Footer