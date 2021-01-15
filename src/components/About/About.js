import React from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from './AboutElements';


function About() {
  return (
    <>
            <InfoContainer >
                <InfoWrapper>
                    <InfoRow >
                        <Column1>
                        {/* <TopLine>HI , I AM</TopLine> */}
                            <Heading >About Me</Heading>
                            <Subtitle >Computer Emgineering</Subtitle>
                        {/* <ImgWrap>
                            <img src={}
                                width="529"
                                height="555"
                            />
                            </ImgWrap> */}
                        </Column1>
                        <Column2>
                        <TextWrapper>
                            
                        </TextWrapper>
                            
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
  );
}

export default About;