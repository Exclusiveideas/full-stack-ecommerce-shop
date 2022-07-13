import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { register } from '../redux/apiCalls';
import { mobile } from '../responsive';
import { SLink } from './Login'
 
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
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
  width: 40%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  outline: none;
`;

const Agreement = styled.span`
  font-size: 12px;
  padding: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const P = styled.p`  
  color: red;
`

const initialState = {
  username: "",
  password: "",
  confirmPassword: "",
  error: "",
  registerResponse: "",
}

const signupReducer = (state, action) =>  {
  switch(action.type) {
     case "UPDATE_USERNAME":
       return {...state, username: action.payload}
     case "UPDATE_PASSWORD":
      return {...state, password: action.payload}
     case "UPDATE_CPASSWORD":
      return {...state, confirmPassword: action.payload}
      case "UPDATE_ERROR":
        return {...state, error: action.payload}
      case "CLEAR_ERROR":
          return {...state, error: ""}
    default: 
      return state;
  }
}

const Register = () => {
  const [state, dispatch ] = useReducer(signupReducer, initialState);
  const reduxDispatch = useDispatch();

  const registerUser = (e) => {
    e.preventDefault();

    if(state.password !== state.confirmPassword) {
      dispatch({ type: "UPDATE_ERROR", payload: "Passwords doesn't match"});
      return;
    }

    const user = {
      username: state.username,
      password: state.password,
    }

    register(reduxDispatch, user);
  }

  const Focused = () => {
    dispatch({
      type: "CLEAR_ERROR"
    })
  }

  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="username" required onFocus={Focused} value={state.username} onChange={(e) => dispatch({type: "UPDATE_USERNAME", payload: e.target.value})}  />
                <Input placeholder="password"  type={"password"} required  onFocus={Focused}  onChange={(e) => dispatch({type: "UPDATE_PASSWORD", payload: e.target.value})}  />
                <Input placeholder="confirm password" type={"password"} required  onFocus={Focused} onChange={(e) => dispatch({type: "UPDATE_CPASSWORD", payload: e.target.value})}  />
                <Agreement>
                    If the username already exist, no account will be created. By creating an account, you consent to the processing of none of your 
                    personal data in accordance with the <b>PRIVACY POLICY</b> 
                </Agreement>
                <Button  onClick={(e) => registerUser(e)}>CREATE</Button> <br />
                {state.error && <P>{state.error}</P>}
                <SLink to="/login">Already have an account? Sign in</SLink>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register