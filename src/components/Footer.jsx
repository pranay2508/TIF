
import React from "react";
import styled from "styled-components";
import truck from "./../utils/truck.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Container = styled.div`
  padding: 2rem 1rem;
  background: #f7f8fa;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 3rem;
  }
`;

const Img = styled.img`
  margin-top: 20px;
  height: 85px;
  width: 121px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const ContactUs = styled.div`
  margin-top: 20px;
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 0;
    text-align: left;
  }
`;

const Title = styled.h1`
  margin-top: 10px;
  font-family: "Source Sans Pro";
  font-size: 20px;
  font-weight: 600;
  color: #0e2368;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const Info = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #666870;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const SocialLinks = styled.div`
  /* margin-top: 20px; */
  margin-bottom:60px;
  flex-direction: column; 
  align-items: center; 
  

  @media (min-width: 768px) {
    flex-direction: row; 
    margin-top: 0;
  }
`;

const SocialItem = styled.div`
  
  padding-left: 70px;
 
  margin-top: 10px; 
  /* padding-right: 100px; */

  @media (min-width: 768px) {
    margin-top: 0;
    margin-right: 20px;
  }
`;

const SocialTitle = styled.h2`

font-size: 22px;
padding-left: 40px;
  font-family: "Source Sans Pro";
  /* font-size: 18px; */
  font-weight: 600;
  color: #0e2368;
  margin-bottom: 10px; 
`;

const Footer = () => {
  return (
    <Container>
      <Img src={truck} alt="" />
      <ContactUs>
        <Title>Contact Us</Title>
        <Info>
          Lorem Ipsum Pvt Ltd.5/1, Magalton <br /> Road, Phartosh Gate near YTM{" "}
          <br /> Market, XYZ-343434 <br /> <br /> example2020@gmail.com <br />{" "}
          <br />
          (904) 443-0343
        </Info>
      </ContactUs>
      <ContactUs>
        <Title>More</Title>
        <Info>
          About Us <br /> <br /> Products <br /> <br /> Career <br /> <br />{" "}
          Contact Us
        </Info>
      </ContactUs>
      <SocialLinks>
        <SocialTitle>Social Links</SocialTitle>
        <Info>
        <SocialItem>
          <InstagramIcon style={{ fontSize: "20px" }} />
        </SocialItem>
        <SocialItem>
          <TwitterIcon style={{ fontSize: "20px" }} />
        </SocialItem>
        <SocialItem>
          <FacebookIcon style={{ fontSize: "20px" }} />
        </SocialItem>
        </Info>
        
      </SocialLinks>
    </Container>
  );
};

export default Footer;
