import styled from "styled-components";
import React from "react";

const Wrapper = styled.p`
  color: #ffffff;
  font-family: ${(props) => props.theme.fam.helvetica};
  font-size: 14px;
  line-height: 1.3;
 padding: 10px;
`;

function Paragraph({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default Paragraph;
