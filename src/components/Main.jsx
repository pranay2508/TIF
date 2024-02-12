import React from "react";
import styled from "styled-components";
import truck from "./../utils/truck.png";
// css part from here
import Rectangle from "./../utils/Rectangle 400.png"

const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  position: relative;
  /* padding: 50px 30px; */
  /* @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  } */
  z-index: 1;
`;

const Img = styled.img`
  margin-top: 20px;
  padding-left: 105px;
  height: 83px;
  width: 107px;
`;

const LeftContainer = styled.div`
  width: 35%;
  float: left;
  order: 1;
`;
const Title = styled.div`
margin-top: 80px;
  font-size: 1.5rem;
  padding-left: 120px;
 color: #0E2368;
 font-family:"Source Sans Pro";
`;
const Bestword = styled.span`
 color: #E23744;
`;

const SecondHeader = styled.h2`
  font-size: 15px;
  font-weight: 100;
  font-family: "Open Sans";
  color: black;
`;
const Button = styled.input`
height: 63px;
width:190px ;
border-radius: 34px;
/* padding-left: 40px; */
margin-left: 120px;
margin-top: 30px;
color: white;
background-color: red;
border-color: #E23744 ;
font-weight: bold;
font-size: medium;
`;

const RightContainer = styled.div`
  width: 65%;
  width: 100%;
  display: flex;
  padding-right: 0px;
  order: 2;
  justify-content: end;
  gap: 12px;
 
`;


const ImgLeft = styled.img`
height: 725px;
width: 700px;
`;




const Main = () => {
  return (
    <Container>
      <LeftContainer>
        <Img src={truck} alt="hero-image" />
        <Title>
          <h1>Discover the <Bestword> Best  </Bestword>Food and Drinks</h1>
          <SecondHeader id="Second-header">
            Naturally made HealthCare Products for the better care & support of
            your body.{" "}
          </SecondHeader>
        </Title>
        <Button type="submit" value="Explore Now !" />
      </LeftContainer>

      <RightContainer>
      <ImgLeft src={ Rectangle} alt="hero-image" />
      </RightContainer>
    </Container>
  );
};

export default Main;
