import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { mobile, medium } from "../responsive";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  width: 100vw;
  margin-bottom: 10px;
  display: flex;
  alignItems: center;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 30px 10px 20px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  display: flex;
  alignItems: center;
  justifyContent: space-between;

  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  ${mobile({ display: "none" })}
  ${medium({ fontSize: "12px" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  ${mobile({ marginLeft: '19px' })}
  ${medium({ padding: "3px" })}
`;

const Input = styled.input`
  border: none;
  outline: none;

  ${mobile({ width: "50px" })}
  ${medium({ width: "65px", fontSize: "14px"})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  
  ${medium({ marginLeft: "7px"})}
`;

const Logo = styled.h1`
  font-weight: bold;
  
  ${medium({ marginLeft: "7px", fontSize: "15px"})}
  ${mobile({ marginLeft: "7px", fontSize: "15px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  ${medium({ flex: 1.5, display: "flex", alignItems: "center", justifyContent: "space-between"})}
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const SLink = styled(Link)`
   text-decoration: none;
   
   ${medium({fontSize: "12px"})}
  
`

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity);
  const user = useSelector(state => state.user.currentUser);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <SLink to="/"><Logo>EXCLUSIVE IDEAS</Logo></SLink>
        </Center>
        <Right>
          <MenuItem><SLink to='/register'> REGISTER</SLink></MenuItem>
          <MenuItem><SLink to='/login'> SIGN IN</SLink></MenuItem>
          <SLink to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </SLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;