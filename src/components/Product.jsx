import { Favorite, FavoriteBorderOutlined, FavoriteBorderRounded, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
      opacity: 1;
  }
`;

const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  const [loved, setLoved] = useState(false);

  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <ShoppingCartOutlined />
          </Link>
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon onClick={() => setLoved(!loved)} >
          {loved ? <Favorite style={{color:"red"}} /> : <FavoriteBorderOutlined />}
        </Icon>
      </Info>
    </Container>
  )
}

export default Product