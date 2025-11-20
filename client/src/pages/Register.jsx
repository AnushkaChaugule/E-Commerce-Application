import { Checkbox } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://www.clicdata.com/wp-content/uploads/2021/07/leveraging-big-data-ecommerce.jpg");
  object-fit: cover;

  ${mobile({ height: "145vh" })}
`;

const Wrapper = styled.div`
  width: 60%;
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
  /* font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif; */
  font-family: Georgia, "Times New Roman", Times, serif;

  ${mobile({ fontSize: "22px" })}
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-size: 16px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

const Agreement = styled.span`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  font-size: 16px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #f71a3e;
  color: white;
  cursor: pointer;
  font-size: 18px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  &:hover {
    background-color: #bd0f2c;
  }

  ${mobile({ width: "80%" })}
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            <Checkbox />
            <p>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b> PRIVACY POLICY</b>
            </p>
          </Agreement>
          <Button>Register</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
