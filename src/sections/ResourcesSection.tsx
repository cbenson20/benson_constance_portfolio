import React from "react";
import styled from "styled-components";
import { resources } from "../portfolioData/resources";
import { Card } from "../components/Card";

const Section = styled.section`
  margin: 40px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
`;

export const ResourcesSection: React.FC = () => {
  return (
    <Section id="resources">
      <h2>Resources</h2>
      <Grid>
        {resources.map((r) => (
          <Card key={r.title} title={r.title} content={r.summary} imageUrl={r.icon} />
        ))}
      </Grid>
    </Section>
  );
};
