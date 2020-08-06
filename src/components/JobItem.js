import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Button from "./Button";

const CustomCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

const Info = styled.a`
  max-width: 400px;
`;

const JobItem = ({ item, handleClick }) => {
  const { type, title, company_logo, company } = item;

  return (
    <CustomCard width={600}>
      <Image src={company_logo} />
      <Info>
        <strong>{title}</strong>
        <br />
        <small>{type}</small>
        <br />
        <small>{company}</small>
      </Info>
      <div>
        <Button onClick={handleClick}>Select</Button>
      </div>
    </CustomCard>
  );
};

export default JobItem;
