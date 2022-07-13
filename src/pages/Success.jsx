import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ backgroundSize: "cover" })}
 
`;
const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

const P = styled.p` 
  cursor: pointer;
  color: teal;
  fontsize: 18px;
  text-align: center;
  ${mobile({ fontsize: '15px'})}
`

const SLink = styled(Link)` 
  text-decoration: none;
`


const Success = () => {
    
  return (
    <Container>
      <Wrapper>
        <Title>THANK YOU FOR SHOPPING WITH US</Title>
        <SLink to="/" replace><P>continue shopping</P></SLink>
      </Wrapper>
    </Container>
  )
}

export default Success