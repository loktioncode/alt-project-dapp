import React from "react";
import styled from "styled-components";
import FactionCard from "../styled/FactionCard";
import Heading from "../styled/Heading";
import Paragraph from "../styled/Paragraph";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

const FactionWrapper = styled.section`
  background: #000000;
  padding: 10% 5%;
  color: #ffffff;
  text-align: center;
  @media (min-width: 768px) {
    padding: 5%;
  }
  .cards {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
  }
  h2 {
    color: #ffffff;
    font-size: 25px;
    margin: 0 auto 50px;
  }
  p {
    color: #ffffff;
    @media (min-width: 768px) {
      width: 50%;
      text-align: center;
      margin: 0 auto;
    }
  }
`;

function Factions() {
  return (
    <FactionWrapper>
      <Heading>
        <Bounce left cascade>
          Factions
        </Bounce>
      </Heading>
      <Fade left cascade>
        <div className="cards">
          <FactionCard text="Cyborg faction" imageName="faction (3).jpeg" />
          <FactionCard text="Mutant faction" imageName="faction (1).jpeg" />
          <FactionCard text="Mage Faction" imageName="faction (2).jpeg" />
        </div>
      </Fade>

      <Fade bottom>
        <Paragraph>
          In our upcoming Collection, there will be a supply of 3000 different
          pills with 3 different Factions which is randomly generated from over
          170 different assets. Each Faction comprises of 1000 Pills and by
          collecting all 3 different factions, we will airdrop you something
          special.
        </Paragraph>
      </Fade>
    </FactionWrapper>
  );
}

export default Factions;
