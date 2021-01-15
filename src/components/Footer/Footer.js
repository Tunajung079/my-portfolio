import React from 'react';
import { FooterContainer, 
         FooterLink, 
         FooterLinkItems, 
         FooterLinksContainer, 
         FooterLinksWrapper, 
         FooterLinkTitle, 
         FooterWrap } from './FooterElement';

const Footer = () => {
  return (
    <>
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                   <FooterLinkItems>
                   <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to='/'>Facebook</FooterLink>
                    <FooterLink to='/'>Instagram</FooterLink>
                    <FooterLink to='/'>Github</FooterLink>
                   </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
    
    </>
  );
}

export default Footer;