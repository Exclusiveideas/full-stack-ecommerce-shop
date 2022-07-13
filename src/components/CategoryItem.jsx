import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile, medium } from '../responsive';


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;

  ${mobile({ height: "33vh" })}
`
const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  
  ${mobile({ height: "33vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  text-align: center;
  
  ${medium({  fontSize: "18px"})}
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  
  ${medium({ padding: "7px", fontSize: "14px"})}
`;


const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem