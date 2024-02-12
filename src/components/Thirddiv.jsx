import React from "react";
import grilledtomatoes from "../utils/grilledtomatoes.png";
import mealprepideas from "../utils/mealprepideas.png";
import mealprepworkout from "../utils/mealprepworkout.png";
import styled from "styled-components";

const MainCard = styled.div`
display: flex;
justify-content: space-between;
`;

const Card = styled.div`
 /* Center content vertically */
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: calc(33.33% - 20px); 
  box-sizing: border-box;
`;
const Img = styled.img`
padding-left: 40px;
  height: 220px;
  width: 280px;
  /* background-color: #000; */
  border-radius: 10px;
  margin-top: 4px;
`;

const Title = styled.div`
 margin-top:15px;
padding-left: 60px;
font-size: 80px;
font-weight: bolder;
  color: #0e2368;
  font-size: medium;
`;

const Data = styled.div`
  color: #666870;
  font-size: smaller;
  padding-left: 60px;
`;

const Button = styled.input`
 margin-top:15px;
 margin-left: 60px; 
 height: 42px;
 width: 131px;
  background-color: white;
  border-color:  #666870;
  border-radius: 21px;
  color: #0e2368;
`;

const Thirddiv = () => {
  return (
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
  );
};

export default Thirddiv;
