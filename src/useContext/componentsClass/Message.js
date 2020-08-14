import React from "react";
import { LanguageContext } from "../providers/LanguageProvider";
import styled from "styled-components";
import i18n from "../i18n";

const Styled = styled.span`
  font-size: 25px;
`;

class Message extends React.Component {
  static contextType = LanguageContext;

  render() {
    return <Styled>{i18n[this.context.language]["welcome"]}</Styled>;
  }
}

export default Message;
