import React from "react";
import styled from "styled-components";
import { developerSetup } from "../portfolioData/developerSetup";
import { Text } from "../components/Text";

const Section = styled.section`
  margin: 40px 0;
`;

export const DeveloperSetupSection: React.FC = () => {
  return (
    <Section id="developer-setup">
      <h2>Developer Setup</h2>

      <h3>VS Code Setup</h3>
      <Text content={developerSetup.vscode.description} />

      <h3>Terminal Setup</h3>
      <Text content={developerSetup.terminal.description} />

      <h3>Preferred Editor Font</h3>
      <Text content={developerSetup.font.description} />
    </Section>
  );
};
