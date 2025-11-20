import React from "react";
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 16px;

    ${mobile({ height: "26px", fontSize: "15px"})}
`

const Announcement = () => {
  return (
    <div>
      <Container>
        Super Deal! Free Shipping on Orders over $50
      </Container>
    </div>
  )
}

export default Announcement
