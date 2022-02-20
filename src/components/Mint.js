import React, { useState } from "react";
import styled from "styled-components";
import Button from "../styled/Button";
import Heading from "../styled/Heading";
import Paragraph from "../styled/Paragraph";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const MintWrapper = styled.section`
  padding: 5%;
  font-family: ${(props) => props.theme.fam.helvetica};
  .inner {
    margin: 0 auto;
    text-align: center;
    h2 {
      margin: 0 auto;
      display: block;
      margin-bottom: 50px;
    }
    p {
      color: #ffffff;
    }
    input {
      height: 50px;
      width: 80%;
      text-align: center;
      background: transparent;
      border: none;
      padding: 0 10px;
      font-size: 15px;
      border-bottom: 1px solid #ffffff;
      max-width: 350px;
      &::placeholder {
        color: #ffffff;
      }
    }
    .mint-inner {
      margin: 30px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  span {
    color: #ffffff;
  }
  .inner {
    button {
      width: 200px;
      margin-bottom: 20px;
      @media (min-width: 768px) {
        margin-right: 10px;
      }
    }
  }
  .mint-item {
    .mint-span {
      p {
        font-size: 15px;
      }
      .mint-inner {
        height: 40px;
        width: 80%;
        margin: 0 auto;
        max-width: 350px;
        background: #333;
        display: flex;
        align-items: center;
        border-radius: 35px;
        padding: 5px 6px;

        span {
          font-size: 40px;
          margin:auto 0;
          border-radius: 50%;
          svg {
            color: ${(props) => props.theme.color.yellow};
          }
        }
        .number {
          background: transparent;
          color: #ffffff;
          font-size:20px;
        }
      }
    }
    .mint-span-t {
      p {
        font-ize: 20px;
      }
      .mint-inner {
        text-align: center;
        height: 50px;
        width: 80%;
        margin: 0 auto;
        max-width: 350px;
        background: #333;
        display: flex;
        align-items: center;
        border-radius: 15px;
        padding: 5px 12px;
        span {
          margin: 0 auto;
          display: block;
          width: max-content;
        }
      }
    }
  }
`;

function Mint() {
    // eslint-disable-next-line
    const [number, setNumber] = useState(1);
    if (number === 0) {
        setNumber(1);
    } else if (number === 6) {
        setNumber(5)
    }
    return (
        <MintWrapper>
            <div className="inner">
                <Heading>Mint Your NFT</Heading>

                <div className="mint-item">
                    <div className="mint-span">
                        <p>Qty</p>
                        <div className="mint-inner">
                            <span onClick={() => setNumber(number - 1)}>
                                <AiFillMinusCircle />
                            </span>
                            <span className="number">{number}</span>
                            <span onClick={() => setNumber(number + 1)}>
                                <AiFillPlusCircle />
                            </span>
                        </div>
                    </div>
                    <div className="mint-span-t">
                        <p>Total</p>
                        <div className="mint-inner">
                            <span>1 Sol</span>
                        </div>
                    </div>
                </div>
                <Paragraph>
                    *You have selected {number} NFT for a total of 1 Sol & max of 5NFTs per wallet
                </Paragraph>
                {<Button text="Mint" />}

                <Button text="Connect A Wallet" />
            </div>
        </MintWrapper>
    );
}

export default Mint;
