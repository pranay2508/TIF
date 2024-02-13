
import React from "react";
import grilledtomatoes from "../utils/grilledtomatoes.png";
import mealprepideas from "../utils/mealprepideas.png";
import mealprepworkout from "../utils/mealprepworkout.png";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainCard = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; 
  max-width: 1200px; 
  margin-top: 20px; 
`;

const MainTitle = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
  color: #0e2368;
  font-size: 36px;
  text-align: center;
`;

const Card = styled.div`
  border: 1px solid black;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: calc(33.33% - 20px);
  box-sizing: border-box;
  margin-bottom: 20px; 
  
  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }
  
  @media (max-width: 480px) {
    width: calc(100% - 20px);
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #0e2368;
  margin-bottom: 10px;
`;

const Data = styled.div`
  color: #666870;
  font-size: smaller;
  margin-bottom: 10px;
`;

const Button = styled.input`
  height: 42px;
  width: 100%;
  background-color: white;
  border: 1px solid #666870;
  border-radius: 21px;
  color: #0e2368;
  cursor: pointer;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ArrowButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #666870;
  padding: 5px;
`;

const Page = styled.div`
  color: black;
  padding: 9px;
`;

const Thirddiv = () => {
  return (
    <MainContainer>
      <MainTitle>Latest Articles</MainTitle>
      <MainCard>
        <Card>
          <Img src={grilledtomatoes} alt="" />
          <Title>Grilled Tomatoes at Home</Title>
          <Data>
            PLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard...
          </Data>
          <Button type="submit" value="Read More" />
        </Card>
        <Card>
          <Img src={mealprepideas} alt="" />
          <Title>Snacks for Travel</Title>
          <Data>
            PLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard...
          </Data>
          <Button type="submit" value="Read More" />
        </Card>
        <Card>
          <Img src={mealprepworkout} alt="" />
          <Title>Post-workout Recipes</Title>
          <Data>
            PLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard...
          </Data>
          <Button type="submit" value="Read More" />
        </Card>
      </MainCard>
      <ButtonBox>
        <ArrowButton>{"<"}</ArrowButton>
        <Page>1/2</Page>
        <ArrowButton>{">"}</ArrowButton>
      </ButtonBox>
    </MainContainer>
  );
};

export default Thirddiv;

