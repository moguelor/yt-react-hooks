import React, { useContext } from "react";
import { LanguageContext } from "../providers/LanguageProvider";
import styled from "styled-components";
import i18n from "../i18n";

const Styled = styled.span`
    font-size: 25px;
`;

const Message = () => {

const context = useContext(LanguageContext);    
return <Styled>{i18n[context.language]['welcome']}</Styled>;
};

export default Message;
