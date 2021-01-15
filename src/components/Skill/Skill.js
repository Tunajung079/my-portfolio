import React from 'react';
import { SkillCard, SkillContainer, SkillH1, SkillH2, SkillWrapper } from './SkillElements';

const Skill = () => {
  return (
    <>
    <SkillContainer>
      <SkillH1>My Skills</SkillH1>
      <SkillWrapper>
        <SkillCard>
          <SkillH2>HTML</SkillH2>
        </SkillCard>
        <SkillCard>
          <SkillH2>CSS</SkillH2>
        </SkillCard>
        <SkillCard>
          <SkillH2>JS</SkillH2>
        </SkillCard>
        <SkillCard>
          <SkillH2>ReactJS</SkillH2>
        </SkillCard>
        <SkillCard>
          <SkillH2>Unreal En4</SkillH2>
        </SkillCard>
        <SkillCard>
          <SkillH2>Python</SkillH2>
        </SkillCard>
      </SkillWrapper>
    </SkillContainer>
    
    </>
  );
}

export default Skill;