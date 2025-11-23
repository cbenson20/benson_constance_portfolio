import React from "react";
import styled from "styled-components";
import { work } from "../portfolioData/work";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Text } from "../components/Text";

const Section = styled.section`
  margin: 40px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

const TechList = styled.ul`
  margin-top: 8px;
  padding-left: 18px;
  font-size: 0.9rem;
`;

const TechItem = styled.li`
  margin-bottom: 2px;
`;

const ProjectActions = styled.div`
  margin-top: 8px;
`;

export const ProjectsSection: React.FC = () => {
  return (
    <Section id="work">
      <h2>Work / Projects</h2>
      <Grid>
        {work.map((project) => (
          <Card key={project.title} title={project.title} imageUrl={project.image}>
            <Text content={project.description} />
            <strong>Tech:</strong>
            <TechList>
              {project.tech.map((t) => (
                <TechItem key={t}>{t}</TechItem>
              ))}
            </TechList>
            <ProjectActions>
              <a href={project.link} target="_blank" rel="noreferrer">
                <Button text="View Project" />
              </a>
            </ProjectActions>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};
