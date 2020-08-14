import React from "react";
import styled from "styled-components";
import { LanguageContext } from "../providers/LanguageProvider";

const Styled = styled.span`
  color: ${({ isActive = false }) => (isActive ? "#61dafb" : "#FFF")};
  margin-left: 5px;
  cursor: pointer;
`;

class LanguageItem extends React.Component {
  static contextType = LanguageContext;
  render() {
    const { text } = this.props;
    const isActive = text === this.context.language;
    return (
      <Styled
        onClick={() => this.context.setLanguage(text)}
        isActive={isActive}
      >
        {text}
      </Styled>
    );
  }
}

export default LanguageItem;
