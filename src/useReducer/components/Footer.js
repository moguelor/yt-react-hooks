import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 8px 16px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #777;
`;

const NumItems = styled.div``;

const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.div`
  background: none;
  border: none;
  font-size: 12px;
  margin: 5px;
  border: ${({isActive = false }) => isActive ? '1px solid #777' : 'none' };
  border-radius: 2px;
  padding: 3px 5px;
`;

const Footer = () => {
  return (
    <Container>
      <NumItems>8 items left</NumItems>
      <Filters>
        <Button isActive> All </Button>
        <Button> Active </Button>
        <Button > Complete </Button>
      </Filters>
      <Button>Clear</Button>
    </Container>
  );
};

export default Footer;
