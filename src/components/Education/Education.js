import React from 'react';
import university from './university.svg'
import school from './school.svg'
import { EducationContainer, 
          EducationCard, 
          EducationH1, 
          EducationH2, 
          EducationIcon, 
          EducationP, 
          EducationWrapper} from "./EducationElements";


const Education = () => {
  return (
    <EducationContainer>
      <EducationH1>Education</EducationH1>
      <EducationWrapper>
        <EducationCard>
          <EducationIcon src={university}/>
          <EducationH2>Computer Engineering</EducationH2>
          <EducationP>Prince of songkla university phuket campus</EducationP>
          <EducationP>2016 - Present</EducationP>
        </EducationCard>
        <EducationCard>
          <EducationIcon src={school}/>
          <EducationH2>Mathematics-Science Programme</EducationH2>
          <EducationP>chiangDao Wittayakom School</EducationP>
          <EducationP>2013 - 2016</EducationP>
        </EducationCard>
      </EducationWrapper>
    </EducationContainer>
  );
}

export default Education;