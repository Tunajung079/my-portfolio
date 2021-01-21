import React from 'react';
import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { FooterContainer, 
         FooterLink, 
         FooterLinkItems, 
         FooterLinksContainer, 
         FooterLinksWrapper, 
         FooterLinkTitle, 
         FooterWrap,
         SocialMedia,
         SocialMediaWrap,
         SocialLogo,
         WebsiteRights,
         SocialIcons,
         SocialIconLink} from './FooterElement';

const Footer = () => {
  return (
    <>
    <FooterContainer>
        <FooterWrap>
            {/* <FooterLinksContainer>
                <FooterLinksWrapper>
                   <FooterLinkItems>
                   <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to='/'>Facebook</FooterLink>
                    <FooterLink to='/'>Instagram</FooterLink>
                    <FooterLink to='/'>Github</FooterLink>
                   </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer> */}
            <SocialMedia>
              <SocialMediaWrap>
                <SocialLogo to='/'>
                  Portfolio
                </SocialLogo>
                <WebsiteRights>Portfolio © {new Date().getFullYear()}</WebsiteRights>
                <SocialIcons>
                  <SocialIconLink href="//www.facebook.com/Na.Nichakan" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                  <SocialIconLink href="//www.instagram.com/tuxxna" target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                  <SocialIconLink href="//github.com/Tunajung079" target="_blank" aria-label="GitHub"><FaGithub/></SocialIconLink>
                </SocialIcons>
              </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    
    </>
  );
}

export default Footer;