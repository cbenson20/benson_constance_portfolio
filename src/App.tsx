import styled from "styled-components";
import { Button } from "./components/Button";
import { BasicInfoSection } from "./sections/BasicInfoSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ResourcesSection } from "./sections/ResourcesSection";
import { DeveloperSetupSection } from "./sections/DeveloperSetupSection";

const Container = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto 40px;
`;

const NavBar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

const NavButtonWrapper = styled.div`
  display: inline-block;
`;

const Divider = styled.hr`
  margin: 24px 0;
`;

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function App() {
  return (
    <Container>
      <NavBar>
        <NavButtonWrapper>
          <Button text="Basic Info" onClick={() => scrollToSection("basic-info")} />
        </NavButtonWrapper>
        <NavButtonWrapper>
          <Button text="Work" onClick={() => scrollToSection("work")} />
        </NavButtonWrapper>
        <NavButtonWrapper>
          <Button text="Skills" onClick={() => scrollToSection("skills")} />
        </NavButtonWrapper>
        <NavButtonWrapper>
          <Button text="Resources" onClick={() => scrollToSection("resources")} />
        </NavButtonWrapper>
        <NavButtonWrapper>
          <Button text="Dev Setup" onClick={() => scrollToSection("developer-setup")} />
        </NavButtonWrapper>
      </NavBar>

      <Divider />

      <BasicInfoSection />
      <ProjectsSection />
      <SkillsSection />
      <ResourcesSection />
      <DeveloperSetupSection />
    </Container>
  );
}

export default App;
