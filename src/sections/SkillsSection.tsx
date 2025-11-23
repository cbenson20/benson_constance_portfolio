import React from "react";
import styled from "styled-components";
import { skills } from "../portfolioData/skills";
import { Text } from "../components/Text";

const Section = styled.section`
  margin: 40px 0;
`;

const List = styled.ul`
  padding-left: 18px;
  margin-top: 4px;
`;

const Item = styled.li`
  margin-bottom: 2px;
`;

export const SkillsSection: React.FC = () => {
  return (
    <Section id="skills">
      <h2>Skills</h2>
      <Text content={skills.description} />

      <h3>Languages & Frameworks</h3>
      <List>
        {skills.languages.map((lang) => (
          <Item key={lang}>{lang}</Item>
        ))}
      </List>

      <h3>Tools</h3>
      <List>
        {skills.tools.map((tool) => (
          <Item key={tool}>{tool}</Item>
        ))}
      </List>
    </Section>
  );
};
