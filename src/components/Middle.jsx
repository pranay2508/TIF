
import React from "react";
import styled from "styled-components";
import middiv from "./../utils/middiv.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 75px;
  background: #f7f8fa;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Img = styled.img`
  height: 468px;
  width: 384px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const RightContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;

  @media (min-width: 768px) {
    padding-left: 250px;
    text-align: left;
  }
`;

const Title = styled.div`
  color: #0e2368;
  font-family: "Poppins";
  font-size: 40px;
  font-weight: bolder;
  margin-bottom: 10px;
`;

const Para = styled.div`
  color: #666870;
  text-align: left;
`;

const Middle = () => {
  return (
    <Container>
      <Img src={middiv} alt="middiv" />
      <RightContainer>
        <Title>About Us</Title>
        <Para>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          <br /> nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in <br /> reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur.
          <br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui <br /> officia deserunt mollit anim id est laborum.
        </Para>
      </RightContainer>
    </Container>
  );
};

export default Middle;

