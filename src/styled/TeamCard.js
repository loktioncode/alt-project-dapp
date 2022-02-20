import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 40%;

  text-align: center;
  margin-bottom: 30px;
  a {
    text-decoration: none;
  }
  @media (min-width: 992px) {
    width: 140px;
  }
  .img {
    overflow: hidden;
    border-radius: 50%;
    img {
      width: 100%;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  h3 {
    color: ${(props) => props.theme.color.yellow};
    font-family: ${(props) => props.theme.fam.helvetica};
    font-size: 15px;
  }
  span {
    color: ${(props) => props.theme.color.textgrey};
    width: 60px;
    font-family: ${(props) => props.theme.fam.helvetica};
    font-size: 13px;
  }
`;

function TeamCard({ imageUrl, title, role, nickName, link }) {
  return (
    <CardWrapper>
      <a href={link}>
        <div className="img">
          <img src={`./images/${imageUrl}`} alt="" />
        </div>
        <h3>{title}</h3>
        <span>{role}</span> <br />
        <span>{nickName}</span>
      </a>
    </CardWrapper>
  );
}

export default TeamCard;
