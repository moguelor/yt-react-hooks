import React from "react";
import styled from "styled-components";
import { Card } from "../../components";

const Styled = styled(Card)`
  width: 400px;
  padding: 5px 15px 15px;
  margin: 15px;
`;

const Description = styled.div`
  line-height: 1.5;
`;

const CustomCard = ({ text, description }) => {
  return (
    <Styled>
      <h1>{text}</h1>
      <Description>{description}</Description>
    </Styled>
  );
};

export default CustomCard;
