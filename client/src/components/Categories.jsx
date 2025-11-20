import React from 'react'
import styled from 'styled-components'
import { categories } from "../data"
import CategoryItem from './CategoryItem'
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    background-color: #e3e5ff;

    ${mobile({ padding: "10px 0px", flexDirection: "column", margin: "10px 0px", background: "linear-gradient(rgb(184, 200, 253), rgb(185, 197, 250))"})}
`

function Categories() {
  return (
    <Container>
      {categories.map(item => (
        <CategoryItem item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Categories
