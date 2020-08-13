import React from "react";
import styled from "styled-components";
import i18n from "../i18n";

const Styled = styled.span``;

const Message = ({ language }) => {
return <Styled>{i18n[language]['welcome']}</Styled>;
};

export default Message;
