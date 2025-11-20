import { Send } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 60vh;
    background: linear-gradient(rgb(163, 185, 255), rgb(200, 209, 250));
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 54px;
    margin-bottom: 20px;

    ${mobile({ fontSize: "42px" })}
`

const Desc = styled.div`
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 20px;

    ${mobile({ textAlign: "center", fontSize: "18px" })}
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    background-color: #f6f6fa;
    border: 1px solid lightgray;

    ${mobile({ justifyContent: "center", height: "35px" })}
`

const Input = styled.input`
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    border: none;
    flex: 8;
    padding-left: 20px;
    font-size: 15px;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;

    &:hover{
      cursor: pointer;
      background-color: #015a5a;
    }
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder='Your email' />
        <Button>
            <Send/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
