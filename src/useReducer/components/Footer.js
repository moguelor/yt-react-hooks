import React from "react";
import styled from "styled-components";

const Align = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContainerButtons = styled(Align)``;

const Container = styled(Align)`
  padding: 8px 16px;
  font-size: 12px;
  color: #777;
`;

const Button = styled.div`
  background: none;
  border: none;
  font-size: 12px;
  margin: 5px;
  border: ${({ isActive = false }) => (isActive ? "1px solid #777" : "none")};
  border-radius: 2px;
  padding: 3px 5px;
  cursor: pointer;
  text-align: center;
`;

const Footer = ({
  totalItems,
  active,
  handleClickFilter,
  handleClickClear,
  handleClickReset,
}) => {
  return (
    <Container>
      <div>{totalItems} items left</div>
      <ContainerButtons>
        <Button
          isActive={active === "all"}
          onClick={() => handleClickFilter("all")}
        >
          All
        </Button>
        <Button
          isActive={active === "active"}
          onClick={() => handleClickFilter("active")}
        >
          Active
        </Button>
        <Button
          isActive={active === "complete"}
          onClick={() => handleClickFilter("complete")}
        >
          Complete
        </Button>
      </ContainerButtons>
      <ContainerButtons>
        <Button onClick={handleClickClear}>Clear</Button>
        <Button onClick={handleClickReset}>Reset</Button>
      </ContainerButtons>
    </Container>
  );
};

export default Footer;
