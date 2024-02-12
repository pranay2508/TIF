import React from "react";
import styled from "styled-components";
import truck from "./../utils/truck.png";
// import TwitterIcon from '@mui/icons-material/Twitter';
// import FacebookIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Container = styled.div`
  /* grid-template-columns: repeat(4, 1fr); */
  /* margin-top: 50px; */
  padding-right: 100px;
  background: #f7f8fa;
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  /* padding-right: 30px; */
`;

const Img = styled.img`
  float: left;
  justify-content: center;
  padding-top: 50px;
  padding-left: 100px;
  height: 85px;
  width: 121px;
`;
const ContactUs = styled.div``;

const Title = styled.h1`
  margin-top: 10px;
  font-family: "Source Sans Pro";
  font-size: larger;
  font-weight: 600;
  color: #0e2368;
`;
const More = styled.div`
  /* margin-top: 20px; */
`;

const SocialLinks = styled.div`
  margin-right: 120px;
  /* margin-top: 20px; */
`;
const Info = styled.div`
  padding-top: 5px;
  font-size: smaller;
  color: #666870;
`;

const SocialItem= styled.div`
justify-content: space-between;

`

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
      <More>
        <Title>More</Title>
        <Info>
          About Us <br /> <br /> Products <br /> <br /> Career <br /> <br />{" "}
          Contact Us
        </Info>
      </More>
      <SocialLinks>
        <Title>Social Links</Title>
        <SocialItem>
          <InstagramIcon style={{ marginRight: '15px' , fontSize: '20px' }} />
          <TwitterIcon  style={{ marginRight: '15px' ,fontSize: '20px'}}/>
          <FacebookIcon style={{  fontSize: '20px' }}/>
        </SocialItem>
      </SocialLinks>
    </Container>
  );
};

export default Footer;

//#666870
//example2020@gmail.com
//(904) 443-0343
