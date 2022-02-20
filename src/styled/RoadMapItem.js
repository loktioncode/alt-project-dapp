import React from "react";
import styled from "styled-components";
import Paragraph from "./Paragraph";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade'

const ItemWrapper = styled.li`
  position: relative;
  width: 100%;
  @media (min-width: 992px) {
    justify-content: space-between;
  }
  &:before {
    content: "";
    position: absolute;
    background: #ffffff;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    left: 0%;
    top: 0;
    transform: translateX(-50%);
    @media (min-width: 992px) {
      left: 50%;
    }
  }
  .inner{
      position:relative;
  }
  &:nth-child(odd) {
    display: flex;
    flex-direction: column-reverse;
   
    @media (min-width: 992px) {
        .inner{
          left:55%;
          width:45%;
      }
    }
    @media(min-width:1200px){
      .inner{
        padding-right:10%;
        width:35%;
        max-width:350px;
      }
    }
    .content {
      padding-left: 20px;
      @media (min-width: 992px) {
        padding-left: 5%;
      }
      span {
        margin-left: 90px;
        @media (min-width: 992px) {
          margin-left: 110px;
        }
        &:before {
          left: 0;
        }
      }
    }
    
  }
  &:nth-child(even) {
    display: flex;
    flex-direction: column-reverse;
    @media (min-width: 992px) {
      .inner{
          left:0;
          width:45%;
          text-align:right;
          max-width:350px;
          h3{
            margin-left:auto;
            width:max-content;
            display:block;
          }
      }
    }
    @media(min-width:1200px){
      .inner{
        padding-left:10%;
        width:35%;
      }
    }
    .content {
      padding-left: 20px;
      @media (min-width: 992px) {
        padding-right: 5%;
      }
      h3 {
        @media (min-width: 992px) {
          width: 230px;
        }
      }
      span {
        margin-left: 90px;
        @media (min-width: 992px) {
          text-align: right;
          display: block;
          margin: 11px 110px 50px auto;
        }
        &:before {
          left: 0;
          @media (min-width: 992px) {
            left: unset;
            right: 0;
          }
        }
      }
    }
   
  }
  .inner{
      color:#ffffff;
      padding-left:20px;
      margin-bottom:50px;
      @media(min-width:768px){
        
      }
      h3{
          margin-top:0;
          font-family:${props => props.theme.fam.helvetica};
          font-size:23px;
      }
  }
  
`;

function RoadMapItem({ title, text, textsecond }) {
  return (
    <ItemWrapper>
      <Zoom top cascade>
      <div className="inner">
          <h3>{title}</h3>
          <Fade top><Paragraph>{text}</Paragraph></Fade>
          <Fade top><Paragraph>{textsecond}</Paragraph></Fade>
      </div>
      </Zoom>
    </ItemWrapper>
  );
}

export default RoadMapItem;
