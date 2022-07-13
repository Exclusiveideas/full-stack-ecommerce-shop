import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components';
import { mobile, medium } from '../responsive';


const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  
  ${medium({  fontSize: "50px"})}
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  text-align: center;
  
  ${medium({  fontSize: "20px"})}
`;

const InputCont = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  
  ${medium({  width: "40%", height: "35px"})}
  ${mobile({ width: "80%" })}
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Input = styled.input`
  border: none;
  outline: none;
  flex: 8;
  padding-left: 20px;
`;


const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products.</Description>
        <InputCont>
           <Input placeholder='Your email'/>
           <Button>
               <Send />
           </Button>
        </InputCont>
    </Container>
  )
}

export default NewsLetter