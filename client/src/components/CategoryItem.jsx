import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 3px 10px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-weight: normal;
  color: white;
  margin-bottom: 20px;
`;
const Button = styled.button`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  border: none;
  padding: 10px;
  font-weight: bold;
  background-color: white;
  color: black;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    color: red;
    background-color: transparent;
    /* transform: scale(1.1); */
  }
`;

function CategoryItem({ item }) {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>+ SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
}

export default CategoryItem;
