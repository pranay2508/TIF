import React from "react";
import styled from "styled-components";
import middiv from "./../utils/middiv.png";

const Container = styled.div`
  display: flex;
  margin-top: 75px;
  background: #f7f8fa;
`;

const Img = styled.img`
  padding-left: 125px;
  height: 468px;
  width: 384px;
`;

const RightContainer = styled.div`
  /* display: flex; */
  margin-top: 110px;
  padding-left: 250px;
`;

const Title = styled.div`
  color: blue;
  color: #0e2368;
  font-family: "Poppins";
  font-size: 40px;
  font-weight: bolder;
`;

const Middle = () => {
  return (
    <Container>
      <Img src={middiv} alt />
      <RightContainer>
        <Title> About Us</Title>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          <br /> nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in <br/> reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.<br/> Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui <br/> officia deserunt mollit anim id est laborum.
        </p>
      </RightContainer>
    </Container>
  );
};

export default Middle;
