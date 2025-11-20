import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  background-color: #e3e5ff;
`;

const Title = styled.h1`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 30px;
  font-weight: 300;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;

  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  margin-right: 20px;
  font-size: 19px;
  font-weight: bold;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  ${mobile({ marginRight: "0px", fontSize: "17px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  font-size: 14px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  ${mobile({ margin: "8px 0px" })}
`;

const Option = styled.option`
  font-size: 14px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

const ProductList = () => {
  const location = useLocation()
  const cat = location.pathname.split("/")[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")

  const handleFilters = (e) => {
    const value = e.target.value
    setFilters({
      ...filters,
      [e.target.name] : value
    })
  }
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled >
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled >
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price(desc)</Option>
            <Option>Popularity</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
