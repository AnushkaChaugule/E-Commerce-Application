import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://www.clicdata.com/wp-content/uploads/2021/07/leveraging-big-data-ecommerce.jpg");
  object-fit: cover;
`;

const Wrapper = styled.div`
  width: 35%;
  padding: 20px;
  box-shadow: 4px 4px 12px 4px black, -2px -2px 12px 4px black;
  background-color: rgba(199, 197, 197, 0.6);

  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  margin: 10px 0px;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  font-family: Georgia, "Times New Roman", Times, serif;

  ${mobile({ fontSize: "22px" })}
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

const Input = styled.input`
  flex: 1;
  min-width: 80%;
  margin: 10px 0px;
  padding: 10px;
  font-size: 16px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

const Button = styled.button`
  width: 30%;
  border: none;
  margin: 10px;
  padding: 12px 15px;
  background-color: #f71a3e;
  color: white;
  cursor: pointer;
  font-size: 18px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #bd0f2c;
  }

  ${mobile({ width: "80%" })}
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 13px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #0202e2;
  }
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>FORGET PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
