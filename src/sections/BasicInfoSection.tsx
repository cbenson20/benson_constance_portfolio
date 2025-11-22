import React from "react";
import styled from "styled-components";
import { basicInfo } from "../portfolioData/basicInfo";
import { Text } from "../components/Text";

const Section = styled.section`
  margin: 40px 0;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 8px;
`;

const Sub = styled.p`
  margin: 4px 0;
`;

const Links = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Anchor = styled.a`
  color: #2563eb;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const BasicInfoSection: React.FC = () => {
  return (
    <Section id="basic-info">
      <Heading>{basicInfo.name}</Heading>
      <Sub>{basicInfo.tagline}</Sub>
      <Sub>{basicInfo.location}</Sub>
      <Text content={basicInfo.bio} />
      <Links>
        <Anchor href={`mailto:${basicInfo.contact.email}`}>Email</Anchor>
        <Anchor href={basicInfo.contact.github} target="_blank" rel="noreferrer">
          GitHub
        </Anchor>
        <Anchor href={basicInfo.contact.linkedIn} target="_blank" rel="noreferrer">
          LinkedIn
        </Anchor>
      </Links>
    </Section>
  );
};
