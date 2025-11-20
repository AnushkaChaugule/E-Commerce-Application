import  React, { useState } from "react";
// import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  margin-top: 7px;
  height: 86vh;
  display: flex;
  background-color: #e3e5ff;
  position: relative;
  overflow: hidden;

  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 86vh;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  background-color: #e3e5ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 95%;
  width: 95%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-weight: 600;
  font-size: 55px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 6px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 15px;
  font-weight: bold;
  background-color: transparent;
  color: black;
  border-color: gray;
  cursor: pointer;
  &:hover {
    color: red;
    border-color: red;
    transform: scale(1.1);
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0); // Use state to manage slide index
  
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow
        direction="left"
        onClick={() => {
          handleClick("left");
        }}
      >
        {/* <ArrowLeft /> */}
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>+ SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow
        direction="right"
        onClick={() => {
          handleClick("right");
        }}
      >
        {/* <ArrowRight /> */}
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
