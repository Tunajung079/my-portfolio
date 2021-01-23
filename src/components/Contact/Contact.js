import React from 'react';
import { EducationCard } from '../Education/EducationElements';
import { ContactContainer, ContactH1, ContactH2, ContactWrapper, ContactCard } from './ContactElrments';


const Contact = () => {
  return (
    <>
    <ContactContainer>
      <ContactH1>Contact Me</ContactH1>
      <ContactWrapper>
      <ContactCard>
       <ContactH2>Email : s6035512079@phuket.psu.ac.th</ContactH2>
       <ContactH2>Tel : 0996127429</ContactH2>
      </ContactCard>
      </ContactWrapper>
      
    </ContactContainer>
    </>
  );
}

export default Contact;