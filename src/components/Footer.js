import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";
import styled from "styled-components";
import Heading from "../styled/Heading";
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip'

const FooterWrapper = styled.footer`
  padding: 5%;
  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 1200px) {
    padding: 5% 15%;
  }
  .footer-inner {
    text-align: left;
    margin-bottom: 30px;
    @media (min-width: 768px) {
      width: 45%;
    }
    h2 {
      margin: 0 0 30px;
      @media (min-width: 768px) {
        font-size: 20px;
      }
    }
    a {
      text-decoration: none;
      color: rgb(232, 232, 232);
      font-family: ${(props) => props.theme.helvetica};
      font-size: 18px;
    }

    .social-links,
    .links {
      display: flex;
      justify-content: space-between;
      width: 120px;
      margin-top: 30px;
      @media (min-width: 768px) {
        display: none;
      }
      svg {
        height: 30px;
        width: 30px;
      }
    }
    .social-links {
      display: none;
      @media (min-width: 768px) {
        display: flex;
        width: 120px;
        margin-top: 30px;
      }
      svg {
        height: 30px;
        width: 30px;
      }
    }
    form {
      width: 100%;
      max-width: 400px;
      display: flex;
      @media (min-width: 768px) {
        margin-bottom: 40px;
      }
      input {
        width: 85%;
        height: 50px;
        border: none;
        padding: 0 10px;
        font-weight: 900;
        color: #000000;
        font-family: ${(props) => props.theme.fam.helvetica};
        &::placeholder {
          color: #000000;
        }
      }
      button {
        height: 50px;
        width: 15%;
        border: none;
        background: #ffffff;
        svg {
          height: 20px;
          width: 20px;
        }
      }
    }
    .last {
      text-align: left;
      display: flex;
      align-items: center;
      color: #ffffff;
      font-family: ${(props) => props.theme.fam.helvetica};
      font-size: 15px;
      line-height: 1.3;
      margin: 0 auto;
      justify-content: flex-start;
      img {
        width: 80px;
        object-fit: contain;
      }
    }
  }
`;

function Footer() {
  return (
    <FooterWrapper>
      <div className="footer-inner">
        <Heading><Bounce left cascade>Contact Us</Bounce></Heading>
        <a href="mailto:pillsyndrome@gmail.com">pillsyndrome@gmail.com</a>
        <div className="social-links">
          <a href="https://www.instagram.com/pillsyndrome">
            <FiInstagram />
          </a>
          <a href="https://twitter.com/pill_syndrome">
            <BsTwitter />
          </a>
          <a href="https://www.discord.com/invite/8kPnRSjkZr">
            <SiDiscord />
          </a>
        </div>
      </div>
      <div className="footer-inner">
      
        <div className="links">
          <a href>
            <FiInstagram />
          </a>
          <a href>
            <BsTwitter />
          </a>
          <a href>
            <SiDiscord />
          </a>
        </div>
        <Flip left cascade><p className="last">
          <span>As Seen On:</span> <img src="./images/signature.png" alt="" />
        </p>
        </Flip>
        
      </div>
    </FooterWrapper>
  );
}

export default Footer;
