import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { login } from '../redux/apiCalls';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';


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
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  outline: none;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector(state => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    if(!username || !password) return;

    login(dispatch, {username, password});
  }

  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN </Title>
            <Form>
                <Input placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                <Input placeholder="password"onChange={(e) => setPassword(e.target.value)} type="password" />
                <Button disabled={isFetching} onClick={handleLogin} >LOG IN</Button>
                { error && <Error>Something went wrong...</Error>}
                <Link>Don't remember your password?, click here </Link>
                <Link>Create an account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login