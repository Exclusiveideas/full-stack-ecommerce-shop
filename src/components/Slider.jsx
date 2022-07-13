import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, { useState } from 'react'
import styled from 'styled-components';
import { sliderItems } from '../data';
import { mobile, medium } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && '10px'};
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
  ${medium({ marginLeft: `${props => props.direction === "left" && "20px"} `})}
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.index * -100}vw)}
`
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
  ${medium({ position: "relative"})}
`
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  margin-left: 10px;
`
const Image = styled.img`
  height: 100%;

  ${medium({ height: "100%", width: "100vw"})}
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;

  ${medium({ position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", justifyContents: "center"})}
`
const Title = styled.h1`
  font-size: 70px;
  ${medium({fontSize: "55px", textAlign: "center"})}
  ${mobile({fontSize: "40px"})}
`
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  ${medium({fontSize: "16px", textAlign: "center", margin: "25px 0px"})}
  ${mobile({color: `${props => props.index === "3" && "white"} `})}
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: ${props => props.index !== 1 ? "black" : "transparent"};
  cursor: pointer;
  color: ${props => props.index !== 1 ? "white" : "black"};
  transition: all 0.3s ease;
  &:hover {
    background-color: ${props => props.index != 1 ? "white" : "black"};
    color:  ${props => props.index !== 1 ? "black" : "white"};
  }
  ${medium({ fontSize: "15px"})}
`


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (dir) => {
    if (dir === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    } else if (dir === "right") {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper index={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description index={item.id}>{item.desc}</Description>
              <Button index={item.id}>SHOP NOW</Button>
            </InfoContainer>
          </Slide>))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider