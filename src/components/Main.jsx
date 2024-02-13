

import React from "react";
import styled from "styled-components";
import truck from "./../utils/truck.png";
import Rectangle from "./../utils/Rectangle 400.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Img = styled.img`
  margin-top: 20px;
  padding-left: 105px;
  height: 83px;
  width: 107px;

  @media (max-width: 375px) {
    padding-left: 50px;
    margin-top: 10px;
  }
`;

const LeftContainer = styled.div`
  width: 35%;
  order: 2;
  padding: 0 20px;
  text-align: center; 
  align-items: center;

  @media (min-width: 768px) {
    width: 35%;
    order: 1;
  }
`;

const Title = styled.div`
  margin-top: 80px;
  font-size: 1.5rem;
  padding-left: 30px;
  color: #0e2368;
  font-family: "Source Sans Pro";

  @media (min-width: 768px) {
    padding-left: 120px;
  }
`;

const Bestword = styled.span`
  color: #e23744;
`;

const SecondHeader = styled.h2`
  font-size: 15px;
  font-weight: 100;
  font-family: "Open Sans";
  color: #666870;
`;

const Button = styled.input`
  height: 63px;
  width: 190px;
  border-radius: 34px;
  margin-left: 30px;
  margin-top: 30px;
  color: white;
  background-color: red;
  border-color: #e23744;
  font-weight: bold;
  font-size: medium;

  @media (min-width: 768px) {
    margin-left: 120px;
  }
`;

const RightContainer = styled.div`
  width: 75%;
  order: 1;
  display: flex;
  /* justify-content: center; */
  justify-content: flex-end;

  @media (min-width: 768px) {
    order: 2;
  }
`;

const ImgLeft = styled.img`
  height: 725px;
  width: 100%;

  @media (min-width: 768px) {
    width: 700px;
  }
`;

const Main = () => {
  return (
    <Container>
      <RightContainer>
        <ImgLeft src={Rectangle} alt="hero-image" />
      </RightContainer>

      <LeftContainer>
        <Img src={truck} alt="hero-image" />
        <Title>
          <h1>
            Discover the <Bestword> Best </Bestword>Food and Drinks
          </h1>
          <SecondHeader id="Second-header">
            Naturally made HealthCare Products for the better care & support
            of your body.{" "}
          </SecondHeader>
        </Title>
        <Button type="submit" value="Explore Now !" />
      </LeftContainer>
    </Container>
  );
};

export default Main;
