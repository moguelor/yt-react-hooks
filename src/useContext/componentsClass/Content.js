import React from "react";
import styled from "styled-components";
import CustomCard from "./CustomCard";
import i18n from "../i18n";
import { LanguageContext } from "../providers/LanguageProvider";

const Styled = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 60px 20px;
`;

class Content extends React.Component {
  static contextType = LanguageContext;

  render() {
    const language = this.context.language;

    return (
      <Styled>
        <CustomCard
          text={i18n[language]["title1"]}
          description={i18n[language]["description1"]}
        />
        <CustomCard
          text={i18n[language]["title2"]}
          description={i18n[language]["description2"]}
        />
        <CustomCard
          text={i18n[language]["title3"]}
          description={i18n[language]["description3"]}
        />
        <CustomCard
          text={i18n[language]["title4"]}
          description={i18n[language]["description4"]}
        />
        <CustomCard
          text={i18n[language]["title5"]}
          description={i18n[language]["description5"]}
        />
        <CustomCard
          text={i18n[language]["title6"]}
          description={i18n[language]["description6"]}
        />
      </Styled>
    );
  }
}

export default Content;
