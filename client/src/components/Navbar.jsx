import { Badge, Input } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  background-color: white;
  color: black;

  ${mobile({ height: "60px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 4px 0px 14px grey;

  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 17px;
  cursor: pointer;

  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid #e0d8d8;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 4px;

  ${mobile({ padding: "1px", marginLeft: "6px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;

  ${mobile({ marginLeft: "8px" })}
`;

const Logo = styled.h1`
  /* font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; */
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: bold;
  font-size: 34px;

  ${mobile({ fontSize: "23px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 19px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 25px;
  color: black;

  ${mobile({ fontSize: "13.5px", marginLeft: "6px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input style={{ border: "none" }} />
            <Search style={{ fontSize: 20 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Style It</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary" overlap="rectangular">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
