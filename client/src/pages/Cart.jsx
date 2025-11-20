import React from "react";
import styled from "styled-components";
// import axios from "axios";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";
// import DropIn from "braintree-web-drop-in-react";
import { useSelector } from "react-redux";


const Container = styled.div`
  background: linear-gradient(rgb(154, 178, 255), rgb(200, 209, 250));
`;

const Wrapper = styled.div`
  padding: 20px;

  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  ${mobile({ fontSize: "30px" })}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  ${mobile({ padding: "10px 0px" })}
`;

const TopButton = styled.button`
  padding: 13px 15px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  ${mobile({ padding: "12px 8px", fontSize: "13px" })}
`;

const TopTexts = styled.div`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  ${mobile({ display: "none" })}
`;

const TopText = styled.span`
  margin: 0px 10px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ margin: "10px 0px", flexDirection: "column" })}
`;

const Info = styled.p`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  object-fit: cover;

  ${mobile({ width: "170px" })}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${mobile({ padding: "10px" })}
`;

const ProductName = styled.span`
  font-size: 18px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  ${mobile({ fontSize: "16px" })}
`;

const ProductId = styled.span`
  font-size: 17px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  ${mobile({ fontSize: "15px" })}
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span`
  font-size: 17px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  ${mobile({ fontSize: "15px" })}
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  ${mobile({ marginBottom: "10px" })}
`;

const ProductAmount = styled.div`
  font-size: 22px;
  margin: 5px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  ${mobile({ margin: "5px 15px", fontSize: "20px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 500;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  ${mobile({ marginBottom: "20px", fontSize: "26px" })}
`;

const Hr = styled.hr`
  background-color: #a1a0a0;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  margin-top: 30px;
  border: 1px solid gray;
  box-shadow: 4px 4px 14px 4px grey, -4px -4px 14px 4px grey;
  background-color: #d5d5ec;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;

  ${mobile({ margin: "20px 10px" })}
`;

const SummaryTitle = styled.h1`
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  ${mobile({ fontSize: "23px" })}
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "bold"};
  font-size: ${(props) => (props.type === "total" ? "22px" : "17px")};

  ${mobile({ margin: "25px 0px" })}
`;

const SummaryItemText = styled.span`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

const SummaryItemPrice = styled.span`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-size: 18px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;

  &:hover {
    font-size: 19px;
    background-color: #c0aeae;
  }

  ${mobile({ fontSize: "16px" })}
`;

const Cart = () => {
  // const [clientToken, setClientToken] = useState(null);
  // const [instance, setInstance] = useState(null); // Add state for the DropIn instance
  const cart = useSelector((state) => state.cart); 

  const handleCheckoutRedirect = () => {
    // Replace with the actual URL of your `react-braintree` application
    const reactBraintreeUrl = "http://localhost:3001/pay"; // Example URL
    window.location.href = reactBraintreeUrl;
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            { cart.products.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (cart.products.map((product) => (
              <Product key={product._id}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>
                    ₹ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            )))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₹ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₹ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>₹ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₹ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            {/* {clientToken && (
              <DropIn
                options={{ authorization: clientToken }}
                onInstance={(instance) => setInstance(instance)} // Set the instance
              />
            )} */}
            <Button onClick={handleCheckoutRedirect}>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
