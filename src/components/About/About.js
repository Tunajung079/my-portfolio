import React from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from './AboutElements';
import me2 from './me2.png';


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
                        
                        </Column1>
                        <Column2>
                        <ImgWrap>
                            <img src={me2}
                                width="385"
                                height="585"
                            />
                            </ImgWrap>
                            
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
  );
}

export default About;